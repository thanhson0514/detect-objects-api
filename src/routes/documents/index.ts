import {
  FastifyInstance,
  FastifyHttpOptions,
  HookHandlerDoneFunction,
} from "fastify";
import { optGetAllDocument } from "./options";
import { getAllDocuments } from "controllers/documents/";
import { DocumentType } from "./types";

const router = (
  fastify: FastifyInstance,
  option: FastifyHttpOptions<any>,
  done: HookHandlerDoneFunction
) => {
  fastify.get<{ Reply: DocumentType }>(
    "/documents",
    optGetAllDocument,
    getAllDocuments
  );

  done();

  return fastify;
};

export default router;
