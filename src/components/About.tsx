"use client";

import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
	ArrowDown,
	Briefcase,
	Calendar,
	Github,
	GraduationCap,
	Linkedin,
} from "lucide-react";

const techStack = {
	Frontend: [
		"React",
		"Next.js",
		"TypeScript",
		"JavaScript",
		"Tailwind CSS",
		"Material UI",
	],
	Backend: ["Flask", "Python", "Node.js", "Prisma", "MongoDB", "JWT"],
	Tools: ["Git", "GitHub Actions", "Stripe", "Vercel", "Vitest", "Zod"],
};

const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: i * 0.1 },
	}),
};

export default function About() {
	const { lang, t } = useTranslation();

	const timeline = [
		{
			icon: GraduationCap,
			title: t.about.exp_master[lang],
			date: t.about.exp_master_date[lang],
			description: "",
		},
		{
			icon: GraduationCap,
			title: t.about.exp_licence[lang],
			date: t.about.exp_licence_date[lang],
			description: "",
		},
		{
			icon: Briefcase,
			title: t.about.exp_stage[lang],
			date: t.about.exp_stage_date[lang],
			description: t.about.exp_stage_desc[lang],
		},
	];

	return (
		<section id='about' className='section-padding'>
			<div className='max-w-6xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='font-heading text-3xl md:text-4xl font-bold mb-4'>
					{t.about.title[lang]} <span className='gradient-text'>.</span>
				</motion.h2>

				{/* Bio + Social icons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className='mb-16 max-w-3xl'>
					<p className='text-white/50 text-lg leading-relaxed mb-5'>
						{t.about.bio[lang]}
					</p>

					<div className='flex items-center gap-4'>
						{/* GitHub */}
						<a
							href='https://github.com/Zachary-Miras'
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300'>
							<Github size={18} />
						</a>
						{/* LinkedIn */}
						<a
							href='https://www.linkedin.com/in/zachary-miras-18518926a/'
							target='_blank'
							rel='noopener noreferrer'
							className='w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300'>
							<Linkedin size={18} />
						</a>

						{/* Separator */}
						<div className='w-px h-6 bg-white/10' />

						{/* Contact CTA */}
						<a
							href='#contact'
							className='flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 transition-colors px-4 py-2 rounded-xl border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/5'>
							{t.about.cta_contact[lang]}
							<ArrowDown size={14} />
						</a>
					</div>
				</motion.div>

				<div className='grid md:grid-cols-2 gap-12 lg:gap-20'>
					{/* Timeline */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='font-heading text-xl font-semibold mb-8 text-white/80'>
							{t.about.experience_title[lang]}
						</motion.h3>

						<div className='space-y-8 relative'>
							<div className='absolute left-[15px] top-2 bottom-2 w-px bg-linear-to-b from-violet-500/50 via-violet-500/20 to-transparent' />

							{timeline.map((item, i) => (
								<motion.div
									key={i}
									custom={i}
									variants={fadeInUp}
									initial='hidden'
									whileInView='visible'
									viewport={{ once: true }}
									className='relative pl-10'>
									<div className='absolute left-0 top-0.5 w-[30px] h-[30px] rounded-full bg-dark-800 border border-violet-500/30 flex items-center justify-center'>
										<item.icon size={14} className='text-violet-400' />
									</div>
									<h4 className='font-medium text-white/90 text-sm'>
										{item.title}
									</h4>
									<div className='flex items-center gap-1.5 mt-1'>
										<Calendar size={12} className='text-violet-400/60' />
										<span className='text-xs text-white/40'>{item.date}</span>
									</div>
									{item.description && (
										<p className='text-white/40 text-sm mt-2 leading-relaxed'>
											{item.description}
										</p>
									)}
								</motion.div>
							))}
						</div>
					</div>

					{/* Tech Stack */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className='font-heading text-xl font-semibold mb-8 text-white/80'>
							{t.about.tech_title[lang]}
						</motion.h3>

						<div className='space-y-6'>
							{Object.entries(techStack).map(([category, techs], catIdx) => (
								<motion.div
									key={category}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: catIdx * 0.15 }}>
									<span className='text-xs uppercase tracking-widest text-violet-400/60 font-medium'>
										{category}
									</span>
									<div className='flex flex-wrap gap-2 mt-3'>
										{techs.map((tech) => (
											<span
												key={tech}
												className='px-3 py-1.5 text-sm text-white/70 glass rounded-lg hover:bg-white/6 hover:text-white transition-colors cursor-default'>
												{tech}
											</span>
										))}
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
