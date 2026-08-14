import { MongoClient } from "mongodb";
import { cvSummary, education, otherActivities, skillGroups } from "../src/data/cv.ts";
import { experience } from "../src/data/experience.ts";
import { profileContent } from "../src/data/profile.ts";
import { projects } from "../src/data/projects.ts";
import { capabilities, site } from "../src/data/site.ts";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is required. Add it to .env.local.");
const client = new MongoClient(uri);
const slugify = (value: string) =>
	value
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

try {
	await client.connect();
	const database = client.db(process.env.MONGODB_DB ?? "phung_tan_sang_portfolio");
	const collection = database.collection("portfolio_content");
	await collection.createIndex({ type: 1, slug: 1 }, { unique: true });
	await collection.createIndex({ type: 1, status: 1, order: 1 });
	const now = new Date();
	const documents = [
		{ type: "site", slug: "main", order: 0, data: site },
		{ type: "profile", slug: "main", order: 0, data: { ...profileContent, capabilities } },
		{
			type: "cv",
			slug: "main",
			order: 0,
			data: { summary: cvSummary, education, skillGroups, otherActivities },
		},
		...experience.map((data, order) => ({
			type: "experience",
			slug: slugify(data.company),
			order,
			data,
		})),
		...projects.map((data, order) => ({ type: "project", slug: data.id, order, data })),
	];
	for (const document of documents)
		await collection.updateOne(
			{ type: document.type, slug: document.slug },
			{
				$set: { ...document, status: "published", updatedAt: now },
				$setOnInsert: { createdAt: now },
			},
			{ upsert: true },
		);
	console.log(
		`Seeded ${documents.length} content documents into ${database.databaseName}.${collection.collectionName}`,
	);
} finally {
	await client.close();
}
