"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type Lang = "fr" | "en";

const translations = {
	nav: {
		home: { fr: "Accueil", en: "Home" },
		about: { fr: "À propos", en: "About" },
		projects: { fr: "Projets", en: "Projects" },
		contact: { fr: "Contact", en: "Contact" },
	},
	hero: {
		greeting: { fr: "Salut, je suis", en: "Hi, I'm" },
		title: { fr: "Développeur Fullstack", en: "Fullstack Developer" },
		subtitle: {
			fr: "Étudiant en Master Informatique à Aix-Marseille Université, passionné par la conception d'applications complètes et robustes.",
			en: "Computer Science Master's student at Aix-Marseille University, passionate about building complete and robust applications.",
		},
		cta_projects: { fr: "Voir mes projets", en: "View my projects" },
		cta_contact: { fr: "Me contacter", en: "Contact me" },
	},
	about: {
		title: { fr: "À propos", en: "About Me" },
		bio: {
			fr: "Étudiant en Master Informatique à Aix-Marseille Université, spécialisé en ingénierie du développement logiciel. Je m'intéresse particulièrement à l'architecture des systèmes, à la logique métier et à la structuration d'applications web robustes.",
			en: "Computer Science Master's student at Aix-Marseille University, specializing in software development engineering. I'm particularly interested in system architecture, business logic, and building robust web applications.",
		},
		experience_title: { fr: "Parcours", en: "Experience" },
		exp_master: {
			fr: "Master Informatique — Aix-Marseille Université",
			en: "Master's in Computer Science — Aix-Marseille University",
		},
		exp_master_date: { fr: "2025 – En cours", en: "2025 – Present" },
		exp_stage: {
			fr: "Stage Développement — APTITUDES Méditerranée SI&I",
			en: "Development Internship — APTITUDES Méditerranée SI&I",
		},
		exp_stage_date: { fr: "2025", en: "2025" },
		exp_stage_desc: {
			fr: "Intégration et automatisation d'un ERP. Gestion des flux, tests, débogage et validation fonctionnelle.",
			en: "ERP integration and automation. Workflow management, testing, debugging, and functional validation.",
		},
		exp_licence: {
			fr: "Licence Informatique — Aix-Marseille Université",
			en: "Bachelor's in Computer Science — Aix-Marseille University",
		},
		exp_licence_date: { fr: "2022 – 2025", en: "2022 – 2025" },
		tech_title: { fr: "Technologies", en: "Tech Stack" },
		cta_contact: {
			fr: "Ouvert aux opportunités — Me contacter",
			en: "Open to opportunities — Contact me",
		},
	},
	projects: {
		title: { fr: "Mes Projets", en: "My Projects" },
		live: { fr: "Démo live", en: "Live Demo" },
		code: { fr: "Code source", en: "Source Code" },
		not_deployed: { fr: "Pas encore déployé", en: "Not yet deployed" },
	},
	contact: {
		title: { fr: "Travaillons ensemble", en: "Let's Work Together" },
		subtitle: {
			fr: "N'hésitez pas à me contacter !",
			en: "Feel free to reach out!",
		},
		name: { fr: "Nom", en: "Name" },
		email: { fr: "Email", en: "Email" },
		message: { fr: "Message", en: "Message" },
		send: { fr: "Envoyer", en: "Send" },
		sending: { fr: "Envoi...", en: "Sending..." },
		success: {
			fr: "Message envoyé avec succès !",
			en: "Message sent successfully!",
		},
		error: {
			fr: "Erreur lors de l'envoi. Réessayez.",
			en: "Failed to send. Please try again.",
		},
	},
	footer: {
		rights: {
			fr: "Tous droits réservés.",
			en: "All rights reserved.",
		},
	},
} as const;

type Translations = typeof translations;

interface LanguageContextType {
	lang: Lang;
	toggleLang: () => void;
	t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [lang, setLang] = useState<Lang>("fr");

	const toggleLang = () => setLang((prev) => (prev === "fr" ? "en" : "fr"));

	return (
		<LanguageContext.Provider value={{ lang, toggleLang, t: translations }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useTranslation() {
	const context = useContext(LanguageContext);
	if (!context)
		throw new Error("useTranslation must be used within LanguageProvider");
	return context;
}
