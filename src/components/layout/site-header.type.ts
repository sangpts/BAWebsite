import type { KeyboardEventHandler, ReactNode, RefObject } from "react";

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
	cvAction: ReactNode;
	navigation: ReactNode;
}

export interface SiteHeaderState {
	closeMenu: () => void;
	drawerRef: RefObject<HTMLDivElement | null>;
	handleDrawerKeyDown: KeyboardEventHandler<HTMLDivElement>;
	isHeaderHidden: boolean;
	isMenuOpen: boolean;
	isMobileViewport: boolean;
	isReady: boolean;
	toggleButtonRef: RefObject<HTMLButtonElement | null>;
	toggleMenu: () => void;
}
