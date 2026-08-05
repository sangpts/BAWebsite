import { Download } from "lucide-react";
import { SiteFooter } from "src/components/layout/site-footer";
import { SiteHeader } from "src/components/layout/site-header";
import { ProjectSection } from "src/components/projects/project-section";
import { ButtonLink } from "src/components/ui/button-link";
import { projects } from "src/data/projects";
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
						<ButtonLink href="/documents/phung-tan-sang-cv.pdf" secondary download>
							<Download size={16} /> Download CV
						</ButtonLink>
					</div>
				</section>
				{projects.map((project) => (
					<ProjectSection project={project} key={project.id} />
				))}
			</div>
			<SiteFooter />
		</main>
	);
}
