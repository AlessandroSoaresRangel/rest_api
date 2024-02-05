import dotenv from "dotenv";
import express from "express";
import "./src/database";
import homeRouter from "./src/routes/homeRoutes";
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
  }
}

export default new App().app;
