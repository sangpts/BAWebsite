import { ChartNoAxesCombined, Layers3, Target, Workflow } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { profileContent } from "src/data/profile";

const featureIcons = [Target, Workflow, ChartNoAxesCombined, Layers3] as const;

export function DomainExperience() {
	const content = profileContent.domainExperience;

	return (
		<section className="domain-experience">
			<header className="domain-intro">
				<p className="domain-eyebrow">{content.eyebrow}</p>
				<h2
					className="section-display-title"
					style={{ color: "#111827", fontFamily: '"Times New Roman", Times, serif' }}
				>
					{content.title} <span style={{ color: "#111827" }}>{content.titleAccent}</span>
				</h2>
			</header>

			<ul className="domain-features" aria-label="Systems focus areas">
				{content.features.map((feature, index) => {
					const Icon = featureIcons[index] ?? Target;
					return (
						<li className="domain-feature" key={feature}>
							<Icon size={21} aria-hidden="true" />
							<span>{feature}</span>
						</li>
					);
				})}
			</ul>

			<ul className="domain-grid">
				{content.items.map((domain) => (
					<li key={domain.code}>
						<article className="domain-card">
							<Link
								className="domain-card-link"
								href={domain.href}
								aria-label={`Explore ${domain.title} experience`}
							>
								<div className="domain-card-media">
									<Image
										src={domain.image}
										alt={domain.imageAlt}
										width={1456}
										height={1092}
										sizes="(max-width: 639px) calc(100vw - 32px), (max-width: 1023px) calc(50vw - 50px), 334px"
									/>
								</div>
								<div className="domain-card-body">
									<strong className="domain-card-code">{domain.code}</strong>
									<h3>{domain.title}</h3>
									<p>{domain.description}</p>
								</div>
							</Link>
						</article>
					</li>
				))}
			</ul>
		</section>
	);
}
