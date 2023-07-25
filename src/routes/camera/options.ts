import { RouteShorthandOptions } from "fastify";
import uploadSingle from "../../utils/upload";

export const optCameraUpload: RouteShorthandOptions = {
  schema: {
    response: {
      200: {
        type: "object",
        properties: {
          title: "string",
        },
      },
    },
  },
  preHandler: uploadSingle.single("image"),
};
