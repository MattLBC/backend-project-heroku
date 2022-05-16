process.env.NODE_END = "test";
const seed = require("../db/seeds/seed");
const db = require("../db/connection");
const data = require("../db/data/test-data/index");
const app = require("../app");
const request = require("supertest");

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return db.end();
});

describe("Incorrect paths", () => {
  test("Status 404, responds with route not found", () => {
    return request(app)
      .get("/api/banana")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Route not found");
      });
  });
});

describe("GET api/categories", () => {
  test("Status 200 - responds with arry of categories objects, each with slug and description properties", () => {
    return request(app)
      .get("/api/categories")
      .expect(200)
      .then(({ body }) => {
        expect(body).toBeInstanceOf(Object);
        expect(body.categories).toBeInstanceOf(Array);
        body.categories.forEach((category) => {
          expect.objectContaining({
            slug: expect.any(String),
            description: expect.any(String),
          });
        });
      });
  });
});

describe("GET api/reviews/review_id", () => {
  test("Status 200 - responds with review object with correct properties", () => {
    return request(app)
      .get("/api/reviews/3")
      .expect(200)
      .then(({ body: { review } }) => {
        expect.objectContaining({
          review_id: expect.any(Number),
          title: expect.any(String),
          review_body: expect.any(String),
          designer: expect.any(String),
          review_img_url: expect.any(String),
          votes: expect.any(Number),
          category: expect.any(String),
          owner: expect.any(String),
          created_at: expect.any(String),
        });
      });
  });
  test("Status 404 - no review of that number", () => {
    return request(app)
      .get("/api/reviews/9999")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not found");
      });
  });
  test("Status 400 - Bad request", () => {
    return request(app)
      .get("/api/reviews/banana")
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("Bad request");
      });
  });
});

describe("PATCH api/reviews/:review_id", () => {
  test("Status 200 - Responds with review and updated vote count", () => {
    const bodyToSend = { inc_votes: 15 };
    return request(app)
      .patch("/api/reviews/3")
      .send(bodyToSend)
      .expect(201)
      .then(({ body : { review } }) => {
        expect.objectContaining({
            review_id: expect.any(Number),
            title: expect.any(String),
            review_body: expect.any(String),
            designer: expect.any(String),
            review_img_url: expect.any(String),
            votes: expect.any(Number),
            category: expect.any(String),
            owner: expect.any(String),
            created_at: expect.any(String),
          });
        expect(review.votes).toBe(20)
      });
  });
  test("Status 404 - no review of that number", () => {
    const bodyToSend = { inc_votes: 15 };
    return request(app)
      .patch("/api/reviews/9999")
      .send(bodyToSend)
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Not found");
      });
  });
  test("Status 400 - not a number passed as review_id", () => {
    const bodyToSend = { inc_votes: 15 };
    return request(app)
      .patch("/api/reviews/banana")
      .send(bodyToSend)
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("Bad request");
      });
  });
  test("Status 400 - not a number passed as review_id", () => {
    const bodyToSend = { inc_votes: "banana" };
    return request(app)
      .patch("/api/reviews/3")
      .send(bodyToSend)
      .expect(400)
      .then(({ body }) => {
        expect(body.msg).toBe("Bad request");
      });
  });
});
