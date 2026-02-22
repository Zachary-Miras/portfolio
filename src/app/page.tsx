"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
	return (
		<LanguageProvider>
			<Navbar />
			<main>
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</LanguageProvider>
	);
}
