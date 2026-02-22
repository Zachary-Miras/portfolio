"use client";

import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
	const { lang, t } = useTranslation();

	return (
		<section
			id='hero'
			className='relative min-h-screen flex items-center justify-center overflow-hidden'>
			{/* Animated background */}
			<div className='absolute inset-0 -z-10'>
				<div className='absolute top-1/4 -left-32 w-96 h-96 bg-violet-500/10 rounded-full blur-[128px] animate-pulse' />
				<div className='absolute bottom-1/4 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[128px] animate-pulse [animation-delay:2s]' />
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[200px]' />
			</div>

			{/* Grid pattern overlay */}
			<div
				className='absolute inset-0 -z-10 opacity-[0.03]'
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
					backgroundSize: "60px 60px",
				}}
			/>

			<div className='text-center px-6 max-w-4xl mx-auto'>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className='text-violet-400 font-medium text-lg mb-4'>
					{t.hero.greeting[lang]}
				</motion.p>

				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.15 }}
					className='font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4'>
					Zachary <span className='gradient-text'>Miras</span>
				</motion.h1>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className='font-heading text-xl sm:text-2xl md:text-3xl text-white/40 font-medium mb-8'>
					{t.hero.title[lang]}
				</motion.p>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.25 }}
					className='text-white/50 text-base sm:text-lg max-w-2xl mx-auto mb-12 leading-relaxed text-balance'>
					{t.hero.subtitle[lang]}
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className='flex flex-col sm:flex-row gap-4 justify-center'>
					<a
						href='#projects'
						className='inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5'>
						{t.hero.cta_projects[lang]}
						<ArrowDown size={18} />
					</a>
					<a
						href='#contact'
						className='inline-flex items-center justify-center gap-2 px-8 py-3.5 glass hover:bg-white/[0.06] text-white font-medium rounded-xl transition-all hover:-translate-y-0.5'>
						<Mail size={18} />
						{t.hero.cta_contact[lang]}
					</a>
				</motion.div>
			</div>

			{/* Scroll indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
				className='absolute bottom-8 left-1/2 -translate-x-1/2'>
				<motion.div
					animate={{ y: [0, 8, 0] }}
					transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
					className='w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5'>
					<div className='w-1.5 h-1.5 rounded-full bg-violet-400' />
				</motion.div>
			</motion.div>
		</section>
	);
}
