import Fastify from "fastify";
import DocumentRouter from "routes/documents/";
import * as serveStatic from "serve-static";
import * as path from "path";
import middie from "@fastify/middie";
import { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

async function build(opts = {}) {
  const app = Fastify(opts).withTypeProvider<TypeBoxTypeProvider>();

  await app.register(middie);
  app.use("/storages/static", serveStatic(path.join("/storages/static")));

  await app.register(DocumentRouter, { prefix: "/api/v1" });

  return app;
}

export default build;
