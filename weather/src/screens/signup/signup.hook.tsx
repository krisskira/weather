import { useFormik } from "formik";
import { Signup as SignupEntity } from "../../application/entities";
import { SignupFormValidationSchema } from "../../application/validations";

export const useSignupScreen = () => {
  const formik = useFormik<SignupEntity>({
    initialValues: {
      fullname: "",
      username: "",
      password: "",
    },
    validationSchema: SignupFormValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return {
    formValues: formik.values,
    formErrors: formik.errors,
    onchange: formik.handleChange,
    isLoading: formik.isSubmitting,
    onsubmit: formik.handleSubmit,
  };
};
