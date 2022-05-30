import * as Yup from "yup";
import {Login as LoginEntity} from '../entities/login'
export const LoginFormValidationSchema = Yup.object({
  username: Yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
