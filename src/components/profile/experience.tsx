import { Tag } from "src/components/ui/tag";
import { experience } from "src/data/experience";
export function ExperienceTimeline() {
	return (
		<section>
			<div className="section-heading">
				<h2>Professional Experience</h2>
			</div>
			<div className="timeline">
				{experience.map((item) => (
					<article key={item.company}>
						<div className="period">{item.period}</div>
						<div className="role">
							<h3>{item.company}</h3>
							<h4>{item.role}</h4>
							<p>{item.summary}</p>
						</div>
						<div className="tags">
							{item.tags.map((t) => (
								<Tag key={t}>{t}</Tag>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
