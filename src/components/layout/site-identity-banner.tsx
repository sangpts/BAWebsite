import { GraduationCap, Quote } from "lucide-react";
import { education } from "src/data/cv";
import { site } from "src/data/site";

export function SiteIdentityBanner() {
	const degree = education.degree.replace(/^Bachelor's Degree in\s*/i, "");

	return (
		<aside className="site-identity-banner" aria-label="Professional positioning and education">
			<Quote className="site-identity-quote-icon" size={30} strokeWidth={1.8} aria-hidden="true" />
			<p>{site.identityBanner.quote}</p>
			<span className="site-identity-divider" aria-hidden="true" />
			<div className="site-identity-person">
				<GraduationCap
					className="site-identity-education-icon"
					size={40}
					strokeWidth={1.8}
					aria-hidden="true"
				/>
				<span>
					<strong>{education.institution}</strong>
					<small>
						{degree} | {education.period}
					</small>
				</span>
			</div>
		</aside>
	);
}
