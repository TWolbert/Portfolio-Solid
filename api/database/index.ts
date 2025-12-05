import { SQL } from "bun";

const mysql = new SQL(process.env.MYSQL_URL!);

export { mysql };

async function waitForMySQL(maxRetries = 30, delayMs = 1000): Promise<void> {
  for (let i = 0; i < maxRetries; i++) {
    try {
      await mysql`SELECT 1`;
      console.log("✓ MySQL connection established");
      return;
    } catch (error) {
      console.log(error);
      console.log(`Waiting for MySQL... (attempt ${i + 1}/${maxRetries})`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
  throw new Error("Failed to connect to MySQL after maximum retries");
}

export async function InitialiseDB() {
  // Wait for MySQL to be ready
  await waitForMySQL();

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

  // Create admin users table
  await mysql`CREATE TABLE IF NOT EXISTS admin_users(
		id INT AUTO_INCREMENT PRIMARY KEY,
		username VARCHAR(255) UNIQUE NOT NULL,
		password_hash VARCHAR(255) NOT NULL,
		created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	)`;

  // Create contact submissions table
  await mysql`CREATE TABLE IF NOT EXISTS contact_submissions(
		id INT AUTO_INCREMENT PRIMARY KEY,
		full_name VARCHAR(255) NOT NULL,
		email VARCHAR(255) NOT NULL,
		message TEXT NOT NULL,
		submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	)`;

  // Check if admin user exists, if not create it
  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    console.warn("ADMIN_PASSWORD not set in environment variables");
  } else {
    const adminExists =
      await mysql`SELECT COUNT(*) as count FROM admin_users WHERE username = ${adminUsername}`;

    if (adminExists[0].count === 0) {
      // Hash the password
      const passwordHash = await Bun.password.hash(adminPassword);
      await mysql`INSERT INTO admin_users (username, password_hash) VALUES (${adminUsername}, ${passwordHash})`;
      console.log(`Admin user '${adminUsername}' created`);
    }
  }
}
