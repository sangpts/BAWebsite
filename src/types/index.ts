import type { LucideIcon } from "lucide-react";

export type LinkItem = { label: string; href: string };
export type Capability = { title: string; description: string; icon: LucideIcon; tone: string };
export type Experience = {
	company: string;
	role: string;
	period: string;
	summary: string;
	tags: string[];
};
export type Project = {
	id: string;
	title: string;
	category: string;
	description: string;
	context: string;
	contributions: string[];
	solution: string;
	technologies: string[];
	image: string;
	actionLabel: string;
	actionUrl?: string;
};
