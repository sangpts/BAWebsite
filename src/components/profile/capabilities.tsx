import { Blocks, ClipboardList, MessageCircleMore, Rocket } from "lucide-react";

const capabilities = [
	[
		Blocks,
		"Business Process Analysis",
		"Understand current operations, identify gaps, and define clear As-Is and To-Be workflows.",
	],
	[
		ClipboardList,
		"Requirement & Solution Design",
		"Translate business needs into workflows, business rules, data structures, functional requirements, and usable system experiences.",
	],
	[
		MessageCircleMore,
		"Stakeholder Communication",
		"Clarify needs, align different perspectives, present solutions, and move discussions toward practical decisions.",
	],
	[
		Rocket,
		"Implementation & Delivery",
		"Contribute through validation, issue resolution, deployment, user adoption, and continuous improvement.",
	],
] as const;
export function Capabilities() {
	return (
		<section>
			<div className="section-heading">
				<h2>Core Capabilities</h2>
			</div>
			<div className="capability-grid">
				{capabilities.map(([Icon, title, text], i) => (
					<article className="capability" key={title}>
						<div className={`capability-icon tone-${i}`}>
							<Icon size={20} />
						</div>
						<div>
							<h3>{title}</h3>
							<p>{text}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
