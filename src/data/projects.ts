import type { Project } from "src/types";

export const projects: Project[] = [
	{
		id: "corporate-website",
		title: "B2B Corporate Website",
		category: "Business Analysis · Customer Journey · Digital Experience",
		description:
			"A corporate website restructured around how business customers discover information, evaluate capabilities, and move toward engagement.",
		context:
			"The company needed a clearer digital presence to help B2B customers understand its capabilities, products, project experience, and contact options.",
		contributions: [
			"Website analysis",
			"B2B customer journey design",
			"Information architecture",
			"Content structure",
			"UI implementation",
			"Responsive validation",
			"Deployment planning",
		],
		solution:
			"Restructured the website around how B2B customers discover the company, evaluate capabilities, review relevant products and projects, and move toward engagement.",
		technologies: ["WordPress", "UI/UX", "Analytics"],
		image: "/images/projects/corporate-website/placeholder.svg",
		actionLabel: "View Live Website",
	},
	{
		id: "enterprise-system",
		title: "Enterprise Management System",
		category: "Business Analysis · Process Design · System Implementation",
		description:
			"A centralized system connecting operational processes, approvals, information, and reporting across multiple business functions.",
		context:
			"Project, procurement, warehouse, production, construction, and financial information was managed across disconnected processes, limiting consistent visibility and traceability.",
		contributions: [
			"Client process discovery",
			"As-Is and To-Be workflow design",
			"Requirement definition",
			"BRD and FRS preparation",
			"Business rule design",
			"Database structure design",
			"Function and data validation",
			"System demonstration",
			"User documentation",
		],
		solution:
			"Standardized workflows across Project, Procurement, Warehouse, Production, Construction, and Accounting, and translated them into a centralized management system.",
		technologies: [".NET", "Angular", "PostgreSQL", "Power BI"],
		image: "/images/projects/enterprise-system/placeholder.svg",
		actionLabel: "Watch System Demo",
	},
];
