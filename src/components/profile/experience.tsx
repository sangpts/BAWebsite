import { Tag } from "src/components/ui/tag";
import { experience } from "src/data/experience";

export function ExperienceTimeline() {
	return (
		<section className="career-journey" aria-labelledby="career-journey-title">
			<header className="career-journey__heading">
				<p className="career-journey__eyebrow">Career Journey</p>
				<h2 id="career-journey-title">Professional Experience</h2>
				<p>
					A timeline of roles and projects where I&apos;ve applied business analysis, system
					thinking, and technology to deliver measurable impact.
				</p>
			</header>

			<div className="career-timeline">
				{experience.map((item, index) => (
					<article className="experience-card" key={item.company}>
						<span className="career-timeline__node" aria-hidden="true" />
      <div className="experience-head">
       <div>
        <h3>{item.role}</h3>
        <h4>{item.company}</h4>
       </div>
							<div className="experience-period">
								{index === 0 ? <span className="experience-current">Current</span> : null}
								<time>{item.period}</time>
							</div>
						</div>

						<h5>Key Contributions</h5>
						<ul className="experience-contributions">
							{item.highlights.slice(0, 3).map((highlight) => (
									<li key={highlight}>{highlight}</li>
							))}
						</ul>

						<div className="tags">
							{item.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
