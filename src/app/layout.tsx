import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-heading",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Zachary Miras — Fullstack Developer",
	description:
		"Portfolio de Zachary Miras — Développeur Fullstack spécialisé en React, Next.js, TypeScript et Node.js. Étudiant en Master Informatique à Aix-Marseille Université.",
	keywords: [
		"Zachary Miras",
		"développeur fullstack",
		"fullstack developer",
		"React",
		"Next.js",
		"TypeScript",
		"portfolio",
	],
	authors: [{ name: "Zachary Miras" }],
	openGraph: {
		title: "Zachary Miras — Fullstack Developer",
		description:
			"Portfolio de Zachary Miras — Développeur Fullstack spécialisé en React, Next.js, TypeScript.",
		type: "website",
		locale: "fr_FR",
	},
};

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='fr' className='scroll-smooth' suppressHydrationWarning>
			<body
				className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
				suppressHydrationWarning>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
