import { ObjectId } from "mongodb";
import { getPortfolioDatabase } from "./client";
import type {
	PortfolioContentDocument,
	PortfolioContentInput,
	PortfolioContentType,
} from "./portfolio-content.types";

const COLLECTION = "portfolio_content";

async function collection() {
	const database = await getPortfolioDatabase();
	const content = database.collection<PortfolioContentDocument>(COLLECTION);
	await content.createIndex({ type: 1, slug: 1 }, { unique: true });
	await content.createIndex({ type: 1, status: 1, order: 1 });
	return content;
}

export async function listPublishedContent<TData extends Record<string, unknown>>(
	type: PortfolioContentType,
) {
	const content = await collection();
	return content.find({ type, status: "published" }).sort({ order: 1 }).toArray() as Promise<
		Array<PortfolioContentDocument<TData>>
	>;
}

export async function listAllContent(type?: PortfolioContentType) {
	const content = await collection();
	return content
		.find(type ? { type } : {})
		.sort({ type: 1, order: 1 })
		.toArray();
}

export async function upsertContent<TData extends Record<string, unknown>>(
	input: PortfolioContentInput<TData>,
) {
	const content = await collection();
	const now = new Date();
	await content.updateOne(
		{ type: input.type, slug: input.slug },
		{ $set: { ...input, updatedAt: now }, $setOnInsert: { createdAt: now } },
		{ upsert: true },
	);
	return content.findOne({ type: input.type, slug: input.slug });
}

export async function deleteContent(id: string) {
	if (!ObjectId.isValid(id)) throw new Error("Invalid content id.");
	const content = await collection();
	return content.deleteOne({ _id: new ObjectId(id) });
}
