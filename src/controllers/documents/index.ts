import { FastifyRequest, FastifyReply } from "fastify";
import { iGetAllDocument } from "./types";
import { ResponseStatus } from "constants/";
import * as fs from "fs/promises";
import * as path from "path";

export const getAllDocuments = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const rawData = await fs.readFile(
    path.resolve("src", "data", "list-documents.json"),
    {
      encoding: "utf-8",
    }
  );

  const data = JSON.parse(rawData);
    console.log(data);
  return reply.status(200).header("Content-Type", "application/json").send({
    data: data,
    success: ResponseStatus.SUCCESS,
  });
};

function readFileAsync() {}
