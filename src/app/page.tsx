import { SiteHeader } from "src/components/layout/site-header";
import { SiteIdentityBanner } from "src/components/layout/site-identity-banner";
import { CoreCapabilities } from "src/components/profile/core-capabilities";
import { DeliveryApproach } from "src/components/profile/delivery-approach";
import { DomainExperience } from "src/components/profile/domain-experience";
import { ExperienceTimeline } from "src/components/profile/experience";
import { Introduction } from "src/components/profile/introduction";
import { ProfileProjectsCta } from "src/components/profile/profile-projects-cta";
import { RevealOnScroll } from "src/components/ui/reveal-on-scroll";
export default function ProfilePage() {
	return (
		<main className="paper">
			<SiteHeader active="profile" />
			<div className="page-content profile-content">
				<div className="profile-lead-grid">
					<RevealOnScroll>
						<Introduction />
					</RevealOnScroll>
					<RevealOnScroll delay={40}>
						<DeliveryApproach />
					</RevealOnScroll>
				</div>
				<SiteIdentityBanner />
				<RevealOnScroll delay={80} className="domain-experience-shell" fullBleed>
					<DomainExperience />
				</RevealOnScroll>
				<RevealOnScroll delay={110}>
					<CoreCapabilities />
				</RevealOnScroll>
				<RevealOnScroll delay={140}>
					<ExperienceTimeline />
				</RevealOnScroll>
				<RevealOnScroll delay={170} className="profile-projects-cta-shell" fullBleed>
					<ProfileProjectsCta />
				</RevealOnScroll>
			</div>
		</main>
	);
}
