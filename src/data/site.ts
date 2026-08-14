import type { Capability } from "src/types";

export const site = {
	name: "PHUNG TAN SANG",
	brandName: "Phung Tan Sang",
	role: "Business Analyst",
	brandDescriptor: "Business Analyst & Digital Consultant",
	email: "sangphungsh2000@gmail.com",
	phone: "+84 355 381 362",
	linkedin: "https://www.linkedin.com/in/phung-tan-sang",
	cv: "/documents/phung-tan-sang-cv.pdf",
	cvAvailable: true,
	location: "Ho Chi Minh City, Vietnam",
	identityBanner: {
		quote:
			"Building systems around real business operations — with connected data, clear visibility, and better decisions.",
		name: "Phung Tan Sang",
		role: "Business Analyst",
		experience: "3+ Years Experience",
		portrait: "/images/profile/phung-tan-sang.png",
	},
	navigation: [
		{ label: "Profile", href: "/" },
		{ label: "Projects", href: "/projects" },
	],
	seo: {
		title: "Phung Tan Sang · Business Analyst",
		description:
			"Business Analyst portfolio featuring process analysis, solution design, implementation, and enterprise systems work.",
	},
	footer: {
		copyrightName: "Phung Tan Sang",
		tagline: "Business Analyst · Ho Chi Minh City, Vietnam",
	},
};

export const capabilities: Capability[] = [
	{
		title: "Business Process Analysis",
		description:
			"Understand current operations, identify gaps, and define clear As-Is and To-Be workflows.",
	},
	{
		title: "Requirement & Solution Design",
		description:
			"Translate business needs into workflows, business rules, data structures, functional requirements, and usable system experiences.",
	},
	{
		title: "Stakeholder Communication",
		description:
			"Clarify needs, align different perspectives, present solutions, and move discussions toward practical decisions.",
	},
	{
		title: "Implementation & Delivery",
		description:
			"Contribute through validation, issue resolution, demonstrations, deployment, user adoption, and continuous improvement.",
	},
];
