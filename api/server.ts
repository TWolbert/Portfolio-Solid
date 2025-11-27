import { redis } from "bun";
import { Elysia, file } from "elysia";
import { resolve } from "path";
import { readFile } from "fs/promises";
import { InitialiseDB } from "./database";

if (!process.env.MYSQL_URL) {
  throw new Error("MYSQL_URL not set");
}

if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL not set");
} else {
  console.log(process.env.REDIS_URL);
}

await InitialiseDB();

const root = resolve(process.cwd(), "api/public");
const isDev = process.env.NODE_ENV !== "production";

// In production, load the SSR module
let renderFunction: ((url: string) => Promise<string>) | null = null;

if (!isDev) {
  try {
    const serverModule = await import("./dist/server/entry-server.js");
    renderFunction = serverModule.render;
  } catch (e) {
    console.warn(
      "SSR module not found. Run 'vite build --ssr src/entry-server.tsx' first.",
    );
  }
}

const app = new Elysia();

app
  .get("/", async ({ request }) => await serveSPA(new URL(request.url).pathname))
  .get("*", async ({ path, request }: { path: string; request: Request }) =>
    !path.includes(".") && !path.startsWith("/api")
      ? await serveSPA(new URL(request.url).pathname)
      : file(`${root}${path}`),
  )
  .post("/api/contact", async (ctx) => {
    return {
      message: "Your message has been received!",
    };
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

async function serveSPA(url: string) {
  const indexPath = resolve(root, "index.html");
  let template = await readFile(indexPath, "utf-8");

  // In production with SSR enabled, render the app
  if (!isDev && renderFunction) {
    try {
      const appHtml = await renderFunction(url);
      template = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`,
      );

      // Replace the client entry point
      template = template.replace(
        '/src/index.tsx',
        '/assets/index.js',
      );
    } catch (e) {
      console.error("SSR error:", e);
    }
  }

  return new Response(template, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
