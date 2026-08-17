import { ArrowRight, Mail } from "lucide-react";
import { site } from "src/data/site";

export function ProjectsCta() {
	return (
		<section className="work-closing">
			<div className="work-closing__visual" aria-hidden="true">
				<span className="work-closing__line work-closing__line--one" />
				<span className="work-closing__line work-closing__line--two" />
				<span className="work-closing__node work-closing__node--one">01</span>
				<span className="work-closing__node work-closing__node--two">02</span>
			</div>
			<div className="work-closing__copy">
				<p>One connected approach</p>
				<h2>Two contexts. One mindset.</h2>
				<span>
					Understanding people, processes, and systems to create solutions that work in the real
					world.
				</span>
				<a href={`mailto:${site.email}`}>
					<Mail aria-hidden="true" size={17} strokeWidth={1.7} />
					Let&apos;s connect
					<ArrowRight aria-hidden="true" size={18} strokeWidth={1.7} />
				</a>
			</div>
		</section>
	);
}
