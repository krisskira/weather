import { compare } from "bcrypt";
import { decode, JwtPayload, verify } from "jsonwebtoken";
import { UserModel } from "../../infraestructure/database";
import { User } from "../models/user";

export class AuthRepository {
  static async signup(user: User): Promise<Omit<User, "password">> {
    const userModel = await UserModel.findOne({ username: user.username });
    if (!!userModel) throw new Error("The user exists");

    const _user = await new UserModel({
      fullname: user.fullname,
      username: user.username,
      password: user.password,
    }).save();

    return {
      id: _user._id.toString(),
      fullname: user.fullname,
      username: user.username,
    };
  }

  static async login(
    username: string,
    password: string
  ): Promise<Omit<User, "password">> {
    const user = await UserModel.findOne({ username });
    if (!user) throw new Error("The user does not exist");
    const isValid = await compare(password, user.password);
    if (!isValid) throw new Error("The password is incorrect");
    return {
      id: user._id.toString(),
      fullname: user.fullname,
      username: user.username,
    };
  }

  static async getUser(
    token: string,
    secret: string
  ): Promise<Omit<User, "password">> {
    const _token = verify(token.replace(/Bearer /i, ""), secret);
    console.log(">>> AuthRepository: ", _token);
    if (!_token) throw new Error("The token is invalid");

    const { exp = 0, id } = _token as JwtPayload;
    const now = new Date().getTime() / 1000;
    if (exp < now) throw new Error("The token has expired");

    const user = await UserModel.findById(id);
    if (!user) throw new Error("The user does not exist");

    return {
      id: user._id.toString(),
      fullname: user.fullname,
      username: user.username,
    };
  }
}
