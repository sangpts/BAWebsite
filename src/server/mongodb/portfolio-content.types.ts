import type { ObjectId } from "mongodb";

export type PortfolioContentType = "site" | "profile" | "experience" | "project" | "cv";
export type PublicationStatus = "draft" | "published";

export interface PortfolioContentDocument<TData = Record<string, unknown>> {
	_id?: ObjectId;
	type: PortfolioContentType;
	slug: string;
	status: PublicationStatus;
	order: number;
	data: TData;
	createdAt: Date;
	updatedAt: Date;
}

export type PortfolioContentInput<TData> = Omit<
	PortfolioContentDocument<TData>,
	"_id" | "createdAt" | "updatedAt"
>;

export interface SiteContentData {
	name: string;
	role: string;
	email: string;
	phone: string;
	linkedin: string;
	cv: string;
	cvAvailable: boolean;
	location: string;
	navigation: Array<{ label: string; href: string }>;
	seo: { title: string; description: string };
	footer: { copyrightName: string; tagline: string };
}

export interface ProfileContentData {
	hero: { eyebrow: string; headline: string; body: string };
	workApproach: Array<{ title: string; description: string }>;
	capabilities: Array<{ title: string; description: string }>;
	about: { heading: string; paragraphs: string[] };
	selectedProjectSlugs: string[];
}

export interface CvContentData {
	summary: string;
	education: { period: string; institution: string; degree: string };
	skillGroups: Array<{ title: string; items: string[] }>;
	otherActivities: string[];
}
