import { sign } from "jsonwebtoken";
import { AuthRepository } from "../repositories/auth.repository";

export const SignupCore = async (
  fullname: string,
  username: string,
  password: string,
  secret: string
): Promise<string> => {
  const payload = await AuthRepository.signup({ fullname, username, password });
  return sign(
    { id: payload.id, fullname: payload.fullname },
    secret,
    { expiresIn: "1h" }
  );
};
