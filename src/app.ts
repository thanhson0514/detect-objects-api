import Fastify from "fastify";

async function build(opts = {}) {
  const app = Fastify(opts);

  app.get("/", async function (request, reply) {
    return { message: "Hello Wolrd" };
  });

  return app;
}

export default build;
