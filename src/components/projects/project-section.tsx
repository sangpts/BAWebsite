import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { Tag } from "src/components/ui/tag";
import type { Project } from "src/types";
export function ProjectSection({ project }: { project: Project }) {
	return (
		<section id={project.id} className="project-detail">
			<div className="detail-image image-frame">
				<Image
					src={project.image}
					alt={`${project.title} project screenshot placeholder`}
					fill
					sizes="(max-width: 768px) 100vw, 35vw"
				/>
			</div>
			<div className="detail-content">
				<p className="eyebrow">{project.category}</p>
				<h2>{project.title}</h2>
				<div className="detail-columns">
					<div>
						<h3>Business Context</h3>
						<p>{project.context}</p>
						<h3>My Contribution</h3>
						<ul>
							{project.contributions.map((item) => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
					<div>
						<h3>Solution Delivered</h3>
						<p>{project.solution}</p>
						<h3>Technologies</h3>
						<div className="tags">
							{project.technologies.map((t) => (
								<Tag key={t}>{t}</Tag>
							))}
						</div>
						{project.actionUrl ? (
							<a className="text-link" href={project.actionUrl}>
								{project.actionLabel} <ExternalLink size={14} />
							</a>
						) : (
							<span className="coming-soon">Demo Coming Soon</span>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
