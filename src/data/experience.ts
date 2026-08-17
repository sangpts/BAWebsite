import type { Experience } from "src/types";

export const experience: Experience[] = [
	{
		company: "APVN Sealing Co., Ltd.",
		role: "ERP & MES Analyst",
		period: "Oct 2025 – Present",
		summary:
			"Business analysis and implementation across ERP, MES, integration, reporting, quality workflows, and internal automation.",
		highlights: [
			"Led business analysis for ERP and MES initiatives, covering As-Is/To-Be processes, requirement sign-off, solution proposals, implementation, and go-live.",
			"Implemented an end-to-end ERP workflow covering customer orders, production orders, packing, finished goods receipt, packing lists, and customer shipments.",
			"Defined BOM-based material planning and stock reservation rules, enabling the system to calculate shortages and generate purchasing demand.",
			"Delivered ERP–MES integration for machining and inspection equipment, synchronizing production orders and production results between both systems.",
			"Implemented inventory transactions and production costing processes, giving Accounting traceable data for receipts, issues, stock balances, and manufacturing costs.",
			"Built SQL-based dashboards for Procurement, Warehouse, and Production to monitor costs, purchasing trends, inventory aging, production orders, and machine status.",
			"Digitized Quality workflows for incoming inspection, finished goods, expiry alerts, calibration, packaging checks, and cross-department 8D approval.",
			"Automated leave and business-trip workflows using Power Apps, Power Automate, SharePoint, email notifications, approvals, and document archiving.",
		],
		tags: [
			"Process Analysis",
			"ERP / MES",
			"System Integration",
			"SQL Dashboards",
			"Power Platform",
			"Go-live",
		],
	},
	{
		company: "SMC Manufacturing (Vietnam) Co., Ltd.",
		role: "IT Business Analyst",
		period: "Dec 2023 – Oct 2025",
		summary:
			"Requirements, system design, integration, validation, and adoption across five business functions.",
		highlights: [
			"Led requirements analysis across Sales, Warehouse, Production, Import–Export, and Accounting, translating operational needs into clear system requirements.",
			"Produced As-Is/To-Be workflows, BRD, FRS, business rules, use cases, and screen and data specifications for ERP development.",
			"Delivered an end-to-end ERP workflow connecting sales orders, inventory, production, shipment, accounting, and costing across five business functions.",
			"Implemented ERP integration with FAST Accounting, aligning operational transactions, inventory movements, accounting records, and costing results.",
			"Delivered a PDA/tablet warehouse application for receiving, issuing, stock transfers, packing, and real-time inventory updates.",
			"Implemented an IoT-based machine monitoring process with automated alerts for machine errors and abnormal operating conditions.",
			"Validated system functions across UI, API, and database layers using Postman and SQL, identifying requirement and data issues before go-live.",
			"Managed requirement changes, defects, priorities, and delivery progress in JIRA through implementation and go-live.",
			"Created user guides and delivered training, enabling business teams to adopt the new ERP workflows after deployment.",
		],
		tags: [
			"Requirements",
			"BRD / FRS",
			"FAST Integration",
			"Warehouse Apps",
			"UAT / API / SQL",
			"Training",
		],
	},
	{
		company: "Reputyze Asia",
		role: "Business Analyst Intern",
		period: "Mar 2023 – Aug 2023",
		summary:
			"Cross-domain solution analysis, functional mapping, documentation, proposals, and customer demonstrations.",
		highlights: [
			"Analyzed existing ERP, LMS, and Travel Booking solutions to understand their functional scope, system behavior, and potential business applications.",
			"Mapped available system functions to practical business processes, user needs, and operational use cases across different domains.",
			"Identified functional gaps and proposed how existing solutions could be adapted to support real business requirements.",
			"Prepared FRS, workflows, and solution proposals for internal review and further development.",
			"Presented system capabilities and solution approaches to prospective customers through product and solution demonstrations.",
			"Collected customer questions and feedback during demonstrations to clarify business needs and improve proposed solutions.",
		],
		tags: [
			"ERP / LMS / Travel",
			"Functional Gaps",
			"FRS",
			"Workflows",
			"Solution Proposals",
			"Demonstrations",
		],
	},
];
