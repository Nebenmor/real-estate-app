import request from "supertest";
import app from "../app";
import { pool } from "../config/database"; // ✅ fixed import

afterAll(async () => {
  await pool.end(); // close DB connection after all tests
});

describe("GET /api/properties", () => {
  it("should return all properties", async () => {
    const res = await request(app).get("/api/properties");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /api/properties/:id", () => {
  it("should return a single property by ID", async () => {
    const res = await request(app).get("/api/properties/1");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("should return 404 if property not found", async () => {
    const res = await request(app).get("/api/properties/99999");
    expect(res.statusCode).toBe(404);
  });
});
