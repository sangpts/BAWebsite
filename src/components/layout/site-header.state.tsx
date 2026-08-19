"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { SiteHeaderState } from "./site-header.type";

const MOBILE_NAVIGATION_QUERY = "(max-width: 767px)";
const SCROLL_TOP_TOLERANCE = 12;
const SCROLL_DIRECTION_THRESHOLD = 4;

/**
 * Coordinates the sticky header visibility and the compact navigation state.
 * Header motion is disabled while the mobile menu is open so navigation remains stable.
 */
export function useSiteHeaderState(): SiteHeaderState {
	const [isHeaderHidden, setIsHeaderHidden] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const lastScrollY = useRef(0);
	const animationFrame = useRef<number | null>(null);

	const closeMenu = useCallback(() => {
		setIsMenuOpen(false);
	}, []);

	const toggleMenu = useCallback(() => {
		setIsMenuOpen((current) => !current);
	}, []);

	useEffect(() => {
		lastScrollY.current = window.scrollY;

		const updateHeaderVisibility = () => {
			animationFrame.current = null;
			const currentScrollY = window.scrollY;
			const delta = currentScrollY - lastScrollY.current;

			if (isMenuOpen || currentScrollY <= SCROLL_TOP_TOLERANCE) {
				setIsHeaderHidden(false);
			} else if (delta > SCROLL_DIRECTION_THRESHOLD) {
				setIsHeaderHidden(true);
			} else if (delta < -SCROLL_DIRECTION_THRESHOLD) {
				setIsHeaderHidden(false);
			}

			lastScrollY.current = currentScrollY;
		};

		const handleScroll = () => {
			if (animationFrame.current !== null) return;
			animationFrame.current = window.requestAnimationFrame(updateHeaderVisibility);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (animationFrame.current !== null) {
				window.cancelAnimationFrame(animationFrame.current);
			}
		};
	}, [isMenuOpen]);

	useEffect(() => {
		const mediaQuery = window.matchMedia(MOBILE_NAVIGATION_QUERY);

		const handleViewportChange = (event: MediaQueryListEvent) => {
			if (!event.matches) closeMenu();
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") closeMenu();
		};

		mediaQuery.addEventListener("change", handleViewportChange);
		window.addEventListener("keydown", handleEscape);
		return () => {
			mediaQuery.removeEventListener("change", handleViewportChange);
			window.removeEventListener("keydown", handleEscape);
		};
	}, [closeMenu]);

	useEffect(() => {
		document.body.classList.toggle("is-navigation-locked", isMenuOpen);
		return () => document.body.classList.remove("is-navigation-locked");
	}, [isMenuOpen]);

	return {
		closeMenu,
		isHeaderHidden,
		isMenuOpen,
		toggleMenu,
	};
}
