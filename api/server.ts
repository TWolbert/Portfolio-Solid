import staticPlugin from "@elysiajs/static";
import { redis } from "bun";
import { Elysia, file } from "elysia";
import fs from "fs/promises";
import { join, resolve } from "path";

const root = resolve(process.cwd(), "api/public");

const app = new Elysia();

app

  .get("/", async () => {
    const html = await fs.readFile(join(root, "index.html"), "utf8");
    return new Response(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  })
  .get("*", async ({ path }) => {
    if (!path.includes(".")) {
      const html = await fs.readFile(join(root, "index.html"), "utf8");
      return new Response(html, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    } else {
      const filePath = `${root}${path}`;
      return file(filePath);
    }
  })
  .get("/api/cache", () => {
    redis.set("test", new Date().toString());
    return redis.get("test");
  })
  .use(
    staticPlugin({
      assets: root, // filesystem directory
      prefix: "/", // URL mount point
    }),
  );

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export { app };
