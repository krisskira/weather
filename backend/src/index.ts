import doEnv from "dotenv";
import { useDatabaseFactory } from "./infraestructure/database";
import { Server } from "./infraestructure/server";
import {
  LoginController,
  SignupController,
  AddFavoritePlaceController,
  GetFavoritePlaceController,
} from "./infraestructure/server/controllers";

(async () => {
  doEnv.config();
  const { PORT = 8000, DATABASE_URL = "" } = process.env;
  await useDatabaseFactory(DATABASE_URL);
  const server = new Server(PORT, [
    SignupController,
    LoginController,
    AddFavoritePlaceController,
    GetFavoritePlaceController,
  ]);
  server.start();
})();
