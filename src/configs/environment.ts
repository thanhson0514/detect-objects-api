import path from "path";
import dotenv from "dotenv";
import { ENV } from "./types";

interface Config {
  NODE_ENV: string;
  PORT: number;
}

dotenv.config({
  path: path.resolve(
    __dirname,
    "..",
    "..",
    process.env.NODE_ENV === "production" ? ".env" : ".env.dev"
  ),
});

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
