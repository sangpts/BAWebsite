import { useId } from "react";
import { Tag } from "src/components/ui/tag";
import { experience } from "src/data/experience";

export function ExperienceTimeline() {
	const titleId = useId();

	return (
		<section className="career-journey" aria-labelledby={titleId}>
			<header className="career-journey__heading">
				<p className="career-journey__eyebrow">Career Journey</p>
				<h2 id={titleId}>Professional Experience</h2>
			</header>

			<div className="career-timeline">
				{experience.map((item, index) => (
					<div className="experience-row" key={item.company}>
						<div className="experience-meta">
							<time>{item.period}</time>
							{index === 0 ? <span className="experience-current">Current</span> : null}
						</div>

						<details className="experience-card">
							<summary className="experience-overview">
								<div className="experience-head">
									<div>
										<h3>{item.role}</h3>
										<h4>{item.company}</h4>
									</div>
								</div>

								<p className="experience-summary">{item.summary}</p>
							</summary>

							<div className="experience-expanded">
								<ul className="experience-contributions">
									{item.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>

								<div className="tags">
									{item.tags.map((tag) => (
										<Tag key={tag}>{tag}</Tag>
									))}
								</div>
							</div>
						</details>
					</div>
				))}
			</div>
		</section>
	);
}
