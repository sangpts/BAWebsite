import { Download } from "lucide-react";
import Link from "next/link";
import { site } from "src/data/site";
export function SiteHeader({ active }: { active: "profile" | "projects" }) {
	return (
		<header className="site-header">
			<div className="brand">
				<Link href="/">{site.name}</Link>
				<span>{site.role}</span>
			</div>
			<nav aria-label="Main navigation">
				<Link className={active === "profile" ? "active" : ""} href="/">
					Profile
				</Link>
				<Link className={active === "projects" ? "active" : ""} href="/projects">
					Projects
				</Link>
				<Link className="download" href={site.cv} download>
					<span>Download CV</span>
					<Download size={15} />
				</Link>
			</nav>
		</header>
	);
}
