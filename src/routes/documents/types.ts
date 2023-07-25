import { Static, Type, TSchema, TString } from "@sinclair/typebox";

export const Documents = Type.Object({
  data: Type.Array(
    Type.Object({
      title: Type.String(),
      imgUrl: Type.String(),
      category: Type.String(),
    })
  ),
  success: Type.Boolean(),
});

export type DocumentType = Static<typeof Documents>;
