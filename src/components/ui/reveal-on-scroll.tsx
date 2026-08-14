"use client";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
export function RevealOnScroll({
	children,
	delay = 0,
	className = "",
	fullBleed = false,
}: {
	children: ReactNode;
	delay?: number;
	className?: string;
	fullBleed?: boolean;
}) {
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
				if (entry.isIntersecting) {
					element.classList.add("is-visible");
					observer.disconnect();
				}
			},
			{ threshold: 0.12, rootMargin: "0px 0px -6%" },
		);
		observer.observe(element);
		return () => observer.disconnect();
	}, []);
	return (
		<div
			ref={ref}
			className={`scroll-reveal${className ? ` ${className}` : ""}`}
			style={{
				transitionDelay: `${delay}ms`,
				...(fullBleed
					? {
							width: "calc(100% + (var(--profile-page-gutter) * 2))",
							marginInline: "calc(var(--profile-page-gutter) * -1)",
						}
					: {}),
			}}
		>
			{children}
		</div>
	);
}
