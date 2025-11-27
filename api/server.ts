import { redis } from "bun";
import { Elysia, file, t } from "elysia";
import { cookie } from "@elysiajs/cookie";
import { staticPlugin } from "@elysiajs/static";
import { resolve, dirname } from "path";
import { readFile } from "fs/promises";
import { InitialiseDB, mysql } from "./database";
import { randomBytes } from "crypto";
import { fileURLToPath } from "url";

if (!process.env.MYSQL_URL) {
  throw new Error("MYSQL_URL not set");
}

if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL not set");
} else {
  console.log(process.env.REDIS_URL);
}

await InitialiseDB();

// Helper function to generate session token
function generateSessionToken(): string {
  return randomBytes(32).toString("hex");
}

// Helper function to verify admin session
async function verifyAdminSession(sessionToken: string): Promise<boolean> {
  if (!sessionToken) return false;
  const username = await redis.get(`session:${sessionToken}`);
  return !!username;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = resolve(process.cwd(), "api/public");

const app = new Elysia().use(cookie()).use(
  staticPlugin({
    assets: root,
    prefix: "/",
  }),
);

app
  .get(
    "/",
    async ({ request }) => await serveSPA(new URL(request.url).pathname),
  )
  .get("*", async ({ path, request }: { path: string; request: Request }) => {
    // Let static plugin handle files with extensions
    if (path.includes(".") || path.startsWith("/api")) {
      return;
    }
    // Otherwise serve SPA
    return await serveSPA(new URL(request.url).pathname);
  })
  .post("/api/contact", async ({ request }) => {
    try {
      console.log("Content-Type:", request.headers.get("content-type"));

      const bodyText = await request.text();
      console.log("Body text:", bodyText);

      const data = JSON.parse(bodyText);
      console.log("Parsed data:", data);

      const { full_name, email, message } = data;

      console.log("Contact form submission:", { full_name, email, message });

      // Save to database
      await mysql`INSERT INTO contact_submissions (full_name, email, message) VALUES (${full_name}, ${email}, ${message})`;

      console.log("Contact saved successfully");

      return {
        message: "Your message has been received!",
      };
    } catch (err) {
      console.error("Contact form error:", err);
      return new Response(
        JSON.stringify({ error: "Failed to submit contact form" }),
        {
          status: 500,
        },
      );
    }
  })
  .post("/api/admin/login", async ({ request, cookie }) => {
    const bodyText = await request.text();
    const { username, password } = JSON.parse(bodyText);

    console.log("Login attempt for username:", username);

    // Fetch admin user
    const users =
      await mysql`SELECT * FROM admin_users WHERE username = ${username}`;

    console.log("Users found:", users.length);

    if (users.length === 0) {
      console.log("No user found with username:", username);
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    const user = users[0];
    console.log("User found:", user.username);
    console.log("Password hash from DB:", user.password_hash);

    // Verify password
    const isValid = await Bun.password.verify(password, user.password_hash);

    console.log("Password valid:", isValid);

    if (!isValid) {
      console.log("Password verification failed");
      return new Response(JSON.stringify({ error: "Invalid credentials" }), {
        status: 401,
      });
    }

    console.log("Creating session...");
    // Create session
    const sessionToken = generateSessionToken();
    console.log("Session token generated:", sessionToken);

    try {
      await redis.set(`session:${sessionToken}`, username);
      await redis.expire(`session:${sessionToken}`, 60 * 60 * 24 * 7); // 7 days
      console.log("Session saved to Redis");
    } catch (err) {
      console.error("Redis error:", err);
      return new Response(
        JSON.stringify({ error: "Session creation failed" }),
        {
          status: 500,
        },
      );
    }

    // Set cookie
    console.log("Setting cookie...");
    cookie.session.set({
      value: sessionToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    });

    console.log("Login successful, returning success response");
    return { success: true };
  })
  .post("/api/admin/logout", async ({ cookie }) => {
    const sessionToken = cookie.session.value;

    if (sessionToken) {
      await redis.del(`session:${sessionToken}`);
    }

    cookie.session.remove();

    return { success: true };
  })
  .get("/api/admin/check", async ({ cookie }) => {
    const sessionToken = cookie.session.value;
    const isAuthenticated = sessionToken
      ? await verifyAdminSession(sessionToken)
      : false;

    return { authenticated: isAuthenticated };
  })
  .get("/api/admin/contacts", async ({ cookie }) => {
    console.log("Fetching contacts...");
    const sessionToken = cookie.session.value;
    console.log("Session token:", sessionToken);
    console.log("All cookies:", cookie);

    if (!sessionToken || !(await verifyAdminSession(sessionToken))) {
      console.log("Unauthorized - no valid session");
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    console.log("Session valid, fetching submissions...");
    // Fetch all contact submissions
    const submissions =
      await mysql`SELECT * FROM contact_submissions ORDER BY submitted_at DESC`;

    console.log("Found submissions:", submissions.length);
    console.log("Submissions data:", submissions);

    return { submissions };
  })
  .get("/api/cache", async () => {
    await wait(500);
    redis.set("test", new Date().toString());
    return redis.get("test");
  });

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { app };
const indexPath = resolve(root, "index.html");
const template = await readFile(indexPath, "utf-8");

async function serveSPA(url: string) {
  return new Response(template, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
