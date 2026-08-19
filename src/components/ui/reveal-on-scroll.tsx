"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	fullBleed?: boolean;
}

/**
 * Reveals a content block once it enters the viewport while respecting reduced-motion settings.
 */
export function RevealOnScroll({
	children,
	delay = 0,
	className = "",
	fullBleed = false,
}: RevealOnScrollProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if (!element) return;

		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			element.classList.add("is-visible");
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				element.classList.add("is-visible");
				observer.disconnect();
			},
			{ rootMargin: "0px 0px -3%", threshold: 0.04 },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, []);

	const classes = [
		"scroll-reveal",
		fullBleed ? "scroll-reveal--full-bleed" : "",
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={classes} ref={ref} style={{ transitionDelay: `${delay}ms` }}>
			{children}
		</div>
	);
}
