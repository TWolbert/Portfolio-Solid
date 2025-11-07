import { SQL } from "bun";

const mysql = new SQL(process.env.MYSQL_URL!);

export async function InitialiseDB() {
  const mysqlResults = await mysql`SELECT 1`;
  console.log(mysqlResults);
}
