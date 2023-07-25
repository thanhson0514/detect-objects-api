import { Documents } from "./types";

export const optGetAllDocument = {
  schema: {
    response: {
      200: Documents,
    },
  },
};

// export const optGetDocumentDetail = {
//   method: "GET",
//   url: "/documents/:id",
//   schema: {
//     params: {
//       type: "object",
//       properties: {
//         id: {
//           type: "number",
//           description: "document id",
//         },
//       },
//     },
//   },
//   response: {
//     200: Document,
//   },
// };
