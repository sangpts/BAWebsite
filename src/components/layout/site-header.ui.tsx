"use client";

import type { MouseEvent } from "react";
import { useSiteHeaderState } from "./site-header.state";
import type { SiteHeaderUiProps } from "./site-header.type";

const MOBILE_PANEL_ID = "site-header-navigation";

/**
 * Renders the interactive shell for the sticky desktop header and mobile navigation panel.
 */
export function SiteHeaderUi({
	brand,
	contact,
	navigation,
	cvAction,
}: SiteHeaderUiProps) {
	const { closeMenu, isHeaderHidden, isMenuOpen, toggleMenu } = useSiteHeaderState();
	/** Closes the compact menu after a navigation or contact link is selected. */
	const handlePanelClick = (event: MouseEvent<HTMLDivElement>) => {
		const target = event.target;
		if (target instanceof Element && target.closest("a")) closeMenu();
	};

	const className = [
		"site-header",
		isHeaderHidden ? "is-hidden" : "",
		isMenuOpen ? "is-menu-open" : "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<header className={className}>
			<div className="header-inner">
				<div className="header-brand">{brand}</div>

				<button
					aria-controls={MOBILE_PANEL_ID}
					aria-expanded={isMenuOpen}
					aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
					className="header-menu-toggle"
					onClick={toggleMenu}
					type="button"
				>
					<span className="header-menu-toggle__lines" aria-hidden="true" />
				</button>

				<div className="header-panel" id={MOBILE_PANEL_ID} onClick={handlePanelClick}>
					<div className="header-panel__inner">
						<div className="header-navigation">{navigation}</div>
						<div className="header-contact">{contact}</div>
						<div className="header-cv-slot">{cvAction}</div>
					</div>
				</div>
			</div>
		</header>
	);
}
