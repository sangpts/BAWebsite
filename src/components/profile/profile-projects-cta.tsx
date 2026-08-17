import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { profileContent } from "src/data/profile";
import { site } from "src/data/site";

export function ProfileProjectsCta() {
	const content = profileContent.projectsCta;

	return (
		<section className="profile-projects-cta" aria-label="Selected projects">
			<div className="profile-projects-cta__copy">
				<p className="profile-projects-cta__eyebrow">{content.eyebrow}</p>
				<h2>{content.headline}</h2>
			</div>

			<div className="profile-projects-cta__next">
				<Link href="/projects">
					<span>{content.actionLabel}</span>
					<ArrowRight aria-hidden="true" />
				</Link>
			</div>

			<div className="profile-projects-cta__meta">
				<span>© {new Date().getFullYear()} {site.brandName}. All rights reserved.</span>
				<span>{site.role} · {site.location}</span>
			</div>
		</section>
	);
}
