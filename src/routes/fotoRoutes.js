import express from "express";
import fotoController from "../controllers/FotoController";
import loginRequired from "../middlewares/loginRequired";
const router = express.Router();

router.post("/", loginRequired, fotoController.store);

export default router;
