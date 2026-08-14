import { type Db, MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const databaseName = process.env.MONGODB_DB ?? "phung_tan_sang_portfolio";

declare global {
	var portfolioMongoClientPromise: Promise<MongoClient> | undefined;
}

export function isMongoConfigured() {
	return Boolean(uri);
}

export async function getPortfolioDatabase(): Promise<Db> {
	if (!uri) throw new Error("MONGODB_URI is not configured.");
	if (!global.portfolioMongoClientPromise)
		global.portfolioMongoClientPromise = new MongoClient(uri).connect();
	const client = await global.portfolioMongoClientPromise;
	return client.db(databaseName);
}
