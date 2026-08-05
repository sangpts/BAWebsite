import { SiteFooter } from "src/components/layout/site-footer";
import { SiteHeader } from "src/components/layout/site-header";
import { AboutConnect } from "src/components/profile/about-connect";
import { Capabilities } from "src/components/profile/capabilities";
import { ExperienceTimeline } from "src/components/profile/experience";
import { Introduction } from "src/components/profile/introduction";
import { SelectedWork } from "src/components/profile/selected-work";
export default function ProfilePage() {
	return (
		<main className="paper">
			<SiteHeader active="profile" />
			<div className="page-content">
				<Introduction />
				<SelectedWork />
				<Capabilities />
				<ExperienceTimeline />
				<AboutConnect />
			</div>
			<SiteFooter />
		</main>
	);
}
