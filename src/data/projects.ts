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
		title: "Enterprise Management System",
		category: "Business Analysis · Process Design · System Implementation",
		description:
			"A centralized system connecting operational processes, approvals, information, and reporting across multiple business functions.",
		context:
			"Project, procurement, warehouse, production, construction, and financial information was managed across disconnected processes.",
		problem:
			"Teams lacked a consistent workflow and centralized visibility into project progress, purchasing activities, inventory transactions, production results, and cost information.",
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
		evidence: [
			"Management dashboard",
			"Project overview",
			"Procurement workflow",
			"Warehouse and inventory",
			"Production reporting",
			"Project budget and cost tracking",
		],
		technologies: [".NET", "Angular", "PostgreSQL", "Power BI"],
		image: "/images/projects/enterprise-system/placeholder.svg",
		actionLabel: "Watch System Demo",
		comingSoonLabel: "System Demo — Coming Soon",
	},
];
