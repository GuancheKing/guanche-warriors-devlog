
export const languages = {
	en: "English",
	es: "Español",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "en";

export const ui = {
	en: {
		"nav.home": "Home",
		"nav.devlog": "Devlog",
		"nav.about": "About",
		"nav.roadmap": "Roadmap",

		"site.subtitle": "DEVELOPMENT JOURNAL",

		"home.eyebrow": "INDEPENDENT JRPG / DEVELOPMENT JOURNAL",
		"home.description":
			"An indie turn-based JRPG inspired by the Canary Islands. A behind-the-scenes look at its development, from early prototypes and programming challenges to a playable adventure.",
		"home.readDevlog": "Read the devlog",
		"home.behindProject": "Behind the project",

		"home.developerLabel": "BEHIND THE PROJECT",
		"home.developerTitle": "Making games, one turn at a time.",
		"home.developerDescription":
			"I'm Pepo, a programmer in the making. Guanche Warriors is my personal JRPG project, and this journal is where I document what I'm building, the challenges I run into and everything I learn along the way.",
		"home.meetDeveloper": "Meet the developer",

		"home.journalLabel": "THE JOURNAL",
		"home.recentTitle": "Recent writing",
		"home.recentDescription":
			"Development updates, technical challenges and lessons learned while building Guanche Warriors.",
		"home.allPosts": "VIEW ALL POSTS",

		"common.readArticle": "READ ARTICLE",
		"common.backToDevlog": "BACK TO DEVLOG",
		"common.completed": "Completed",
		"common.inProgress": "In Progress",
		"common.planned": "Planned",
		"common.keyDeliverables": "Key deliverables",

		"footer.description":
			"An independent JRPG inspired by the Canary Islands.",
	},

	es: {
		"nav.home": "Inicio",
		"nav.devlog": "Devlog",
		"nav.about": "Sobre el proyecto",
		"nav.roadmap": "Roadmap",

		"site.subtitle": "DEVLOG",

		"home.eyebrow": "JRPG INDEPENDIENTE / DEVLOG",
		"home.description":
			"Un JRPG indie de combate por turnos inspirado en las Islas Canarias. Iré compartiendo el desarrollo, desde los primeros prototipos y desafíos de programación hasta conseguir que sea algo jugable y divertido.",
		"home.readDevlog": "Ir al Devlog",
		"home.behindProject": "Sobre el proyecto",

		"home.developerLabel": "SOBRE EL PROYECTO",
		"home.developerTitle": "Creando videojuegos, turno a turno.",
		"home.developerDescription":
			"Soy Pepo, un programador aprendiendo a programar videojuegos. Guanche Warriors es un proyecto personal, y este devlog es donde documento lo que voy construyendo, los retos que encuentro y todo lo que aprendo por el camino.",
		"home.meetDeveloper": "Conoce al desarrollador",

		"home.journalLabel": "EL DIARIO",
		"home.recentTitle": "Últimas publicaciones",
		"home.recentDescription":
			"Actualizaciones del desarrollo, desafíos técnicos y aprendizajes durante la creación de Guanche Warriors.",
		"home.allPosts": "VER TODAS LAS PUBLICACIONES",

		"common.readArticle": "LEER ARTÍCULO",
		"common.backToDevlog": "VOLVER AL DEVLOG",
		"common.completed": "Completado",
		"common.inProgress": "En desarrollo",
		"common.planned": "Planificado",
		"common.keyDeliverables": "Funcionalidades principales",

		"footer.description":
			"Un JRPG independiente inspirado en las Islas Canarias.",
	},
} as const;

export function useTranslations(lang: Language) {
	return function t(key: keyof typeof ui.en): string {
		return ui[lang][key];
	};
}
