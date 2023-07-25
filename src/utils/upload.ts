import multer from "fastify-multer";
import * as path from "path";
import * as crypto from "crypto";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("src/storages/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, crypto.randomBytes(10).toString("hex") + file.filename);
  },
});

const upload = multer({ storage: storage });
export default upload;
