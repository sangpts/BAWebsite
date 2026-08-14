import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Tag } from "src/components/ui/tag";
import type { Project } from "src/types";
export function ProjectSection({ project }: { project: Project }) {
	const number = project.id === "corporate-website" ? "01" : "02";
	return (
		<section id={project.id} className="project-detail">
			<div className="detail-content">
				<div className="project-title-row">
					<span className="project-number">{number}</span>
					<div>
						<h2>{project.title}</h2>
						<p className="eyebrow">{project.category}</p>
					</div>
				</div>
				<p className="project-summary">{project.description}</p>
				<div className="detail-columns">
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
				<div className="project-meta">
					<div className="tags">
						{project.technologies.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
					{project.actionUrl ? (
						<a
							className="text-link"
							href={project.actionUrl}
							target="_blank"
							rel="noopener noreferrer"
						>
							{project.actionLabel} <ExternalLink size={14} />
						</a>
					) : (
						<span className="coming-soon">{project.comingSoonLabel}</span>
					)}
				</div>
			</div>
			<div className="project-evidence">
				<div className="detail-image image-frame">
					<Image
						src={project.image}
						alt={`Neutral placeholder for ${project.title} screenshots`}
						fill
						sizes="(max-width: 900px) 100vw, 48vw"
					/>
				</div>
				<div className="evidence-grid">
					{project.evidence.slice(0, 3).map((item) => (
						<div className="evidence-tile" key={item}>
							{item}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
