import Image from "next/image";
import { profileContent } from "src/data/profile";

export function Introduction() {
	return (
		<section className="hero hero-intro">
			<div className="hero-copy">
				<figure className="hero-portrait">
					<Image
						alt="Phung Tan Sang"
						fill
						priority
						sizes="(min-width: 1100px) 140px, 44vw"
						src="/images/profile/portrait.jpg"
					/>
				</figure>
				<h1>{profileContent.hero.headline}</h1>
			</div>
		</section>
	);
}
