import { site } from "src/data/site";

/**
 * Renders the compact ownership and location footer used on the project page.
 */
export function SiteFooter() {
	return (
		<footer className="site-footer">
			<span>© {new Date().getFullYear()} Phung Tan Sang. All rights reserved.</span>
			<span>
				{site.role} · {site.location}
			</span>
		</footer>
	);
}
