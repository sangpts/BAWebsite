import { Download } from "lucide-react";
import { SiteFooter } from "src/components/layout/site-footer";
import { SiteHeader } from "src/components/layout/site-header";
import { ProjectSection } from "src/components/projects/project-section";
import { ProjectsCta } from "src/components/projects/projects-cta";
import { ButtonLink } from "src/components/ui/button-link";
import { projects } from "src/data/projects";
import { site } from "src/data/site";
export default function ProjectsPage() {
	return (
		<main className="paper">
			<SiteHeader active="projects" />
			<div className="page-content projects-page">
				<section className="projects-intro">
					<div>
						<p className="eyebrow">Selected Projects</p>
						<h1>How I approach business problems and turn requirements into practical outcomes.</h1>
						<p>
							A selection of projects demonstrating business analysis, process design, system
							thinking, implementation, and collaboration across different types of solutions.
						</p>
					</div>
					<div className="actions">
						<ButtonLink href="/" secondary>
							← Back to Profile
						</ButtonLink>
						<ButtonLink href={site.cv} secondary download disabled={!site.cvAvailable}>
							<Download size={16} /> {site.cvAvailable ? "Download CV" : "CV Coming Soon"}
						</ButtonLink>
					</div>
				</section>
				{projects.map((project) => (
					<ProjectSection project={project} key={project.id} />
				))}
				<ProjectsCta />
			</div>
			<SiteFooter />
		</main>
	);
}
