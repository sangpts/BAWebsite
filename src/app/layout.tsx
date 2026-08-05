import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
	title: "Phung Tan Sang · Business Analyst",
	description:
		"Business Analyst portfolio featuring process analysis, solution design, and system implementation work.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
