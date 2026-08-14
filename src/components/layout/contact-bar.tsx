import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "src/data/site";

export function ContactBar() {
	return (
		<aside className="contact-bar" aria-label="Contact information">
			<a href={`mailto:${site.email}`}>
				<Mail size={13} />
				<span>{site.email}</span>
			</a>
			<a href={`tel:${site.phone.replace(/\s/g, "")}`}>
				<Phone size={13} />
				<span>{site.phone}</span>
			</a>
			<a href={site.linkedin} target="_blank" rel="noopener noreferrer">
				<Linkedin size={13} />
				<span>LinkedIn</span>
			</a>
			<span className="contact-location">
				<MapPin size={13} />
				<span>{site.location}</span>
			</span>
		</aside>
	);
}
