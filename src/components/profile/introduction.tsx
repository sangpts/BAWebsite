import { profileContent } from "src/data/profile";

export function Introduction() {
	return (
		<section className="hero hero-intro">
			<div className="hero-copy">
				<h1>{profileContent.hero.headline}</h1>
			</div>
		</section>
	);
}
