import { Download, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { site } from "src/data/site";

export function AboutConnect() {
	const links: Array<{ Icon: typeof Mail; label: string; href: string }> = [
		{ Icon: Mail, label: "Email Me", href: site.email },
		...(site.linkedin ? [{ Icon: Linkedin, label: "View LinkedIn", href: site.linkedin }] : []),
		{ Icon: Download, label: "Download CV", href: site.cv },
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
				<div className="connect-links">
					{links.map(({ Icon, label, href }) => (
						<Link href={href} key={label} download={label === "Download CV" || undefined}>
							<Icon size={20} />
							<span>{label}</span>
						</Link>
					))}
				</div>
			</article>
		</section>
	);
}
