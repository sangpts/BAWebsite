import Image from "next/image";
import { profileContent } from "src/data/profile";

export function Introduction() {
	return (
		<section className="hero hero-intro">
			<div className="hero-copy">
				<div className="hero-experience-badge">
					<span aria-hidden="true" />
					+3 years of experience as a Business Analyst
				</div>
				<div className="hero-profile">
					<figure className="hero-portrait">
						<Image
							alt="Phung Tan Sang"
							fill
							priority
							sizes="150px"
							src="/images/profile/portrait.jpg"
						/>
					</figure>
					<div aria-hidden="true" className="hero-decoration" />
				</div>
				<h1>{profileContent.hero.headline}</h1>
			</div>
		</section>
	);
}
