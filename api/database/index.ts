import { SQL } from "bun";

const mysql = new SQL(process.env.MYSQL_URL!);

export async function InitialiseDB() {
	await mysql`CREATE TABLE IF NOT EXISTS visits(
    visitors BIGINT DEFAULT 0
    )`;

	const visitorsCountRows =
		await mysql`SELECT COUNT(visitors) as count FROM visits;`;

	if (visitorsCountRows[0].count === 0) {
		await mysql`INSERT INTO visits VALUES (0)`;
	}

	const visitorCount = await mysql`SELECT visitors from visits;`;

	console.log(`Visitor count instantiated: '${visitorCount[0].visitors}'`);
}
