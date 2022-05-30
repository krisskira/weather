import express from "express";
import { Controller } from "./server.interface";

export class Server {
  private readonly PORT: number | string;
  app = express();

  constructor(port: number | string, controllers: Controller[]) {
    this.PORT = port;
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static("public"));
    controllers.forEach((controller) =>
      this.app.use(controller.path, controller)
    );
  }

  public start() {
    this.app.listen(this.PORT, () => {
      console.log(`Server is running on port ${this.PORT}`);
    });
  }
}
