import { redis } from "bun";
import { Elysia } from "elysia";

const app = new Elysia({ prefix: "/api" });

app.get("/", "Teun Wolbert Portfolio API, written in ElysiaJS and BunJS.")
    .get("/cache", () => {
        redis.set("test", new Date().toString());
        return redis.get("test");
    })
    // Catch all/not found route
    .get("*", (ctx) => {
        ctx.set.status = 404;
        return "Not Found";
    });

app.listen(3000);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
