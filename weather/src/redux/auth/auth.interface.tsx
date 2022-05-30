import { User } from "../../application/entities";

export interface AuthState {
  token: string | null;
  user: User | null;
}
