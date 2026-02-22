"use client";

import { useTranslation } from "@/context/LanguageContext";
import { AnimatePresence, motion } from "framer-motion";
import {
	Award,
	ChevronLeft,
	ChevronRight,
	ExternalLink,
	Github,
	Image as ImageIcon,
	Medal,
	Play,
	Trophy,
} from "lucide-react";
import { useState } from "react";

interface Preview {
	type: "image" | "video";
	src: string;
	label: { fr: string; en: string };
}

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
		// ── Ajoute tes GIFs/images/vidéos dans public/demos/ ──
		// Ex: { type: "video", src: "/demos/spa-flow.mp4", label: { fr: "Flow réservation", en: "Booking flow" } },
		previews: [] as Preview[],
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
		previews: [] as Preview[],
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
		previews: [] as Preview[],
		liveUrl: null,
		githubUrl: "https://github.com/Zachary-Miras",
		color: "from-amber-600 to-amber-700",
		glowColor: "rgba(180, 83, 9, 0.15)",
	},
];

function PreviewCarousel({
	previews,
	lang,
}: {
	previews: Preview[];
	lang: "fr" | "en";
}) {
	const [current, setCurrent] = useState(0);

	if (previews.length === 0) return null;

	const prev = () => setCurrent((c) => (c === 0 ? previews.length - 1 : c - 1));
	const next = () => setCurrent((c) => (c === previews.length - 1 ? 0 : c + 1));

	const item = previews[current];

	return (
		<div className='relative mb-5 rounded-xl overflow-hidden bg-dark-900/80 border border-white/[0.06]'>
			{/* Media */}
			<div className='relative aspect-video w-full'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={current}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='absolute inset-0'>
						{item.type === "video" ? (
							<video
								src={item.src}
								autoPlay
								loop
								muted
								playsInline
								className='w-full h-full object-cover'
							/>
						) : (
							<img
								src={item.src}
								alt={item.label[lang]}
								className='w-full h-full object-cover'
							/>
						)}
					</motion.div>
				</AnimatePresence>

				{/* Label overlay */}
				<div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-2'>
							{item.type === "video" ? (
								<Play size={12} className='text-violet-400' />
							) : (
								<ImageIcon size={12} className='text-violet-400' />
							)}
							<span className='text-xs text-white/70'>{item.label[lang]}</span>
						</div>
						{previews.length > 1 && (
							<span className='text-xs text-white/40'>
								{current + 1} / {previews.length}
							</span>
						)}
					</div>
				</div>
			</div>

			{/* Navigation arrows */}
			{previews.length > 1 && (
				<>
					<button
						onClick={prev}
						className='absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all'>
						<ChevronLeft size={16} />
					</button>
					<button
						onClick={next}
						className='absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all'>
						<ChevronRight size={16} />
					</button>
				</>
			)}
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

				<div className='space-y-8'>
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
								{/* Header */}
								<div className='flex items-start justify-between mb-4'>
									<div className='flex items-center gap-3'>
										<div
											className={`w-10 h-10 rounded-xl bg-linear-to-br ${project.color} flex items-center justify-center text-dark-950`}>
											<project.icon size={20} strokeWidth={2.5} />
										</div>
										<div>
											<h3 className='font-heading text-xl font-bold text-white group-hover:text-white/90'>
												{project.title}
											</h3>
											<p className='text-sm text-white/40'>
												{project.subtitle[lang]}
											</p>
										</div>
									</div>

									<div className='flex items-center gap-2'>
										{project.liveUrl ? (
											<a
												href={project.liveUrl}
												target='_blank'
												rel='noopener noreferrer'
												className='flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors px-3 py-1.5 rounded-lg hover:bg-violet-500/10'>
												<ExternalLink size={14} />
												<span className='hidden sm:inline'>
													{t.projects.live[lang]}
												</span>
											</a>
										) : (
											<span className='text-xs text-white/30 px-3 py-1.5'>
												{t.projects.not_deployed[lang]}
											</span>
										)}
										<a
											href={project.githubUrl}
											target='_blank'
											rel='noopener noreferrer'
											className='flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/6'>
											<Github size={14} />
											<span className='hidden sm:inline'>
												{t.projects.code[lang]}
											</span>
										</a>
									</div>
								</div>

								{/* Demo Preview Carousel */}
								<PreviewCarousel previews={project.previews} lang={lang} />

								{/* Description */}
								<p className='text-white/50 text-sm leading-relaxed mb-5'>
									{project.description[lang]}
								</p>

								{/* Highlights */}
								<ul className='grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6'>
									{project.highlights[lang].map((h, i) => (
										<li
											key={i}
											className='flex items-start gap-2 text-sm text-white/40'>
											<span className='text-violet-400 mt-1 shrink-0'>▸</span>
											{h}
										</li>
									))}
								</ul>

								{/* Tech tags */}
								<div className='flex flex-wrap gap-2'>
									{project.tech.map((techItem) => (
										<span
											key={techItem}
											className='px-2.5 py-1 text-xs font-medium text-white/50 bg-white/4 rounded-md border border-white/6'>
											{techItem}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
