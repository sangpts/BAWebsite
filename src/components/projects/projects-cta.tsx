import { Download, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "src/components/ui/button-link";
import { site } from "src/data/site";
export function ProjectsCta() {
	return (
		<section className="projects-cta">
			<h2>
				Looking for a Business Analyst who can connect business needs with practical implementation?
			</h2>
			<div className="actions">
				<a className="button" href={`mailto:${site.email}`}>
					<Mail size={16} /> Email Me
				</a>
				{site.linkedin && (
					<a
						className="button button-secondary"
						href={site.linkedin}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin size={16} /> View LinkedIn
					</a>
				)}
				<ButtonLink href={site.cv} secondary download disabled={!site.cvAvailable}>
					<Download size={16} /> {site.cvAvailable ? "Download CV" : "CV Coming Soon"}
				</ButtonLink>
				<Link className="text-link" href="/">
					← Back to Profile
				</Link>
			</div>
		</section>
	);
}
