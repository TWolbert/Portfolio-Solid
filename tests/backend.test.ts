import { describe, expect, it } from "bun:test";
import { app } from "../api/server";

describe("Elysia Backend", () => {
  it("Returns server info on /api route", async () => {
    const response = await app
      .handle(new Request("http://localhost/api"))
      .then((res) => res.text());
    expect(response).toBe(
      "Teun Wolbert Portfolio API, written in ElysiaJS and BunJS.",
    );
  });

  it("Returns a NOT_FOUND when hitting below /api", async () => {
    const response = await app
      .handle(new Request("http://localhost"))
      .then((res) => res.text());
    expect(response).toBe("NOT_FOUND");
  });
});
