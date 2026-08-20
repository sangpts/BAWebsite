import { SiteFooter } from "src/components/layout/site-footer";
import { SiteHeader } from "src/components/layout/site-header";
import { SiteSection } from "src/components/layout/site-header.type";
import { ProjectSection } from "src/components/projects/project-section";
import { ProjectsCta } from "src/components/projects/projects-cta";
import { RevealOnScroll } from "src/components/ui/reveal-on-scroll";
import { projects } from "src/data/projects";

/**
 * Renders two end-to-end business cases covering internal operations and
 * external digital experience.
 */
export default function ProjectsPage() {
	const projectOrder = ["enterprise-system", "corporate-website"];
	const selectedProjects = projectOrder
		.map((id) => projects.find((project) => project.id === id))
		.filter((project): project is (typeof projects)[number] => Boolean(project));

	return (
		<main className="paper">
			<SiteHeader active={SiteSection.Projects} />
			<div className="page-content projects-editorial">
				<RevealOnScroll className="projects-reveal projects-reveal--intro">
					<section className="projects-editorial__intro">
						<div className="projects-editorial__intro-copy">
							<p className="projects-editorial__eyebrow">Selected work / 2023—2026</p>
							<h1>
								<span>Inside the business.</span>
								<span>Outside the business.</span>
							</h1>
							<p className="projects-editorial__subtitle">
								Two projects showing one practical approach to digital transformation.
							</p>
						</div>
						<div className="projects-editorial__manifesto">
							<p>
								I investigate the real business context, identify the underlying problem, define a
								workable solution, validate it, and stay involved through delivery.
							</p>
							<span>Business Analysis · Solution Design · Development · Testing · Delivery</span>
						</div>
					</section>
				</RevealOnScroll>

				<RevealOnScroll className="projects-reveal projects-reveal--index" delay={60}>
					<nav aria-label="Project index" className="projects-index">
						{selectedProjects.map((project, index) => (
							<a href={`#${project.id}`} key={project.id}>
								<span>{String(index + 1).padStart(2, "0")}</span>
								<strong>{project.caseStudy.perspective}</strong>
								<small>{project.title}</small>
							</a>
						))}
					</nav>
				</RevealOnScroll>

				<div className="projects-editorial__journey">
					{selectedProjects.map((project, index) => (
						<RevealOnScroll
							className="projects-reveal projects-reveal--case"
							delay={index * 90}
							key={project.id}
						>
							<ProjectSection index={index} project={project} />
						</RevealOnScroll>
					))}
				</div>

				<RevealOnScroll className="projects-reveal projects-reveal--closing projects-closing-shell">
					<ProjectsCta />
				</RevealOnScroll>
			</div>
			<SiteFooter />
		</main>
	);
}
