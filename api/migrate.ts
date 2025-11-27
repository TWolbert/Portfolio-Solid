import { InitialiseDB, mysql } from "./database";

console.log("🔄 Running database migrations...\n");

// Check if we should force recreate admin user
const forceRecreate = process.argv.includes("--force");

if (forceRecreate) {
  console.log("⚠️  Force flag detected - will recreate admin user if exists\n");

  const adminUsername = process.env.ADMIN_USERNAME || "admin";
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (adminPassword) {
    try {
      console.log(`🗑️  Removing existing admin user '${adminUsername}' if exists...`);
      await mysql`DELETE FROM admin_users WHERE username = ${adminUsername}`;
      console.log("✅ Admin user removed\n");
    } catch (err) {
      console.log("ℹ️  Table doesn't exist yet, will be created\n");
    }
  }
}

// Run all migrations
await InitialiseDB();

console.log("\n✅ Database migrations completed successfully!");
console.log("\n📝 Usage:");
console.log("  bun run migrate         - Run migrations (creates tables and admin if not exists)");
console.log("  bun run migrate --force - Force recreate admin user with current .env credentials");

// Optionally close the connection
process.exit(0);
