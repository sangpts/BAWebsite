export const profileContent = {
	hero: {
		eyebrow: "Business Analysis · Systems · Digital Solutions",
		headline: "Turning business needs into practical digital solutions",
	},
	workApproach: [
		{ title: "Understand", description: "Business context, users, and current processes." },
		{
			title: "Analyze",
			description: "Problems, requirements, constraints, and conflicting inputs.",
		},
		{
			title: "Design",
			description: "Workflows, business rules, data needs, and practical solutions.",
		},
		{ title: "Deliver", description: "Validation, implementation, and operational adoption." },
	],
	deliveryApproach: [
		{
			title: "Discovery & Alignment",
			phaseLabel: "AS-IS",
			description: "Understand the current state, stakeholders, and business objectives.",
			output: "Current-State Understanding",
		},
		{
			title: "Requirements Definition",
			phaseLabel: "GAP ANALYSIS",
			description: "Analyze gaps and define clear business and system requirements.",
			output: "Validated Requirements",
		},
		{
			title: "Solution Definition",
			phaseLabel: "TO-BE",
			description: "Design the future-state solution, processes, and system architecture.",
			output: "Functional Specification",
		},
		{
			title: "Validation & Go-Live",
			phaseLabel: "UAT & ADOPTION",
			description: "Validate the solution, ensure readiness, and support successful adoption.",
			output: "Go-Live Readiness",
		},
	],
	domainExperience: {
		eyebrow: "Domain Experience",
		title: "Systems I",
		titleAccent: "Work With",
		intro:
			"I work across connected enterprise, manufacturing, and warehouse platforms, translating operational needs into clear and implementable system requirements.",
		features: [
			"Business Focused",
			"End-to-End Insight",
			"Process Optimization",
			"Data-Driven Decisions",
		],
		items: [
			{
				code: "ERP",
				title: "Enterprise Resource Planning",
				description:
					"Integrated management of finance, purchasing, inventory, production, and cross-functional operations.",
				image: "/images/domains/erp-gold.png",
				imageAlt:
					"ERP illustration connecting sales, purchasing, inventory, production, accounting, and reporting.",
				href: "/projects#enterprise-system",
			},
			{
				code: "MES",
				title: "Manufacturing Execution System",
				description:
					"Real-time production execution, quality coordination, traceability, and shop-floor performance visibility.",
				image: "/images/domains/mes-connected-machining-gold.png",
				imageAlt:
					"MES-connected machining facility with automated equipment, robotic handling, and a live production dashboard.",
				href: "/projects#enterprise-system",
			},
			{
				code: "WMS",
				title: "Warehouse Management System",
				description:
					"Controlled inventory movement and warehouse visibility from receiving and put-away through shipping.",
				image: "/images/domains/wms-warehouse-operations-gold.png",
				imageAlt:
					"WMS illustration showing receiving, put-away, picking, packing, shipping, and inventory visibility.",
				href: "/projects#enterprise-system",
			},
		],
	},
	projectsCta: {
		eyebrow: "Selected Work",
		headline: "See how requirements become working systems.",
		actionLabel: "Explore Projects",
	},
	selectedProjectSlugs: ["corporate-website", "enterprise-system"],
} as const;
