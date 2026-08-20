import { ProjectVisualVariant, type Project } from "src/types";

export const projects: Project[] = [
	{
		id: "corporate-website",
		title: "B2B Corporate Website Strategy, Design & Development",
		category: "Business Analysis · Information Architecture · Web Development",
		description:
			"A responsive corporate website structured around how business customers discover the company, evaluate its capabilities, review relevant information, and move toward contact.",
		context:
			"The business needed a clearer digital presence that could communicate its capabilities, products, project experience, and contact pathways to B2B customers.",
		problem:
			"The previous information structure did not guide visitors through a consistent supplier-evaluation journey or connect business credibility, offerings, and calls to action clearly.",
		contributions: [
			"Requirements discovery and stakeholder alignment",
			"B2B customer journey definition",
			"Sitemap and information architecture",
			"Content hierarchy and page structure",
			"Responsive interface development",
			"Functional and responsive testing",
		],
		solution:
			"A scalable B2B website connecting company positioning, capabilities, products, project evidence, and contact pathways within one coherent desktop and mobile experience.",
		evidence: ["Homepage", "Sitemap and journey", "Responsive experience", "Key sections"],
		technologies: ["Business Analysis", "Information Architecture", "Web Development", "Testing"],
		image: "/images/projects/b2b-corporate-website/01-homepage.webp",
		actionLabel: "View Live Website",
		comingSoonLabel: "Live Website — Coming Soon",
		caseStudy: {
			perspective: "Outside the Business",
			overview:
				"A corporate website designed as a B2B evaluation experience rather than a conventional online brochure.",
			role: "Business Analyst · Information Architect · Web Developer · Tester",
			ownership: "Requirements discovery through development and testing",
			scopeLabel: "Experience scope",
			scope: ["Company Profile", "Capabilities", "Products", "Projects", "Contact"],
			delivery: [
				"Website Audit",
				"B2B Customer Journey",
				"Sitemap",
				"Content Structure",
				"Responsive Development",
				"Testing",
			],
			businessCase: [
				"A B2B corporate website helps prospective customers decide whether a company is a credible and suitable supplier. Visitors need to understand what the business does, what it can deliver, what experience it has, and how to begin a discussion.",
				"Because supplier evaluation can involve technical, purchasing, and management stakeholders, the website also needs content that is easy to find, review, and share throughout a longer buying cycle.",
			],
			challenge:
				"The business information needed to be reorganized around customer questions. Capabilities, products, project evidence, and contact actions had to become part of one clear journey across desktop and mobile.",
			contributionIntro:
				"I owned the website process from understanding the business requirement through building and validating the finished experience.",
			contributions: [
				"Worked with stakeholders to clarify the website objectives, target visitors, information needs, and expected customer actions.",
				"Reviewed the existing website from business, usability, and content perspectives.",
				"Defined the B2B journey from supplier awareness and capability evaluation through internal review and contact.",
				"Designed the sitemap, navigation model, page hierarchy, content groups, and calls to action.",
				"Defined how company positioning, capabilities, products, projects, and trust-building information should connect.",
				"Developed the interface and responsive behavior for desktop, tablet, and mobile.",
				"Tested navigation, links, layouts, content presentation, and responsive breakpoints before release.",
			],
			solutionIntro:
				"The delivered website follows the B2B supplier-evaluation journey and gives each content area a clear business purpose.",
			solutionAreas: [
				{
					title: "Company Positioning",
					description: "Clarifies who the company is, what it specializes in, and why customers should consider it.",
				},
				{
					title: "Business Capabilities",
					description: "Presents technical, manufacturing, quality, and delivery capabilities in a credible structure.",
				},
				{
					title: "Products & Solutions",
					description: "Helps customers identify relevant offerings without navigating the company’s internal structure.",
				},
				{
					title: "Project Experience",
					description: "Uses practical evidence to reinforce capability and supplier confidence.",
				},
				{
					title: "Contact Pathways",
					description: "Connects relevant content to clear actions for information requests and business discussion.",
				},
			],
			businessValue: [
				"Presents company capabilities more clearly and professionally.",
				"Supports the B2B supplier-evaluation process.",
				"Connects products, capabilities, projects, and contact actions.",
				"Creates a consistent experience across desktop and mobile.",
				"Provides a scalable structure for future content and projects.",
			],
			metrics: [
				{ value: "B2B", label: "Supplier evaluation journey" },
				{ value: "Responsive", label: "Desktop, tablet, and mobile" },
				{ value: "End-to-end", label: "Requirements through testing" },
			],
			primaryImage: "/images/projects/b2b-corporate-website/01-homepage.webp",
			primaryImageAlt: "Placeholder for the completed B2B corporate website homepage.",
			primaryCaption: "Homepage and primary business positioning",
			evidence: [
				{
					title: "Sitemap & Customer Journey",
					caption: "Information architecture aligned with the B2B supplier-evaluation process.",
					image: "/images/projects/b2b-corporate-website/02-sitemap-journey.webp",
					imageAlt: "Placeholder for the sitemap and B2B customer journey.",
					featured: true,
				},
				{
					title: "Responsive Experience",
					caption: "Desktop and mobile interfaces using one consistent content hierarchy.",
					image: "/images/projects/b2b-corporate-website/03-responsive.webp",
					imageAlt: "Placeholder for desktop and mobile website screens.",
				},
				{
					title: "Key Website Sections",
					caption: "Capabilities, products, project evidence, and contact calls to action.",
					image: "/images/projects/b2b-corporate-website/04-key-sections.webp",
					imageAlt: "Placeholder for key website sections.",
				},
			],
			visualVariant: ProjectVisualVariant.Website,
			reverse: true,
		},
	},
	{
		id: "enterprise-system",
		title: "Project & Operations Management System",
		category: "Business Analysis · Solution Design · QA · Implementation",
		description:
			"A cross-functional system for businesses that manufacture products and deliver them through project-based or site-based operations.",
		context:
			"The business needed one operating model connecting project control, procurement, warehouse, production, site execution, and financial tracking.",
		problem:
			"Departments used separate data, responsibilities, and handovers, limiting visibility into project progress, materials, production, site delivery, cash flow, and costs.",
		contributions: [
			"Operational discovery and pain-point analysis",
			"As-Is and To-Be process design",
			"Functional requirements and business rules",
			"BRD and FRS preparation",
			"Database and scalability contribution",
			"Functional and data testing",
			"Demonstration and deployment",
		],
		solution:
			"A project-centered management system connecting six business functions within one traceable operational workflow.",
		evidence: [
			"System overview",
			"Process architecture",
			"Operational screens",
			"Management visibility",
		],
		technologies: ["Business Analysis", "Solution Design", "Quality Assurance", "Implementation"],
		image: "/images/projects/project-operations-system/01-system-overview.webp",
		actionLabel: "Watch System Demo",
		comingSoonLabel: "System Demo — Coming Soon",
		caseStudy: {
			perspective: "Inside the Business",
			overview:
				"A project-centered operating system for manufacturing businesses that also manage delivery and execution at project sites.",
			role: "Business Analyst · Solution Designer · QA · Implementation",
			teamSize: "3 members",
			ownership: "Requirements discovery through deployment",
			scopeLabel: "Business scope",
			scope: [
				"Project Control",
				"Procurement",
				"Warehouse",
				"Production",
				"Site Operations",
				"Finance",
			],
			delivery: [
				"Discovery",
				"Pain-point Analysis",
				"Process Design",
				"BRD / FRS",
				"Testing",
				"Implementation",
			],
			businessCase: [
				"Project-based manufacturing requires more than production control. One project can involve material planning, purchasing, inventory movement, manufacturing, finished-goods control, site delivery, execution progress, cash flow, costs, receivables, and payables.",
				"When departments manage these activities through separate spreadsheets, documents, and informal handovers, management cannot see one reliable view of project status or operational dependencies.",
			],
			challenge:
				"The primary challenge was not simply building screens. The actual operating processes had to be discovered, clarified, and standardized before information, materials, responsibilities, and approvals could be translated into one system.",
			contributionIntro:
				"Within a three-member delivery team, I owned the business analysis and solution definition from initial discovery through testing and deployment.",
			contributions: [
				"Worked directly with stakeholders to understand real daily operations and department handovers.",
				"Identified pain points, duplicated work, disconnected data, and unclear responsibilities.",
				"Documented current-state processes and designed standardized future-state workflows.",
				"Defined scope, functional requirements, business rules, statuses, approvals, and data relationships.",
				"Designed system flows across project management, procurement, warehouse, production, site operations, and finance.",
				"Prepared BRD and FRS documents for stakeholder confirmation and developer implementation.",
				"Contributed to database structure and scalability decisions.",
				"Created test scenarios and performed functional and data validation before deployment.",
				"Conducted demonstrations, prepared user guidance, and participated directly in implementation.",
			],
			solutionIntro:
				"The solution connects six business functions around the project lifecycle and creates one traceable operating flow.",
			solutionAreas: [
				{
					title: "Project Control",
					description: "Project information, progress, finished-goods requirements, delivery status, and overall visibility.",
				},
				{
					title: "Procurement",
					description: "Purchase requests, supplier quotations, purchase orders, purchasing progress, and material demand.",
				},
				{
					title: "Warehouse",
					description: "Material receiving, inventory, issuing, transfers, finished-goods receipt, and project delivery.",
				},
				{
					title: "Production",
					description: "Production planning, reporting, finished and rejected quantities, and material consumption.",
				},
				{
					title: "Site Operations",
					description: "Material and finished-goods delivery, execution progress, and project completion status.",
				},
				{
					title: "Finance",
					description: "Cash inflow and outflow, project expenses, purchasing costs, receivables, payables, and budget visibility.",
				},
			],
			businessValue: [
				"Standardizes cross-functional workflows and approval points.",
				"Clarifies responsibilities between departments.",
				"Improves material and finished-goods traceability.",
				"Connects production activity with project demand.",
				"Improves visibility into project progress, costs, and operational dependencies.",
				"Reduces reliance on disconnected spreadsheets and manual handovers.",
			],
			metrics: [
				{ value: "6", label: "Connected business functions" },
				{ value: "3", label: "Delivery team members" },
				{ value: "End-to-end", label: "Discovery through deployment" },
			],
			primaryImage: "/images/projects/project-operations-system/01-system-overview.webp",
			primaryImageAlt: "Placeholder for the project and operations management system overview.",
			primaryCaption: "Connected project and operational visibility",
			evidence: [
				{
					title: "Process Architecture",
					caption: "Project, procurement, warehouse, production, site operations, and finance in one flow.",
					image: "/images/projects/project-operations-system/02-process-architecture.webp",
					imageAlt: "Placeholder for the cross-functional process architecture.",
					featured: true,
				},
				{
					title: "Operational Screens",
					caption: "Representative project, purchasing, warehouse, and production interfaces.",
					image: "/images/projects/project-operations-system/03-operational-screens.webp",
					imageAlt: "Placeholder for operational system screens.",
				},
				{
					title: "Management Visibility",
					caption: "Project progress, material status, production, budget, cost, and financial tracking.",
					image: "/images/projects/project-operations-system/04-management-visibility.webp",
					imageAlt: "Placeholder for management dashboards and reports.",
				},
			],
			visualVariant: ProjectVisualVariant.System,
		},
	},
];
