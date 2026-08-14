import { profileContent } from "src/data/profile";

export function Introduction() {
	return (
		<section className="hero hero-intro">
			<div className="hero-copy">
				<p className="eyebrow">Digital Consultant | Systems Development</p>
				<h1>{profileContent.hero.headline}</h1>
				<p>{profileContent.hero.body}</p>
			</div>
		</section>
	);
}
