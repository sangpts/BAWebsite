import { SiteFooter } from "src/components/layout/site-footer";
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
				<RevealOnScroll delay={50}>
					<DomainExperience />
				</RevealOnScroll>
				<RevealOnScroll delay={60}>
					<CoreCapabilities />
				</RevealOnScroll>
				<RevealOnScroll delay={60}>
					<ExperienceTimeline />
				</RevealOnScroll>
				<RevealOnScroll delay={60} className="profile-projects-cta-shell" fullBleed>
					<ProfileProjectsCta />
				</RevealOnScroll>
			</div>
			<SiteFooter />
		</main>
	);
}
