import * as yup from "yup";

export const SignupFormValidationSchema = yup.object({
  fullname: yup
    .string()
    .min(3, "Fullname should be of minimum 3 characters length")
    .max(50, "Fullname should be of maximum 50 characters length")
    .required("Fullname is required"),
  username: yup
    .string()
    .email("Enter a valid email")
    .max(50, "Email should be of maximum 50 characters length")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});
