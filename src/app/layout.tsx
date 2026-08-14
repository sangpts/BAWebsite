import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Phung Tan Sang - Portfolio",
	description:
		"Business Analyst portfolio featuring process analysis, solution design, and system implementation work.",
	icons: {
		icon: "/icon.svg?v=2",
	},
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
