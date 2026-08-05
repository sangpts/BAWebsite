import { Download, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { site } from "src/data/site";
export function AboutConnect() {
	const links = [
		{ Icon: Mail, label: "Email Me", href: `mailto:${site.email}`, external: true },
		...(site.linkedin
			? [{ Icon: Linkedin, label: "View LinkedIn", href: site.linkedin, external: true }]
			: []),
		...(site.cvAvailable
			? [{ Icon: Download, label: "Download CV", href: site.cv, external: false }]
			: []),
	];
	return (
		<section className="about-connect">
			<article>
				<h2>About Me</h2>
				<p>
					I work between business operations and technical delivery. My approach begins with
					understanding how people, processes, and information currently work. I then help clarify
					problems, structure requirements, and contribute to solutions that are practical to
					implement and use.
				</p>
				<p>
					My experience includes enterprise systems, operational workflows, integration, reporting,
					and customer-facing solution demonstrations across different business domains.
				</p>
			</article>
			<article>
				<h2>Connect with me</h2>
				<p className="phone-line">
					<Phone size={14} /> {site.phone}
				</p>
				<div className="connect-links">
					{links.map(({ Icon, label, href, external }) => (
						<Link
							href={href}
							key={label}
							download={label === "Download CV" || undefined}
							target={external && href.startsWith("http") ? "_blank" : undefined}
							rel={external && href.startsWith("http") ? "noopener noreferrer" : undefined}
						>
							<Icon size={20} />
							<span>{label}</span>
						</Link>
					))}
				</div>
				{!site.cvAvailable && (
					<p className="availability-note">CV download will appear when the latest PDF is added.</p>
				)}
			</article>
		</section>
	);
}
