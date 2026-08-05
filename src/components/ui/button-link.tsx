import Link from "next/link";
import type { ReactNode } from "react";
export function ButtonLink({
	href,
	children,
	secondary = false,
	download = false,
}: {
	href: string;
	children: ReactNode;
	secondary?: boolean;
	download?: boolean;
}) {
	return (
		<Link
			href={href}
			download={download || undefined}
			className={`button ${secondary ? "button-secondary" : ""}`}
		>
			{children}
			<span aria-hidden>→</span>
		</Link>
	);
}
