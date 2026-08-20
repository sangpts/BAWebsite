"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	fullBleed?: boolean;
}

/**
 * Reveals a content block when it enters the viewport and exposes it immediately
 * when observation is unavailable.
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

		const reveal = () => element.classList.add("is-visible");
		if (
			window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
			!("IntersectionObserver" in window)
		) {
			reveal();
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				reveal();
				observer.disconnect();
			},
			{ rootMargin: "0px 0px -5%", threshold: 0.055 },
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
	const style = { "--reveal-delay": `${delay}ms`, transitionDelay: `${delay}ms` } as CSSProperties;

	return (
		<div className={classes} ref={ref} style={style}>
			{children}
		</div>
	);
}
