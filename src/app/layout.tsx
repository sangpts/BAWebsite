import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const siteFont = Lato({
	weight: ["300", "400", "700", "900"],
	subsets: ["latin", "latin-ext"],
	display: "swap",
	variable: "--font-site",
});

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
		<html className={siteFont.variable} lang="en">
			<body>{children}</body>
		</html>
	);
}
