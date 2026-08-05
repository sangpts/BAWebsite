import { FileText, PenLine, Rocket, Search, UserRound } from "lucide-react";
import { ButtonLink } from "src/components/ui/button-link";

const steps = [
	[UserRound, "Understand", "Business context, users, and current process"],
	[Search, "Analyze", "Problems, requirements, and constraints"],
	[PenLine, "Design", "Workflow, business rules, and system solution"],
	[Rocket, "Deliver", "Validation, implementation, and adoption"],
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
					<ButtonLink href="/documents/phung-tan-sang-cv.pdf" secondary download>
						<FileText size={16} /> Download CV
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
