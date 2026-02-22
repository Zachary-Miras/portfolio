"use client";

import { useTranslation } from "@/context/LanguageContext";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
	const { lang, t } = useTranslation();

	const links = [
		{ icon: Github, href: "https://github.com/Zachary-Miras", label: "GitHub" },
		{
			icon: Linkedin,
			href: "https://www.linkedin.com/in/zachary-miras-18518926a/",
			label: "LinkedIn",
		},
		{ icon: Mail, href: "mailto:zmiras72@gmail.com", label: "Email" },
	];

	return (
		<footer className='border-t border-white/[0.06] bg-dark-950'>
			<div className='max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
				<p className='text-sm text-white/30'>
					© {new Date().getFullYear()} Zachary Miras. {t.footer.rights[lang]}
				</p>

				<div className='flex items-center gap-4'>
					{links.map((link) => (
						<a
							key={link.label}
							href={link.href}
							target={link.href.startsWith("mailto") ? undefined : "_blank"}
							rel='noopener noreferrer'
							className='text-white/30 hover:text-violet-400 transition-colors'
							aria-label={link.label}>
							<link.icon size={18} />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
}
