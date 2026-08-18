import { Bot, ChartNoAxesCombined, Warehouse } from "lucide-react";
import Link from "next/link";
import { profileContent } from "src/data/profile";

const domainIcons = [ChartNoAxesCombined, Bot, Warehouse] as const;

export function DomainExperience() {
	const content = profileContent.domainExperience;

	return (
		<section className="domain-experience">
			<div className="domain-showcase">
				<header className="domain-intro">
					<p className="domain-eyebrow">{content.eyebrow}</p>
					<h2 className="section-display-title">
						{content.title} <span>{content.titleAccent}</span>
					</h2>
					<span className="domain-intro-divider" aria-hidden="true" />
					<p className="domain-summary">{content.intro}</p>
				</header>

				<ul className="domain-grid">
					{content.items.map((domain, index) => {
						const Icon = domainIcons[index] ?? ChartNoAxesCombined;
						return (
							<li key={domain.code}>
								<article className="domain-card">
									<Link
										className="domain-card-link"
										href={domain.href}
										aria-label={`Explore ${domain.title} experience`}
									>
										<div className="domain-card-icon" aria-hidden="true">
											<Icon />
										</div>
										<span className="domain-card-arrow" aria-hidden="true" />
										<div className="domain-card-body">
											<strong className="domain-card-code">{domain.code}</strong>
											<h3>{domain.title}</h3>
										</div>
									</Link>
								</article>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
}
