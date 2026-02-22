"use client";

import { useTranslation } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import {
	CheckCircle,
	Github,
	Linkedin,
	Mail,
	Send,
	XCircle,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
	const { lang, t } = useTranslation();
	const [status, setStatus] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("sending");

		const form = e.currentTarget;
		const data = new FormData(form);

		try {
			const res = await fetch("https://formspree.io/f/mkovqyyr", {
				method: "POST",
				body: data,
				headers: { Accept: "application/json" },
			});

			if (res.ok) {
				setStatus("success");
				form.reset();
				setTimeout(() => setStatus("idle"), 5000);
			} else {
				setStatus("error");
				setTimeout(() => setStatus("idle"), 5000);
			}
		} catch {
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
		}
	};

	const socialLinks = [
		{
			icon: Github,
			label: "GitHub",
			href: "https://github.com/Zachary-Miras",
		},
		{
			icon: Linkedin,
			label: "LinkedIn",
			href: "https://www.linkedin.com/in/zachary-miras-18518926a/",
		},
		{
			icon: Mail,
			label: "Email",
			href: "mailto:zmiras72@gmail.com",
		},
	];

	return (
		<section id='contact' className='section-padding'>
			<div className='max-w-4xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='font-heading text-3xl md:text-4xl font-bold mb-4 text-center'>
					{t.contact.title[lang]} <span className='gradient-text'>.</span>
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1 }}
					className='text-white/50 text-lg text-center max-w-xl mx-auto mb-12'>
					{t.contact.subtitle[lang]}
				</motion.p>

				<div className='grid md:grid-cols-5 gap-8 md:gap-12'>
					{/* Contact Form */}
					<motion.form
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2 }}
						onSubmit={handleSubmit}
						className='md:col-span-3 space-y-5'>
						<div>
							<label
								htmlFor='name'
								className='block text-sm text-white/50 mb-2'>
								{t.contact.name[lang]}
							</label>
							<input
								type='text'
								id='name'
								name='name'
								required
								className='w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all'
								placeholder={lang === "fr" ? "Votre nom" : "Your name"}
							/>
						</div>

						<div>
							<label
								htmlFor='email'
								className='block text-sm text-white/50 mb-2'>
								{t.contact.email[lang]}
							</label>
							<input
								type='email'
								id='email'
								name='email'
								required
								className='w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all'
								placeholder={
									lang === "fr" ? "votre@email.com" : "your@email.com"
								}
							/>
						</div>

						<div>
							<label
								htmlFor='message'
								className='block text-sm text-white/50 mb-2'>
								{t.contact.message[lang]}
							</label>
							<textarea
								id='message'
								name='message'
								required
								rows={5}
								className='w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all resize-none'
								placeholder={
									lang === "fr" ? "Votre message..." : "Your message..."
								}
							/>
						</div>

						<button
							type='submit'
							disabled={status === "sending"}
							className='w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:hover:bg-violet-600 text-white font-medium rounded-xl transition-all hover:shadow-lg hover:shadow-violet-500/25'>
							{status === "sending" ? (
								<>
									<div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin' />
									{t.contact.sending[lang]}
								</>
							) : (
								<>
									<Send size={16} />
									{t.contact.send[lang]}
								</>
							)}
						</button>

						{status === "success" && (
							<motion.p
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className='flex items-center gap-2 text-sm text-emerald-400'>
								<CheckCircle size={16} />
								{t.contact.success[lang]}
							</motion.p>
						)}

						{status === "error" && (
							<motion.p
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								className='flex items-center gap-2 text-sm text-red-400'>
								<XCircle size={16} />
								{t.contact.error[lang]}
							</motion.p>
						)}
					</motion.form>

					{/* Social Links */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3 }}
						className='md:col-span-2 flex flex-col gap-4'>
						{socialLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target={link.href.startsWith("mailto") ? undefined : "_blank"}
								rel='noopener noreferrer'
								className='glass group flex items-center gap-4 p-4 hover:bg-white/[0.06] transition-all'>
								<div className='w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors'>
									<link.icon size={18} className='text-violet-400' />
								</div>
								<div>
									<p className='text-sm font-medium text-white/80 group-hover:text-white transition-colors'>
										{link.label}
									</p>
									<p className='text-xs text-white/30'>
										{link.href.startsWith("mailto")
											? "zmiras72@gmail.com"
											: link.href
													.replace("https://", "")
													.split("/")
													.slice(0, 2)
													.join("/")}
									</p>
								</div>
							</a>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
