"use client";

import { useEffect, useId, useRef, useState } from "react";
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

						<ExperienceCard item={item} />
					</div>
				))}
			</div>
		</section>
	);
}

function ExperienceCard({ item }: { item: (typeof experience)[number] }) {
	const [isOpen, setIsOpen] = useState(false);
	const [contentHeight, setContentHeight] = useState(0);
	const contentId = useId();
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const content = contentRef.current;
		if (!content) return;

		const updateHeight = () => {
			setContentHeight(isOpen ? content.scrollHeight : 0);
		};

		updateHeight();
		if (!isOpen) return;

		const resizeObserver = new ResizeObserver(updateHeight);
		resizeObserver.observe(content);
		return () => resizeObserver.disconnect();
	}, [isOpen]);

	return (
		<div className={`experience-card${isOpen ? " is-open" : ""}`}>
			<button
				aria-controls={contentId}
				aria-expanded={isOpen}
				className="experience-overview"
				onClick={() => setIsOpen((current) => !current)}
				type="button"
			>
				<div className="experience-head">
					<div>
						<h3>{item.role}</h3>
						<h4>{item.company}</h4>
					</div>
				</div>

				<p className="experience-summary">{item.summary}</p>
			</button>

			<div
				aria-hidden={!isOpen}
				className="experience-expanded"
				id={contentId}
				style={{ height: `${contentHeight}px` }}
			>
				<div className="experience-expanded__inner" ref={contentRef}>
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
			</div>
		</div>
	);
}
