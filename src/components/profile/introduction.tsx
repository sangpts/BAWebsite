import { FileText, PenLine, Rocket, Search, UserRound } from "lucide-react";
import { ButtonLink } from "src/components/ui/button-link";
import { site } from "src/data/site";

const steps = [
	[UserRound, "Understand", "Understand business context, users, and current processes."],
	[Search, "Analyze", "Identify problems, requirements, constraints, and conflicting inputs."],
	[
		PenLine,
		"Design",
		"Define workflows, business rules, data needs, and practical system solutions.",
	],
	[Rocket, "Deliver", "Validate, demonstrate, implement, and support operational adoption."],
] as const;
export function Introduction() {
	return (
		<section className="hero">
			<div className="hero-copy">
				<p className="eyebrow">Business Analysis · Systems · Digital Solutions</p>
				<h1>Turning complex business needs into practical digital solutions.</h1>
				<p>
					I analyze business processes, clarify requirements, and work with business and technical
					teams to deliver systems that can be implemented and used in practice.
				</p>
				<div className="actions">
					<ButtonLink href="/projects">View Projects</ButtonLink>
					<ButtonLink href={site.cv} secondary download disabled={!site.cvAvailable}>
						<FileText size={16} /> {site.cvAvailable ? "Download CV" : "CV Coming Soon"}
					</ButtonLink>
				</div>
			</div>
			<div className="process-card">
				{steps.map(([Icon, title, text], i) => (
					<div className="process-step" key={title}>
						<div className={`step-icon tone-${i}`}>
							<Icon size={23} />
						</div>
						<div>
							<h3>{title}</h3>
							<p>{text}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
