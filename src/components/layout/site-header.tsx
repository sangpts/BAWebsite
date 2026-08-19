import { Download } from "lucide-react";
import Link from "next/link";
import { ContactBar } from "src/components/layout/contact-bar";
import { site } from "src/data/site";
import { SiteHeaderUi } from "./site-header.ui";
import { SiteSection, type SiteHeaderProps } from "./site-header.type";

/**
 * Composes the static header content while delegating scroll and mobile-menu behavior to the client shell.
 */
export function SiteHeader({ active }: SiteHeaderProps) {
	const brand = (
		<Link className="brand-name" href="/" aria-label={`${site.name} - Home`}>
			<span className="brand-copy">
				<strong className="brand-title">{site.name}</strong>
				<small className="brand-subtitle">{site.role}</small>
			</span>
		</Link>
	);

	const navigation = (
		<nav className="site-nav" aria-label="Main navigation">
			<div className="nav-pages">
				<Link
					aria-current={active === SiteSection.Profile ? "page" : undefined}
					className={`nav-link ${active === SiteSection.Profile ? "active" : ""}`}
					href="/"
				>
					<span>Profile</span>
				</Link>
				<Link
					aria-current={active === SiteSection.Projects ? "page" : undefined}
					className={`nav-link ${active === SiteSection.Projects ? "active" : ""}`}
					href="/projects"
				>
					<span>Projects</span>
				</Link>
			</div>
		</nav>
	);

	const cvAction = site.cvAvailable ? (
		<Link className="download header-cv" download href={site.cv}>
			<span>DOWNLOAD CV</span>
			<Download aria-hidden="true" size={15} />
		</Link>
	) : (
		<span
			aria-disabled="true"
			className="download header-cv download-disabled"
			title="Add the latest CV PDF to enable this action"
		>
			<span>CV Coming Soon</span>
			<Download aria-hidden="true" size={15} />
		</span>
	);

	return (
		<SiteHeaderUi
			brand={brand}
			contact={<ContactBar />}
			cvAction={cvAction}
			navigation={navigation}
		/>
	);
}
