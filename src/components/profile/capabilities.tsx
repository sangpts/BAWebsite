import { Blocks, ClipboardList, MessageCircleMore, Rocket } from "lucide-react";
import { capabilities } from "src/data/site";

const icons = [Blocks, ClipboardList, MessageCircleMore, Rocket];
export function Capabilities() {
	return (
		<section>
			<div className="section-heading">
				<h2>Core Capabilities</h2>
			</div>
			<div className="capability-grid">
				{capabilities.map((capability, i) => {
					const Icon = icons[i];
					return (
						<article className="capability" key={capability.title}>
							<div className={`capability-icon tone-${i}`}>
								<Icon size={20} />
							</div>
							<div>
								<h3>{capability.title}</h3>
								<p>{capability.description}</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}
