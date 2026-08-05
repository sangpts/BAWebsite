import type { Capability } from "src/types";

export const site = {
	name: "PHUNG TAN SANG",
	role: "Business Analyst",
	email: "sangphungsh2000@gmail.com",
	phone: "+84 355 381 362",
	linkedin: "",
	cv: "/documents/phung-tan-sang-cv.pdf",
	cvAvailable: true,
	location: "Ho Chi Minh City, Vietnam",
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
