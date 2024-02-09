import express from "express";
import tokenController from "../controllers/TokenController";
const router = express.Router();

router.post("/", tokenController.store);
export default router;
