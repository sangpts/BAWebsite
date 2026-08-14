import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
	href,
	children,
	secondary = false,
	download = false,
	disabled = false,
}: {
	href: string;
	children: ReactNode;
	secondary?: boolean;
	download?: boolean;
	disabled?: boolean;
}) {
	const className = `button ${secondary ? "button-secondary" : ""} ${disabled ? "button-disabled" : ""}`;
	if (disabled)
		return (
			<span className={className} aria-disabled="true" title="This file is not available yet">
				{children}
			</span>
		);
	return (
		<Link href={href} download={download || undefined} className={className}>
			{children}
			{!download && <span aria-hidden>→</span>}
		</Link>
	);
}
