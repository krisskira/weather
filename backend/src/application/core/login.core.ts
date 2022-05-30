import { sign } from "jsonwebtoken";
import { AuthRepository } from "../repositories/auth.repository";

export const LoginCore = async (
  username: string,
  password: string,
  secret: string
): Promise<string> => {
  const { id, fullname } = await AuthRepository.login(username, password);
  return sign({ id, fullname }, secret, { expiresIn: "1h" });
};
