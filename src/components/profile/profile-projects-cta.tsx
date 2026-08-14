import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { profileContent } from "src/data/profile";

export function ProfileProjectsCta() {
	const content = profileContent.projectsCta;

	return (
		<section className="profile-projects-cta" aria-label="Selected projects">
			<div className="profile-projects-cta__copy">
				<p className="profile-projects-cta__eyebrow">{content.eyebrow}</p>
				<h2>
					{content.headline[0]}
					<span>{content.headline[1]}</span>
				</h2>
				<p className="profile-projects-cta__summary">{content.summary}</p>
				<ul className="profile-projects-cta__topics" aria-label="Selected work focus areas">
					{content.topics.map((topic) => (
						<li key={topic}>{topic}</li>
					))}
				</ul>
			</div>

			<div className="profile-projects-cta__next">
				<p>{content.nextLabel}</p>
				<strong>{content.nextPage}</strong>
				<Link href="/projects">
					<span>{content.actionLabel}</span>
					<ArrowRight aria-hidden="true" />
				</Link>
			</div>
		</section>
	);
}
