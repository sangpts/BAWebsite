export interface Capability {
	title: string;
	description: string;
}

export interface Experience {
	company: string;
	role: string;
	period: string;
	summary: string;
	highlights: string[];
	tags: string[];
}

export enum ProjectVisualVariant {
	System = "system",
	Website = "website",
}

export interface ProjectMetric {
	value: string;
	label: string;
}

export interface ProjectEvidence {
	title: string;
	caption: string;
	image: string;
	imageAlt: string;
	featured?: boolean;
}

export interface ProjectSolutionArea {
	title: string;
	description: string;
}

export interface ProjectCaseStudy {
	perspective: string;
	overview: string;
	role: string;
	teamSize?: string;
	ownership: string;
	scopeLabel: string;
	scope: string[];
	delivery: string[];
	businessCase: string[];
	challenge: string;
	contributionIntro: string;
	contributions: string[];
	solutionIntro: string;
	solutionAreas: ProjectSolutionArea[];
	businessValue: string[];
	metrics: ProjectMetric[];
	primaryImage: string;
	primaryImageAlt: string;
	primaryCaption: string;
	evidence: ProjectEvidence[];
	visualVariant: ProjectVisualVariant;
	reverse?: boolean;
}

export interface Project {
	id: string;
	title: string;
	category: string;
	description: string;
	context: string;
	problem: string;
	contributions: string[];
	solution: string;
	evidence: string[];
	technologies: string[];
	image: string;
	actionLabel: string;
	actionUrl?: string;
	comingSoonLabel: string;
	caseStudy: ProjectCaseStudy;
}
