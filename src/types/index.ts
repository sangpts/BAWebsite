export type Capability = { title: string; description: string };
export type Experience = {
	company: string;
	role: string;
	period: string;
	summary: string;
	highlights: string[];
	tags: string[];
};
export type Project = {
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
};
