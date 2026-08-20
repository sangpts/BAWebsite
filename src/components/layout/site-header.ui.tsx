"use client";

import type { MouseEvent } from "react";
import { X } from "lucide-react";
import { useSiteHeaderState } from "./site-header.state";
import type { SiteHeaderUiProps } from "./site-header.type";

const MOBILE_DRAWER_ID = "site-mobile-navigation";

/**
 * Renders the sticky desktop header, animated desktop rail, and right-side mobile drawer.
 */
export function SiteHeaderUi({ brand, contact, navigation, cvAction }: SiteHeaderUiProps) {
	const {
		closeMenu,
		drawerRef,
		handleDrawerKeyDown,
		isHeaderHidden,
		isMenuOpen,
		isMobileViewport,
		isReady,
		toggleButtonRef,
		toggleMenu,
	} = useSiteHeaderState();

	/** Closes the drawer after a navigation, contact, or CV link is selected. */
	const handleDrawerClick = (event: MouseEvent<HTMLDivElement>) => {
		const target = event.target;
		if (target instanceof Element && target.closest("a")) closeMenu();
	};

	const headerClassName = [
		"site-header",
		isReady ? "is-ready" : "",
		isHeaderHidden ? "is-hidden" : "",
		isMenuOpen ? "is-menu-open" : "",
	]
		.filter(Boolean)
		.join(" ");

	return (
		<>
			<header className={headerClassName}>
				<div className="header-inner">
					<div className="header-brand">{brand}</div>

					<div className="header-desktop-panel">
						<div className="header-contact">{contact}</div>
						<div className="header-navigation">{navigation}</div>
						<div className="header-cv-slot">{cvAction}</div>
					</div>

					<button
						aria-controls={MOBILE_DRAWER_ID}
						aria-expanded={isMenuOpen}
						aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
						className="header-menu-toggle"
						onClick={toggleMenu}
						ref={toggleButtonRef}
						type="button"
					>
						<span aria-hidden="true" className="header-menu-toggle__lines" />
					</button>
				</div>
			</header>

			<button
				aria-hidden="true"
				className={`mobile-drawer-backdrop${isMenuOpen ? " is-open" : ""}`}
				onClick={closeMenu}
				tabIndex={-1}
				type="button"
			/>

			<aside
				aria-hidden={isMobileViewport ? !isMenuOpen : undefined}
				aria-label="Mobile navigation"
				aria-modal={isMobileViewport ? "true" : undefined}
				className={`mobile-drawer${isMenuOpen ? " is-open" : ""}`}
				id={MOBILE_DRAWER_ID}
				inert={isMobileViewport && !isMenuOpen}
				onKeyDown={handleDrawerKeyDown}
				ref={drawerRef}
				role="dialog"
			>
				<div className="mobile-drawer__header">
					<div>
						<span>Portfolio</span>
						<strong>Navigation</strong>
					</div>
					<button
						aria-label="Close navigation"
						className="mobile-drawer__close"
						onClick={closeMenu}
						type="button"
					>
						<X aria-hidden="true" size={21} strokeWidth={1.7} />
					</button>
				</div>

				<div className="mobile-drawer__body" onClick={handleDrawerClick}>
					<div className="mobile-drawer__navigation">{navigation}</div>
					<div className="mobile-drawer__contact">{contact}</div>
					<div className="mobile-drawer__cv">{cvAction}</div>
				</div>
			</aside>
		</>
	);
}
