import Image from "next/image";
import { ProjectVisualVariant, type Project } from "src/types";

interface ProjectSectionProps {
	index: number;
	project: Project;
}

/**
 * Renders one complete business case with visible ownership, solution scope,
 * and replaceable evidence media.
 */
export function ProjectSection({ project, index }: ProjectSectionProps) {
	const caseStudy = project.caseStudy;
	const number = String(index + 1).padStart(2, "0");
	const sectionClassName = [
		"project-case",
		`project-case--${caseStudy.visualVariant}`,
		caseStudy.reverse ? "project-case--reverse" : "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<section
			aria-labelledby={`${project.id}-title`}
			className={sectionClassName}
			id={project.id}
		>
			<header className="project-case__topline">
				<span aria-hidden="true">{number}</span>
				<p>{caseStudy.perspective}</p>
				<small>Case study</small>
			</header>

			<div className="project-case__hero">
				<div className="project-case__hero-copy">
					<p className="project-case__category">{project.category}</p>
					<h2 id={`${project.id}-title`}>{project.title}</h2>
					<p className="project-case__overview">{caseStudy.overview}</p>

					<div className="project-case__metrics" aria-label="Project highlights">
						{caseStudy.metrics.map((metric) => (
							<div key={metric.label}>
								<strong>{metric.value}</strong>
								<span>{metric.label}</span>
							</div>
						))}
					</div>
				</div>

				<figure className="project-case__primary-media">
					<div className="project-case__media-frame">
						{caseStudy.visualVariant === ProjectVisualVariant.Website ? (
							<div aria-hidden="true" className="project-case__browser-bar">
								<span />
								<span />
								<span />
							</div>
						) : null}
						<Image
							alt={caseStudy.primaryImageAlt}
							height={900}
							priority={index === 0}
							sizes="(max-width: 1023px) 100vw, 52vw"
							src={caseStudy.primaryImage}
							width={1600}
						/>
					</div>
					<figcaption>{caseStudy.primaryCaption}</figcaption>
				</figure>
			</div>

			<div className="project-case__meta" aria-label="Project at a glance">
				<div>
					<span>Role</span>
					<strong>{caseStudy.role}</strong>
				</div>
				{caseStudy.teamSize ? (
					<div>
						<span>Team Size</span>
						<strong>{caseStudy.teamSize}</strong>
					</div>
				) : null}
				<div>
					<span>Delivery Ownership</span>
					<strong>{caseStudy.ownership}</strong>
				</div>
				<div>
					<span>{caseStudy.scopeLabel}</span>
					<strong>{caseStudy.scope.join(" · ")}</strong>
				</div>
			</div>

			<div className="project-case__story">
				<article className="project-case__business-case">
					<p className="project-case__section-label">Business Case</p>
					<div>
						{caseStudy.businessCase.map((paragraph) => (
							<p key={paragraph}>{paragraph}</p>
						))}
					</div>
				</article>

				<article className="project-case__challenge">
					<p className="project-case__section-label">The Challenge</p>
					<p>{caseStudy.challenge}</p>
					<div className="project-case__delivery-tags" aria-label="Delivery activities">
						{caseStudy.delivery.map((item) => (
							<span key={item}>{item}</span>
						))}
					</div>
				</article>
			</div>

			<div className="project-case__delivery">
				<article className="project-case__contribution">
					<p className="project-case__section-label">My Contribution</p>
					<p className="project-case__section-intro">{caseStudy.contributionIntro}</p>
					<ul>
						{caseStudy.contributions.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</article>

				<article className="project-case__solution">
					<p className="project-case__section-label">Solution Delivered</p>
					<p className="project-case__section-intro">{caseStudy.solutionIntro}</p>
					<div className="project-case__solution-grid">
						{caseStudy.solutionAreas.map((area) => (
							<div key={area.title}>
								<h3>{area.title}</h3>
								<p>{area.description}</p>
							</div>
						))}
					</div>
				</article>
			</div>

			<section className="project-case__value" aria-labelledby={`${project.id}-value-title`}>
				<div>
					<p className="project-case__section-label">Business Value</p>
					<h3 id={`${project.id}-value-title`}>
						A clearer operating structure, built for practical use.
					</h3>
				</div>
				<ul>
					{caseStudy.businessValue.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			</section>

			<section className="project-case__evidence" aria-labelledby={`${project.id}-evidence-title`}>
				<header>
					<p className="project-case__section-label">Project Evidence</p>
					<h3 id={`${project.id}-evidence-title`}>
						Replace these prepared media slots with project images.
					</h3>
				</header>
				<div className="project-case__evidence-grid">
					{caseStudy.evidence.map((item) => (
						<article
							className={
								item.featured ? "project-evidence project-evidence--featured" : "project-evidence"
							}
							key={item.title}
						>
							<figure>
								<Image
									alt={item.imageAlt}
									height={900}
									sizes="(max-width: 767px) 100vw, 50vw"
									src={item.image}
									width={1600}
								/>
							</figure>
							<div>
								<h4>{item.title}</h4>
								<p>{item.caption}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</section>
	);
}
