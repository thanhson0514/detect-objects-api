import { Type, Static } from "@sinclair/typebox";

export const Camera = Type.Object({
  image: Type.String(),
  filename: Type.String(),
});

export type CameraType = Static<typeof Camera>;
