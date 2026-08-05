import { site } from "src/data/site";
export function SiteFooter() {
	return (
		<footer>
			<span>© {new Date().getFullYear()} Phung Tan Sang. All rights reserved.</span>
			<span>
				{site.role} · {site.location}
			</span>
		</footer>
	);
}
