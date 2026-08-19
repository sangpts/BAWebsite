import { SiteHeader } from "src/components/layout/site-header";
import { SiteSection } from "src/components/layout/site-header.type";
import { SiteIdentityBanner } from "src/components/layout/site-identity-banner";
import { CoreCapabilities } from "src/components/profile/core-capabilities";
import { DeliveryApproach } from "src/components/profile/delivery-approach";
import { DomainExperience } from "src/components/profile/domain-experience";
import { ExperienceTimeline } from "src/components/profile/experience";
import { Introduction } from "src/components/profile/introduction";
import { ProfileProjectsCta } from "src/components/profile/profile-projects-cta";
import { RevealOnScroll } from "src/components/ui/reveal-on-scroll";

/**
 * Renders the professional profile page and its transition into the project case studies.
 */
export default function ProfilePage() {
	return (
		<main className="paper">
			<SiteHeader active={SiteSection.Profile} />
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
				<RevealOnScroll className="domain-experience-shell" delay={80} fullBleed>
					<DomainExperience />
				</RevealOnScroll>
				<RevealOnScroll delay={110}>
					<CoreCapabilities />
				</RevealOnScroll>
				<RevealOnScroll delay={140}>
					<ExperienceTimeline />
				</RevealOnScroll>
				<RevealOnScroll className="profile-projects-cta-shell" delay={170} fullBleed>
					<ProfileProjectsCta />
				</RevealOnScroll>
			</div>
		</main>
	);
}
