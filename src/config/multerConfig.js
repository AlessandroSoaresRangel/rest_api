import multer from "multer";
import { extname, resolve } from "path";

const random = () => Math.floor(Math.random() * 10000 + 10000);
export default {
  storage: multer.diskStorage({
    fileFilter: (req, file, cb) => {
      if (file.mimetype != "image/png" || file.mimetype != "image/jpeg") {
        cb(new multer.MulterError("Arquivo precisa ser jpg ou png"));
      }
      cb(null, true);
    },
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
