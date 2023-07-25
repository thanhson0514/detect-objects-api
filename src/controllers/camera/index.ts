import { FastifyRequest, FastifyReply, RouteGenericInterface } from "fastify";

export const uploadImageCamera = (
  request: FastifyRequest<RouteGenericInterface>,
  reply: FastifyReply
) => {
  try {
    const file = request;
    reply.send({});
  } catch (error) {
    console.log(error);
  }
};
