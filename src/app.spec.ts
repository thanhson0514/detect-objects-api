import { FastifyInstance } from "fastify";
import config from "./configs/environment";
import app from "./app";

let fastify: FastifyInstance;

beforeAll(async () => {
  fastify = await app({});
});

describe("Testing run server", () => {
  const PORT = config.PORT;
  it(`Listening on port ${PORT}`, async () => {
    await fastify.ready();
    const port = fastify.server.address()?.toString().split(":").pop();
    expect(port).toEqual(PORT);
  });
});
