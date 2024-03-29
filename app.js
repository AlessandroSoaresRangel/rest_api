import dotenv from "dotenv";
import express from "express";
import { resolve } from "path";
import "./src/database";
import alunoRouter from "./src/routes/alunoRoutes";
import fotoRoutes from "./src/routes/fotoRoutes";
import tokenRouter from "./src/routes/tokenRoutes";
import userRouter from "./src/routes/userRoutes";
dotenv.config();
class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, "uploads")));
  }

  routes() {
    this.app.use("/users", userRouter);
    this.app.use("/token", tokenRouter);
    this.app.use("/alunos", alunoRouter);
    this.app.use("/fotos", fotoRoutes);
  }
}

export default new App().app;
