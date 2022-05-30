import { Request, Response } from "express";
import { LoginCore } from "../../application/core/login.core";
import { SignupCore } from "../../application/core/signup.core";
import { Favorite } from "../../application/models";
import { AuthRepository } from "../../application/repositories/auth.repository";
import { Controller } from "./server.interface";

export const SignupController: Controller = async (
  request: Request,
  response: Response
) => {
  try {
    const { JWT_SECRET_TOKEN = "some awesome token" } = process.env;
    const { username = "", password = "", fullname = "" } = request.body;
    const token = await SignupCore(
      fullname,
      username,
      password,
      JWT_SECRET_TOKEN
    );
    response.status(200).send(token);
  } catch (error) {
    console.log(">>> SignupController: ", error);
    response.status(404).send("user not found");
  }
};

export const LoginController: Controller = async (
  request: Request,
  response: Response
) => {
  try {
    const { JWT_SECRET_TOKEN = "some awesome token" } = process.env;
    const { username = "", password = "" } = request.body;
    const token = await LoginCore(username, password, JWT_SECRET_TOKEN);
    response.status(200).send(token);
  } catch (error) {
    console.log(">>> LoginController: ", error);
    response.status(404).send("user not found");
  }
};

export const AddFavoritePlaceController: Controller = async (
  request: Request,
  response: Response
) => {
  try {
    const { JWT_SECRET_TOKEN = "some awesome token" } = process.env;

    const user = await AuthRepository.getUser(
      request.headers.authorization ?? "",
      JWT_SECRET_TOKEN
    );
    console.log(">>> AddFavoritePlaceController: ", request.body);
    response.status(200).json({
      id: "put here some favorite id",
    });
  } catch (error) {
    response.status(401).send("unauthorized");
  }
};

export const GetFavoritePlaceController: Controller = async (
  request: Request,
  response: Response
) => {
  try {
    const { JWT_SECRET_TOKEN = "some awesome token" } = process.env;
    const user = await AuthRepository.getUser(
      request.headers.authorization ?? "",
      JWT_SECRET_TOKEN
    );
    console.log(">>> GetFavoritePlaceController: ", user);
    const mock = [
      {
        id: "1",
        city: {
          description: "city description",
          lat: 1,
          lng: 1,
        },
        season: {
          temp: 1,
          alarm: 0,
        },
      },
    ] as Favorite[];
    response.status(200).json(mock);
  } catch (error) {
    console.log(">>> GetFavoritePlaceController: ", error);
    response.status(401).send("unauthorized");
  }
};

SignupController.path = "/signup";
LoginController.path = "/login";
AddFavoritePlaceController.path = "/add-favorite-place";
GetFavoritePlaceController.path = "/get-favorite-place";
