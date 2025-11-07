import { redis } from "bun";
import { Elysia, file } from "elysia";
import fs from "fs/promises";
import { join, resolve } from "path";
import { InitialiseDB } from "./database";

if (!process.env.MYSQL_URL) {
  throw new Error("MYSQL_URL not set");
}

if (!process.env.REDIS_URL) {
  throw new Error("REDIS_URL not set");
}

await InitialiseDB();

const root = resolve(process.cwd(), "api/public");

const app = new Elysia();

app
  .get("/", async () => await serveSPA())
  .get("*", async ({ path }: { path: string }) =>
    !path.includes(".") ? await serveSPA() : file(`${root}${path}`),
  )
  .get("/api/cache", () => {
    redis.set("test", new Date().toString());
    return redis.get("test");
  });

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export { app };

const index = await file(`${root}/index.html`);

async function serveSPA() {
  return index;
}
