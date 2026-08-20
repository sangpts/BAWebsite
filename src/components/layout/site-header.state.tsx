"use client";

import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SiteHeaderState } from "./site-header.type";

const MOBILE_NAVIGATION_QUERY = "(max-width: 767px)";
const SCROLL_TOP_TOLERANCE = 12;
const SCROLL_DIRECTION_THRESHOLD = 4;
const FOCUSABLE_SELECTOR = [
	"a[href]",
	"button:not([disabled])",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"[tabindex]:not([tabindex='-1'])",
].join(",");

/**
 * Coordinates sticky-header motion, the desktop rail reveal, and the off-canvas mobile drawer.
 */
export function useSiteHeaderState(): SiteHeaderState {
	const [isHeaderHidden, setIsHeaderHidden] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isMobileViewport, setIsMobileViewport] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const animationFrame = useRef<number | null>(null);
	const drawerRef = useRef<HTMLDivElement>(null);
	const lastFocusedElement = useRef<HTMLElement | null>(null);
	const lastScrollY = useRef(0);
	const toggleButtonRef = useRef<HTMLButtonElement>(null);

	const closeMenu = useCallback(() => {
		setIsMenuOpen(false);
	}, []);

	const toggleMenu = useCallback(() => {
		setIsMenuOpen((current) => !current);
	}, []);

	useEffect(() => {
		let secondFrame = 0;
		const firstFrame = window.requestAnimationFrame(() => {
			secondFrame = window.requestAnimationFrame(() => setIsReady(true));
		});
		return () => {
			window.cancelAnimationFrame(firstFrame);
			if (secondFrame) window.cancelAnimationFrame(secondFrame);
		};
	}, []);

	useEffect(() => {
		const mediaQuery = window.matchMedia(MOBILE_NAVIGATION_QUERY);
		const updateViewport = (matches: boolean) => {
			setIsMobileViewport(matches);
			if (!matches) setIsMenuOpen(false);
		};
		const handleViewportChange = (event: MediaQueryListEvent) => updateViewport(event.matches);

		updateViewport(mediaQuery.matches);
		mediaQuery.addEventListener("change", handleViewportChange);
		return () => mediaQuery.removeEventListener("change", handleViewportChange);
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
			if (animationFrame.current !== null) window.cancelAnimationFrame(animationFrame.current);
		};
	}, [isMenuOpen]);

	useEffect(() => {
		if (!isMobileViewport || !isMenuOpen) return;

		lastFocusedElement.current = document.activeElement as HTMLElement | null;
		const scrollbarWidth = Math.max(0, window.innerWidth - document.documentElement.clientWidth);
		document.documentElement.style.setProperty(
			"--navigation-scrollbar-compensation",
			`${scrollbarWidth}px`,
		);
		document.body.classList.add("is-navigation-locked");

		const focusFrame = window.requestAnimationFrame(() => {
			const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
			firstFocusable?.focus();
		});

		return () => {
			window.cancelAnimationFrame(focusFrame);
			document.body.classList.remove("is-navigation-locked");
			document.documentElement.style.removeProperty("--navigation-scrollbar-compensation");
			lastFocusedElement.current?.focus();
		};
	}, [isMenuOpen, isMobileViewport]);

	const handleDrawerKeyDown = useCallback(
		(event: ReactKeyboardEvent<HTMLDivElement>) => {
			if (event.key === "Escape") {
				event.preventDefault();
				closeMenu();
				return;
			}

			if (event.key !== "Tab") return;
			const focusableElements = Array.from(
				drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR) ?? [],
			).filter((element) => !element.hasAttribute("disabled") && element.tabIndex !== -1);
			if (focusableElements.length === 0) return;

			const firstElement = focusableElements[0];
			const lastElement = focusableElements.at(-1);
			if (event.shiftKey && document.activeElement === firstElement) {
				event.preventDefault();
				lastElement?.focus();
			} else if (!event.shiftKey && document.activeElement === lastElement) {
				event.preventDefault();
				firstElement.focus();
			}
		},
		[closeMenu],
	);

	return {
		closeMenu,
		drawerRef,
		handleDrawerKeyDown,
		isHeaderHidden,
		isMenuOpen,
		isMobileViewport,
		isReady,
		toggleButtonRef,
		toggleMenu,
	};
}
