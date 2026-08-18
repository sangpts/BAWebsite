import { ArrowRight } from "lucide-react";
import Image from "next/image";
import type { Project } from "src/types";

type EditorialProject = {
	perspective: string;
	title: string;
	tags: string[];
	metrics: { value: string; label: string }[];
	mediaCaption: string;
	reverse: boolean;
	evidence?: string[];
};

const editorialProjects: Record<string, EditorialProject> = {
	"enterprise-system": {
		perspective: "Inside the Business",
		title: "Cross-Functional Project & Operations Management System",
		tags: [
			"Project Control",
			"Procurement",
			"Warehouse",
			"Production",
			"Construction",
			"Accounting",
		],
		metrics: [
			{ value: "6", label: "Business functions" },
			{ value: "BRD / FRS", label: "Delivery artifacts" },
			{ value: "UAT", label: "Deployment readiness" },
		],
		mediaCaption: "Connected operations across six business functions",
		reverse: false,
	},
	"corporate-website": {
		perspective: "Outside the Business",
		title: "Corporate Website Strategy & Experience Redesign",
		tags: [
			"Information Architecture",
			"Content Strategy",
			"UX Review",
			"Customer Journey",
			"Responsive Validation",
		],
		metrics: [
			{ value: "B2B", label: "Journey design" },
			{ value: "IA", label: "Content architecture" },
			{ value: "Responsive", label: "Digital delivery" },
		],
		mediaCaption: "A clearer digital path from discovery to engagement",
		reverse: true,
		evidence: ["Sitemap", "Customer Journey", "Before / After"],
	},
};

export function ProjectSection({ project, index }: { project: Project; index: number }) {
	const config = editorialProjects[project.id];
	if (!config) return null;

	const number = String(index + 1).padStart(2, "0");
	const mediaVariant = project.id === "enterprise-system" ? "system" : "website";

	return (
		<section
			id={project.id}
			className={`work-project${config.reverse ? " work-project--reverse" : ""}`}
			aria-labelledby={`${project.id}-title`}
		>
			<header className="work-project__header">
				<span className="work-project__marker" aria-hidden="true">
					{number}
				</span>
				<span>Case study</span>
			</header>

			<div className="work-project__row">
				<div className="work-project__copy">
					<p className="work-project__perspective">{config.perspective}</p>
					<h2 id={`${project.id}-title`}>{config.title}</h2>
					<p className="work-project__summary">{project.description}</p>

					<div className="work-project__tags">
						{config.tags.map((tag) => (
							<span key={tag}>{tag}</span>
						))}
					</div>

					<div className="work-project__metrics">
						{config.metrics.map((metric) => (
							<div key={metric.label}>
								<strong>{metric.value}</strong>
								<span>{metric.label}</span>
							</div>
						))}
					</div>

					<details className="work-project__details">
						<summary>
							<span>Explore case study</span>
							<ArrowRight aria-hidden="true" size={18} strokeWidth={1.7} />
						</summary>
						<div className="work-project__details-grid">
							<div>
								<h3>Business Context</h3>
								<p>{project.context}</p>
								<h3>Problem</h3>
								<p>{project.problem}</p>
							</div>
							<div>
								<h3>My Contribution</h3>
								<ul>
									{project.contributions.map((item) => (
										<li key={item}>{item}</li>
									))}
								</ul>
								<h3>Solution Delivered</h3>
								<p>{project.solution}</p>
							</div>
						</div>
					</details>
				</div>

				<figure className={`work-project__media work-project__media--${mediaVariant}`}>
					<div className="work-project__devices" aria-hidden="true">
						<div className="work-project__laptop">
							<div className="work-project__screen">
								<Image
									src={project.image}
									alt=""
									width={800}
									height={430}
									sizes="(max-width: 900px) 92vw, 52vw"
								/>
							</div>
							<span className="work-project__laptop-base" />
						</div>
						{mediaVariant === "website" && (
							<div className="work-project__phone">
								<Image src={project.image} alt="" width={800} height={430} sizes="130px" />
							</div>
						)}
					</div>
					<figcaption>{config.mediaCaption}</figcaption>
				</figure>
			</div>

			{config.evidence && (
				<div className="work-project__evidence">
					{config.evidence.map((item, evidenceIndex) => (
						<article key={item}>
							<h3>{item}</h3>
							<div
								className={`work-project__evidence-visual work-project__evidence-visual--${evidenceIndex + 1}`}
								aria-hidden="true"
							>
								<span />
								<span />
								<span />
								<span />
							</div>
						</article>
					))}
				</div>
			)}
		</section>
	);
}
