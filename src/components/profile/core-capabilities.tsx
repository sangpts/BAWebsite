import {
	BrainCircuit,
	ChartNoAxesCombined,
	Code2,
	Database,
	FileText,
	Globe2,
	LayoutGrid,
	Settings,
	Wrench,
} from "lucide-react";
import Claude from "@lobehub/icons/es/Claude/components/Color";
import OpenAI from "@lobehub/icons/es/OpenAI/components/Mono";
import { aiProductivity, coreCapabilityGroups } from "src/data/cv";
import { NeuralBackground } from "./neural-background";

const aiIcons = [OpenAI, Claude, BrainCircuit, Code2, Settings, ChartNoAxesCombined] as const;
const groupIcons = [FileText, Wrench, Database, LayoutGrid, Globe2] as const;

export function CoreCapabilities() {
	return (
		<section className="core-capabilities" aria-labelledby="core-capabilities-title">
			<header className="core-capabilities__heading">
				<p className="core-capabilities__eyebrow">Capability Stack</p>
				<h2
					className="section-display-title"
					id="core-capabilities-title"
					style={{ color: "#111827", fontFamily: "var(--font-site), Arial, sans-serif" }}
				>
					Core <span style={{ color: "#111827" }}>Capabilities</span>
				</h2>
			</header>

			<article className="ai-capability">
				<NeuralBackground />
				<div className="ai-capability__emblem" aria-hidden="true">
					<span className="ai-capability__orbit" />
					<strong>AI</strong>
				</div>

			<div className="ai-capability__content">
				<p>{aiProductivity.description}</p>
					<ul className="ai-capability__tools" aria-label="AI and productivity capabilities">
						{aiProductivity.items.map((item, index) => {
							const Icon = aiIcons[index];
							return (
								<li className={index < 2 ? "ai-capability__brand-tool" : undefined} key={item}>
									<Icon aria-hidden="true" />
									<span>{item}</span>
								</li>
							);
						})}
					</ul>
				</div>
			</article>

			<div className="capability-groups">
				{coreCapabilityGroups.map((group, index) => {
					const Icon = groupIcons[index];
					return (
						<article className="capability-group" key={group.title}>
							<Icon className="capability-group__icon" aria-hidden="true" />
							<h3>{group.title}</h3>
							<ul>
								{group.items.map((item) => (
									<li key={item}>{item}</li>
								))}
							</ul>
						</article>
					);
				})}
			</div>
		</section>
	);
}
