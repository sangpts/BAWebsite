import { SiteFooter } from "src/components/layout/site-footer";
import { SiteHeader } from "src/components/layout/site-header";
import { ProjectSection } from "src/components/projects/project-section";
import { ProjectsCta } from "src/components/projects/projects-cta";
import { RevealOnScroll } from "src/components/ui/reveal-on-scroll";
import { projects } from "src/data/projects";

export default function ProjectsPage() {
	const projectOrder = ["enterprise-system", "corporate-website"];
	const selectedProjects = projectOrder
		.map((id) => projects.find((project) => project.id === id))
		.filter((project): project is (typeof projects)[number] => Boolean(project));

	return (
		<main className="paper">
			<SiteHeader active="projects" />
			<div className="page-content projects-editorial">
				<RevealOnScroll>
					<section className="projects-editorial__intro">
						<div className="projects-editorial__intro-copy">
							<p className="projects-editorial__eyebrow">Selected Work</p>
							<h1>A journey across two perspectives.</h1>
							<p className="projects-editorial__subtitle">Inside operations. Outside impact.</p>
						</div>
						<p className="projects-editorial__manifesto">
							I work at the intersection of business, systems, and experience to deliver solutions
							that are practical, connected, and measurable.
						</p>
					</section>
				</RevealOnScroll>

				<div className="projects-editorial__journey">
					{selectedProjects.map((project, index) => (
						<RevealOnScroll key={project.id} delay={index * 70}>
							<ProjectSection project={project} index={index} />
						</RevealOnScroll>
					))}
				</div>

				<RevealOnScroll delay={80}>
					<ProjectsCta />
				</RevealOnScroll>
			</div>
			<SiteFooter />
		</main>
	);
}
