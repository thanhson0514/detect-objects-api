import {
  FastifyInstance,
  FastifyHttpOptions,
  HookHandlerDoneFunction,
} from "fastify";
import uploadSingle from "utils/upload";

const router = (
  fastify: FastifyInstance,
  option: FastifyHttpOptions<any>,
  done: HookHandlerDoneFunction
) => {
  fastify.post("/camera", { preHandler: uploadSingle });

  done();
};

export default router;
