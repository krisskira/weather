import { User } from "../../../application/models/user";
import { hashSync } from "bcrypt";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<User>({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    set: (value: string) => hashSync(value, 10),
  },
});

export const UserModel = mongoose.model<User>("User", UserSchema, "users");