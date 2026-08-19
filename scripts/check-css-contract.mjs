import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const STYLE_FILES = [
	"src/styles/tokens.css",
	"src/styles/base.css",
	"src/styles/layout.css",
	"src/styles/profile.css",
	"src/styles/projects.css",
];

/**
 * Removes comments while preserving quoted strings so block scanning remains stable.
 * @param {string} source - Raw CSS source.
 * @returns {string} CSS source without comments.
 */
function stripComments(source) {
	return source.replace(/\/\*[\s\S]*?\*\//g, "");
}

/**
 * Normalizes a selector or at-rule prelude for deterministic duplicate detection.
 * @param {string} value - Raw prelude text.
 * @returns {string} Normalized prelude.
 */
function normalize(value) {
	return value.replace(/\s+/g, " ").replace(/\s*,\s*/g, ",").trim();
}

/**
 * Extracts selectors and their enclosing at-rule scopes without requiring a CSS parser dependency.
 * @param {string} source - CSS source to inspect.
 * @returns {Array<{ selector: string, scope: string }>} Selector records.
 */
function collectSelectors(source) {
	const css = stripComments(source);
	const records = [];
	const stack = [];
	let segmentStart = 0;
	let quote = null;
	let escaped = false;

	for (let index = 0; index < css.length; index += 1) {
		const character = css[index];

		if (quote) {
			if (escaped) {
				escaped = false;
				continue;
			}
			if (character === "\\") {
				escaped = true;
				continue;
			}
			if (character === quote) quote = null;
			continue;
		}

		if (character === '"' || character === "'") {
			quote = character;
			continue;
		}

		if (character === "{") {
			const prelude = normalize(css.slice(segmentStart, index));
			const isAtRule = prelude.startsWith("@");
			const isKeyframes = stack.some((entry) => entry.type === "keyframes");

			if (!isAtRule && !isKeyframes && prelude) {
				const scope = stack
					.filter((entry) => entry.type === "at-rule")
					.map((entry) => entry.prelude)
					.join(" > ");
				records.push({ scope, selector: prelude });
			}

			stack.push({
				prelude,
				type: /^@(?:-\w+-)?keyframes\b/i.test(prelude)
					? "keyframes"
					: isAtRule
						? "at-rule"
						: "rule",
			});
			segmentStart = index + 1;
			continue;
		}

		if (character === "}") {
			stack.pop();
			segmentStart = index + 1;
			continue;
		}

		if (character === ";" && stack.at(-1)?.type !== "rule") {
			segmentStart = index + 1;
		}
	}

	return records;
}

/**
 * Validates selector ownership and fails when the same selector is declared twice in the same scope.
 */
async function main() {
	const ownership = new Map();
	const errors = [];

	for (const relativePath of STYLE_FILES) {
		const source = await readFile(path.join(ROOT, relativePath), "utf8");
		const localKeys = new Set();

		for (const record of collectSelectors(source)) {
			const key = `${record.scope}::${record.selector}`;
			if (localKeys.has(key)) {
				errors.push(`${relativePath}: duplicate selector in the same scope: ${record.selector}`);
				continue;
			}
			localKeys.add(key);

			const owner = ownership.get(key);
			if (owner && owner !== relativePath) {
				errors.push(
					`${record.selector} is owned by both ${owner} and ${relativePath} in scope ${record.scope || "root"}`,
				);
			} else {
				ownership.set(key, relativePath);
			}
		}
	}

	const globals = await readFile(path.join(ROOT, "src/app/globals.css"), "utf8");
	const nonImportContent = globals
		.replace(/@import\s+[^;]+;/g, "")
		.replace(/\s+/g, "")
		.trim();
	if (nonImportContent) {
		errors.push("src/app/globals.css must contain imports only.");
	}

	if (errors.length > 0) {
		console.error("CSS contract failed:\n");
		for (const error of errors) console.error(`- ${error}`);
		process.exitCode = 1;
		return;
	}

	console.log(`CSS contract passed for ${STYLE_FILES.length} owned style modules.`);
}

await main();
