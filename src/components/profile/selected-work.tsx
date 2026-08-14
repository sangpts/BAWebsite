import Image from "next/image";
import Link from "next/link";
import { Tag } from "src/components/ui/tag";
import { projects } from "src/data/projects";

const previewTags = [
	["Business Analysis", "Customer Journey", "Content Structure"],
	["Process Analysis", "Requirement Design", "Implementation"],
];
export function SelectedWork() {
	return (
		<section>
			<div className="section-heading">
				<h2>Selected Work</h2>
				<Link href="/projects">View all projects →</Link>
			</div>
			<div className="project-grid">
				{projects.map((project, index) => (
					<article className="project-card" key={project.id}>
						<div className="image-frame">
							<Image
								src={project.image}
								alt={`${project.title} screenshot placeholder`}
								fill
								sizes="(max-width: 768px) 100vw, 25vw"
							/>
						</div>
						<div className="project-card-copy">
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<div className="tags">
								{previewTags[index].map((tag) => (
									<Tag key={tag}>{tag}</Tag>
								))}
							</div>
							<Link className="text-link" href={`/projects#${project.id}`}>
								Explore Project <span>→</span>
							</Link>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
