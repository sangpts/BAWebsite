"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ContactBar } from "src/components/layout/contact-bar";
import { site } from "src/data/site";
export function SiteHeader({ active }: { active: "profile" | "projects" }) {
	const [isHeaderHidden, setIsHeaderHidden] = useState(false);
	const [isScrolling, setIsScrolling] = useState(false);
	const lastScrollY = useRef(0);
	const lastTouchY = useRef(0);
	const inputDirection = useRef<"up" | "down" | null>(null);
	const inputLockUntil = useRef(0);
	const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		lastScrollY.current = window.scrollY;
		const updateHeader = () => {
			const currentScrollY = window.scrollY;
			const delta = currentScrollY - lastScrollY.current;
			const hasInputLock = performance.now() < inputLockUntil.current;

			setIsScrolling(true);
			if (currentScrollY <= 12) {
				setIsHeaderHidden(false);
			} else if (hasInputLock && inputDirection.current === "up") {
				setIsHeaderHidden(false);
			} else if (hasInputLock && inputDirection.current === "down") {
				setIsHeaderHidden(true);
			} else if (delta > 2) {
				setIsHeaderHidden(true);
			} else if (delta < -2) {
				setIsHeaderHidden(false);
			}

			lastScrollY.current = currentScrollY;
			if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
			scrollEndTimer.current = setTimeout(() => setIsScrolling(false), 360);
		};
		const handleWheelIntent = (event: WheelEvent) => {
			if (event.deltaY < -1) {
				inputDirection.current = "up";
				inputLockUntil.current = performance.now() + 320;
				setIsHeaderHidden(false);
			}
			if (event.deltaY > 1 && window.scrollY > 12) {
				inputDirection.current = "down";
				inputLockUntil.current = performance.now() + 320;
				setIsHeaderHidden(true);
			}
		};
		const handleTouchStart = (event: TouchEvent) => {
			lastTouchY.current = event.touches[0]?.clientY ?? 0;
		};
		const handleTouchMove = (event: TouchEvent) => {
			const currentTouchY = event.touches[0]?.clientY ?? lastTouchY.current;
			const touchDelta = currentTouchY - lastTouchY.current;
			if (touchDelta > 3) {
				inputDirection.current = "up";
				inputLockUntil.current = performance.now() + 320;
				setIsHeaderHidden(false);
			}
			if (touchDelta < -3 && window.scrollY > 12) {
				inputDirection.current = "down";
				inputLockUntil.current = performance.now() + 320;
				setIsHeaderHidden(true);
			}
			lastTouchY.current = currentTouchY;
		};

		window.addEventListener("scroll", updateHeader, { passive: true });
		window.addEventListener("wheel", handleWheelIntent, { passive: true });
		window.addEventListener("touchstart", handleTouchStart, { passive: true });
		window.addEventListener("touchmove", handleTouchMove, { passive: true });
		return () => {
			window.removeEventListener("scroll", updateHeader);
			window.removeEventListener("wheel", handleWheelIntent);
			window.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("touchmove", handleTouchMove);
			if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current);
		};
	}, []);

	return (
		<header
			className={`site-header${isHeaderHidden ? " is-hidden" : ""}${isScrolling ? " is-scrolling" : ""}`}
		>
				<div className="header-inner">
					<div className="brand">
						<Link className="brand-name" href="/" aria-label={`${site.name} - Home`}>
							<span className="brand-copy">
								<strong className="brand-title">{site.name}</strong>
								<small className="brand-subtitle">{site.role}</small>
							</span>
						</Link>
					</div>
					<ContactBar />
					<nav className="site-nav" aria-label="Main navigation">
						<div className="nav-pages">
							<Link
								className={`nav-link ${active === "profile" ? "active" : ""}`}
								href="/"
								aria-current={active === "profile" ? "page" : undefined}
							>
								<span>Profile</span>
							</Link>
							<Link
								className={`nav-link ${active === "projects" ? "active" : ""}`}
								href="/projects"
								aria-current={active === "projects" ? "page" : undefined}
							>
								<span>Projects</span>
							</Link>
						</div>
						{site.cvAvailable ? (
							<Link className="download header-cv" href={site.cv} download>
								<span>DOWNLOAD CV</span>
								<Download size={15} />
							</Link>
						) : (
							<span
								className="download header-cv download-disabled"
								aria-disabled="true"
								title="Add the latest CV PDF to enable this action"
							>
								<span>CV Coming Soon</span>
								<Download size={15} />
							</span>
						)}
					</nav>
				</div>
		</header>
	);
}
