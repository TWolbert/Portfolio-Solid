import { redis } from "bun";
import { Elysia, file } from "elysia";
import { resolve } from "path";
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

const app = new Elysia();

app
  .get("/", async () => await serveSPA())
  .get("*", async ({ path }: { path: string }) =>
    !path.includes(".") ? await serveSPA() : file(`${root}${path}`),
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

const index = await file(`${root}/index.html`);

async function serveSPA() {
  return index;
}
