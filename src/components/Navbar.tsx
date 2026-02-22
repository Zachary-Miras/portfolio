"use client";

import { useTranslation } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = ["home", "about", "projects", "contact"] as const;
const sectionIds = ["hero", "about", "projects", "contact"];

export default function Navbar() {
	const { lang, toggleLang, t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [activeSection, setActiveSection] = useState("hero");

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);

			const sections = sectionIds.map((id) => document.getElementById(id));
			const scrollPosition = window.scrollY + 100;

			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				if (section && section.offsetTop <= scrollPosition) {
					setActiveSection(sectionIds[i]);
					break;
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollTo = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false);
		}
	};

	return (
		<motion.nav
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.06]"
					: "bg-transparent"
			}`}>
			<div className='max-w-6xl mx-auto px-6 h-16 flex items-center justify-between'>
				<button
					onClick={() => scrollTo("hero")}
					className='font-heading text-xl font-bold gradient-text hover:opacity-80 transition-opacity'>
					ZM
				</button>

				{/* Desktop nav */}
				<div className='hidden md:flex items-center gap-8'>
					{navItems.map((item, i) => (
						<button
							key={item}
							onClick={() => scrollTo(sectionIds[i])}
							className={`text-sm font-medium transition-colors relative ${
								activeSection === sectionIds[i]
									? "text-violet-400"
									: "text-white/60 hover:text-white"
							}`}>
							{t.nav[item][lang]}
							{activeSection === sectionIds[i] && (
								<motion.div
									layoutId='activeNav'
									className='absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-500 rounded-full'
								/>
							)}
						</button>
					))}

					<button
						onClick={toggleLang}
						className='flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors ml-4 px-3 py-1.5 rounded-full border border-white/[0.08] hover:border-violet-500/30'>
						<Globe size={14} />
						{lang === "fr" ? "EN" : "FR"}
					</button>
				</div>

				{/* Mobile toggle */}
				<div className='flex md:hidden items-center gap-3'>
					<button
						onClick={toggleLang}
						className='flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors px-2 py-1 rounded-full border border-white/[0.08]'>
						<Globe size={14} />
						{lang === "fr" ? "EN" : "FR"}
					</button>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='text-white/70 hover:text-white transition-colors'>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className='md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden'>
						<div className='px-6 py-4 flex flex-col gap-3'>
							{navItems.map((item, i) => (
								<button
									key={item}
									onClick={() => scrollTo(sectionIds[i])}
									className={`text-left text-base py-2 transition-colors ${
										activeSection === sectionIds[i]
											? "text-violet-400"
											: "text-white/60 hover:text-white"
									}`}>
									{t.nav[item][lang]}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.nav>
	);
}
