"use client";

import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Award, ExternalLink, Github, Medal, Trophy } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const projects = [
	{
		rank: 1,
		icon: Trophy,
		title: "Spa Booking App",
		subtitle: {
			fr: "Plateforme de Réservation Fullstack",
			en: "Fullstack Reservation Platform",
		},
		description: {
			fr: "Application web de réservation permettant de sélectionner un soin, choisir un créneau via Calendly et effectuer un paiement sécurisé avec Stripe. Backoffice administrateur inclus.",
			en: "Web booking app to select a treatment, choose a slot via Calendly, and make secure payments with Stripe. Includes an admin backoffice.",
		},
		highlights: {
			fr: [
				"Flow complet : service → créneau → paiement → confirmation",
				"Webhooks Stripe idempotents",
				"Synchronisation Calendly (création + annulation + retry)",
				"State machine pour gestion des statuts",
			],
			en: [
				"Full flow: service → slot → payment → confirmation",
				"Idempotent Stripe webhooks",
				"Calendly sync (creation + cancellation + retry)",
				"State machine for status management",
			],
		},
		tech: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"MongoDB",
			"Stripe",
			"Calendly",
			"Zod",
			"Vitest",
		],
		screenshots: [
			"/demos/Spa/spa-1.png",
			"/demos/Spa/spa-2.png",
			"/demos/Spa/spa-3.png",
			"/demos/Spa/spa-4.png",
			"/demos/Spa/spa-5.png",
			"/demos/Spa/spa-6.png",
			"/demos/Spa/spa-7.png",
			"/demos/Spa/spa-8.png",
		],
		liveUrl: "https://spa-inky-one.vercel.app/",
		githubUrl: "https://github.com/Zachary-Miras/Spa",
		color: "from-amber-400 to-yellow-500",
		glowColor: "rgba(251, 191, 36, 0.15)",
	},
	{
		rank: 2,
		icon: Medal,
		title: "Real Estate Platform",
		subtitle: {
			fr: "Application Immobilière Moderne",
			en: "Modern Real Estate Web App",
		},
		description: {
			fr: "Plateforme immobilière interactive permettant de consulter des biens, afficher leur localisation sur Google Maps et contacter un conseiller.",
			en: "Interactive real estate platform to browse properties, view locations on Google Maps, and contact an advisor.",
		},
		highlights: {
			fr: [
				"Authentification sécurisée avec NextAuth",
				"Gestion des annonces via Prisma + MongoDB",
				"Intégration Google Maps",
				"Formulaire de contact via EmailJS",
			],
			en: [
				"Secure authentication with NextAuth",
				"Listings management via Prisma + MongoDB",
				"Google Maps integration",
				"Contact form via EmailJS",
			],
		},
		tech: [
			"Next.js",
			"React",
			"JavaScript",
			"Tailwind CSS",
			"MongoDB",
			"Prisma",
			"NextAuth",
			"Google Maps API",
		],
		screenshots: [] as string[],
		liveUrl: "https://realestate-mu-five.vercel.app/",
		githubUrl: "https://github.com/Zachary-Miras/Real-Estate",
		color: "from-gray-300 to-gray-400",
		glowColor: "rgba(156, 163, 175, 0.15)",
	},
	{
		rank: 3,
		icon: Award,
		title: "Library Management System",
		subtitle: {
			fr: "Système de Gestion de Bibliothèque Fullstack",
			en: "Fullstack Library Reservation System",
		},
		description: {
			fr: "Application web de gestion de bibliothèque permettant aux utilisateurs de consulter et réserver des livres. Dashboard administrateur et gestion automatisée des retards.",
			en: "Library management web app for users to browse and reserve books. Admin dashboard and automated overdue management.",
		},
		highlights: {
			fr: [
				"Backend REST en Flask",
				"Authentification JWT",
				"Réservation et gestion des retards",
				"Tâches planifiées avec APScheduler",
			],
			en: [
				"Flask REST backend",
				"JWT authentication",
				"Reservation and overdue management",
				"Scheduled tasks with APScheduler",
			],
		},
		tech: [
			"React",
			"Vite",
			"Material UI",
			"Axios",
			"Flask",
			"Python",
			"MongoDB",
			"JWT",
			"APScheduler",
		],
		screenshots: [] as string[],
		liveUrl: null,
		githubUrl: "https://github.com/Zachary-Miras",
		color: "from-amber-600 to-amber-700",
		glowColor: "rgba(180, 83, 9, 0.15)",
	},
];

