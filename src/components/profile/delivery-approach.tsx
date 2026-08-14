import { Blocks, ClipboardList, Handshake, SquareCheckBig, UsersRound } from "lucide-react";
import { profileContent } from "src/data/profile";

const stageIcons = [Handshake, ClipboardList, Blocks, SquareCheckBig];

export function DeliveryApproach() {
	return (
		<section className="delivery-approach">
			<header className="delivery-heading">
				<p className="eyebrow">Solution Delivery Framework</p>
			</header>

			<div className="delivery-framework">
				<div className="delivery-connectors" aria-hidden="true">
					<span className="delivery-connector delivery-connector--left-top" />
					<span className="delivery-connector delivery-connector--left-bottom" />
					<span className="delivery-connector delivery-connector--right-top" />
					<span className="delivery-connector delivery-connector--right-bottom" />
					<span className="delivery-node delivery-node--left-top" />
					<span className="delivery-node delivery-node--left-bottom" />
					<span className="delivery-node delivery-node--right-top" />
					<span className="delivery-node delivery-node--right-bottom" />
				</div>

				<div className="delivery-core">
					<div className="delivery-core__inner">
						<UsersRound size={42} strokeWidth={1.65} aria-hidden="true" />
						<strong>Business Value Delivery</strong>
					</div>
				</div>

				{profileContent.deliveryApproach.map((stage, index) => {
					const StageIcon = stageIcons[index];
					const side = index < 2 ? "left" : "right";
					return (
						<article
							className={`delivery-stage delivery-stage--${side} delivery-stage--${index + 1}`}
							key={stage.title}
						>
							<div className="delivery-stage__copy">
								<span className="delivery-number">{String(index + 1).padStart(2, "0")}</span>
								<h3>{stage.title}</h3>
								<span className="delivery-phase">{stage.phaseLabel}</span>
							</div>
							<div className="delivery-icon" aria-hidden="true">
								<StageIcon size={30} strokeWidth={1.65} />
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}
