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
		problem:
			"The previous website presented information in separate areas but did not guide visitors through a consistent supplier-evaluation journey.",
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
			"Restructured the website around how B2B customers discover the company, assess its capabilities, review relevant products and projects, and move toward contact.",
		evidence: [
			"Homepage",
			"Capabilities or product presentation",
			"Project showcase",
			"Mobile interface",
		],
		technologies: ["WordPress", "UI/UX", "Analytics"],
		image: "/images/projects/corporate-website/placeholder.svg",
		actionLabel: "View Live Website",
		comingSoonLabel: "Live Website — Coming Soon",
	},
	{
		id: "enterprise-system",
		title: "Project Management System",
		category: "Freelance Business Analyst & QA · 3 members",
		description:
			"A project management system connecting operational workflows across Project, Procurement, Warehouse, Production, Construction, and Accounting.",
		context:
			"Elicited current business processes directly from the client and defined the scope and requirements for a project management system.",
		problem:
			"Operational information and workflows needed to be standardized across departments before they could be translated into one system.",
		contributions: [
			"Elicited current business processes directly from the client",
			"Defined project scope and system requirements",
			"Standardized cross-functional workflows",
			"Designed project progress and finished-goods processes",
			"Designed material consumption, cash-flow, cost, receivable, and payable processes",
			"Prepared BRD and FRS for client sign-off and developer implementation",
			"Assessed scalability and designed the database structure",
			"Validated functions and data quality before deployment",
			"Conducted system demonstrations and created user guides",
		],
		solution:
			"Standardized workflows across Project, Procurement, Warehouse, Production, Construction, and Accounting and translated them into a system prepared for client deployment.",
		evidence: [
			"Management dashboard",
			"Project overview",
			"Procurement workflow",
			"Warehouse and inventory",
			"Production reporting",
			"Project budget and cost tracking",
		],
		technologies: ["Business Analysis", "Quality Assurance", "BRD / FRS", "Database Design"],
		image: "/images/projects/enterprise-system/placeholder.svg",
		actionLabel: "Watch System Demo",
		comingSoonLabel: "System Demo — Coming Soon",
	},
];