/* ─── Browser-frame preview with auto-scroll on hover ─── */
function BrowserPreview({ screenshots }: { screenshots: string[] }) {
	const [current, setCurrent] = useState(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const startAutoScroll = useCallback(() => {
		if (screenshots.length <= 1) return;
		intervalRef.current = setInterval(() => {
			setCurrent((c) => (c + 1) % screenshots.length);
		}, 1500);
	}, [screenshots.length]);

	const stopAutoScroll = useCallback(() => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		setCurrent(0);
	}, []);

	useEffect(() => {
		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, []);

	if (screenshots.length === 0) {
		// Placeholder when no screenshots yet
		return (
			<div className='rounded-xl overflow-hidden border border-white/6 bg-dark-900/60'>
				{/* Browser bar */}
				<div className='flex items-center gap-1.5 px-3 py-2 bg-dark-950/80 border-b border-white/6'>
					<div className='w-2.5 h-2.5 rounded-full bg-red-500/60' />
					<div className='w-2.5 h-2.5 rounded-full bg-yellow-500/60' />
					<div className='w-2.5 h-2.5 rounded-full bg-green-500/60' />
					<div className='ml-3 flex-1 h-5 rounded-md bg-white/4 max-w-[200px]' />
				</div>
				{/* Placeholder content */}
				<div className='aspect-video flex items-center justify-center bg-dark-900/40'>
					<div className='text-center'>
						<div className='w-12 h-12 mx-auto mb-3 rounded-xl bg-white/4 flex items-center justify-center'>
							<svg
								className='w-6 h-6 text-white/20'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={1.5}
									d='M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z'
								/>
							</svg>
						</div>
						<p className='text-xs text-white/20'>Screenshots à venir</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			className='rounded-xl overflow-hidden border border-white/6 bg-dark-900/60 cursor-pointer'
			onMouseEnter={startAutoScroll}
			onMouseLeave={stopAutoScroll}
			onTouchStart={startAutoScroll}
			onTouchEnd={stopAutoScroll}>
			{/* Browser bar */}
			<div className='flex items-center gap-1.5 px-3 py-2 bg-dark-950/80 border-b border-white/6'>
				<div className='w-2.5 h-2.5 rounded-full bg-red-500/60' />
				<div className='w-2.5 h-2.5 rounded-full bg-yellow-500/60' />
				<div className='w-2.5 h-2.5 rounded-full bg-green-500/60' />
				<div className='ml-3 flex-1 h-5 rounded-md bg-white/4 max-w-[200px]' />
			</div>

			{/* Screenshot area */}
			<div className='relative aspect-video overflow-hidden bg-dark-900/40'>
				{/* Render all images immediately but control visibility via CSS opacity */}
				{/* This forces the browser to download them before they are needed */}
				{screenshots.map((src, idx) => (
					<Image
						key={src}
						src={src}
						alt={`Screenshot ${idx + 1}`}
						fill
						sizes='(max-width: 768px) 100vw, 45vw'
						className={`object-cover object-top transition-opacity duration-500 ${
							idx === current ? "opacity-100" : "opacity-0"
						}`}
						quality={85}
						// Let Next.js lazy load them when the user scrolls near the section
					/>
				))}

				{/* Progress dots */}
				{screenshots.length > 1 && (
					<div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10'>
						{screenshots.map((_, i) => (
							<div
								key={i}
								className={`h-1.5 rounded-full transition-all duration-300 ${
									i === current
										? "w-4 bg-violet-400"
										: "w-1.5 bg-white/30 backdrop-blur-md"
								}`}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default function Projects() {
	const { lang, t } = useTranslation();

	return (
		<section id='projects' className='section-padding bg-dark-900/50'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='font-heading text-3xl md:text-4xl font-bold mb-16'>
					{t.projects.title[lang]} <span className='gradient-text'>.</span>
				</motion.h2>

				<div className='space-y-10'>
					{projects.map((project, idx) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: idx * 0.15 }}
							className='glass-strong group hover:bg-white/8 transition-all duration-500 overflow-hidden'
							style={{
								boxShadow: `0 0 0 0 ${project.glowColor}`,
							}}
							onMouseEnter={(e) => {
								(e.currentTarget as HTMLElement).style.boxShadow =
									`0 0 60px -10px ${project.glowColor}`;
							}}
							onMouseLeave={(e) => {
								(e.currentTarget as HTMLElement).style.boxShadow =
									`0 0 0 0 ${project.glowColor}`;
							}}>
							<div className='p-6 md:p-8'>
								{/* Horizontal layout: preview left, content right */}
								<div className='grid md:grid-cols-[1fr_1.2fr] gap-6 md:gap-8'>
									{/* Left — Browser preview */}
									<BrowserPreview screenshots={project.screenshots} />

									{/* Right — Content */}
									<div className='flex flex-col'>
										{/* Header */}
										<div className='flex items-start justify-between mb-3'>
											<div className='flex items-center gap-3'>
												<div
													className={`w-9 h-9 rounded-lg bg-linear-to-br ${project.color} flex items-center justify-center text-dark-950`}>
													<project.icon size={18} strokeWidth={2.5} />
												</div>
												<div>
													<h3 className='font-heading text-lg font-bold text-white group-hover:text-white/90'>
														{project.title}
													</h3>
													<p className='text-xs text-white/40'>
														{project.subtitle[lang]}
													</p>
												</div>
											</div>

											<div className='flex items-center gap-1.5'>
												{project.liveUrl ? (
													<a
														href={project.liveUrl}
														target='_blank'
														rel='noopener noreferrer'
														className='flex items-center gap-1 text-xs text-violet-400 hover:text-violet-300 transition-colors px-2.5 py-1.5 rounded-lg hover:bg-violet-500/10'>
														<ExternalLink size={12} />
														<span className='hidden sm:inline'>
															{t.projects.live[lang]}
														</span>
													</a>
												) : (
													<span className='text-[10px] text-white/25 px-2.5 py-1.5'>
														{t.projects.not_deployed[lang]}
													</span>
												)}
												<a
													href={project.githubUrl}
													target='_blank'
													rel='noopener noreferrer'
													className='flex items-center gap-1 text-xs text-white/50 hover:text-white transition-colors px-2.5 py-1.5 rounded-lg hover:bg-white/6'>
													<Github size={12} />
													<span className='hidden sm:inline'>
														{t.projects.code[lang]}
													</span>
												</a>
											</div>
										</div>

										{/* Description */}
										<p className='text-white/45 text-sm leading-relaxed mb-4'>
											{project.description[lang]}
										</p>

										{/* Highlights */}
										<ul className='space-y-1.5 mb-4'>
											{project.highlights[lang].map((h, i) => (
												<li
													key={i}
													className='flex items-start gap-2 text-sm text-white/40'>
													<span className='text-violet-400 mt-0.5 shrink-0'>
														▸
													</span>
													{h}
												</li>
											))}
										</ul>

										{/* Tech tags */}
										<div className='flex flex-wrap gap-1.5 mt-auto'>
											{project.tech.map((techItem) => (
												<span
													key={techItem}
													className='px-2 py-0.5 text-[11px] font-medium text-white/45 bg-white/4 rounded border border-white/6'>
													{techItem}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
