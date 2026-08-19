import type { ReactNode } from "react";

export enum SiteSection {
	Profile = "profile",
	Projects = "projects",
}

export interface SiteHeaderProps {
	active: SiteSection;
}

export interface SiteHeaderUiProps {
	brand: ReactNode;
	contact: ReactNode;
	navigation: ReactNode;
	cvAction: ReactNode;
}

export interface SiteHeaderState {
	closeMenu: () => void;
	isHeaderHidden: boolean;
	isMenuOpen: boolean;
	toggleMenu: () => void;
}
