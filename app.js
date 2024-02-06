import dotenv from "dotenv";
import express from "express";
import "./src/database";
import homeRouter from "./src/routes/homeRoutes";
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
  }

  routes() {
    this.app.use("/", homeRouter);
    this.app.use("/users", userRouter);
  }
}

export default new App().app;
