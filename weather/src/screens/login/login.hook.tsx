import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Login as LoginEntity } from "../../application/entities";
import { LoginFormValidationSchema } from "../../application/validations";
import { ROUTES } from "../../settings";

export const useLoginScreen = () => {
  const navigation = useNavigate();
  const formik = useFormik<LoginEntity>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginFormValidationSchema,
    onSubmit: (values) => {
      console.log("useLoginScreen", import.meta.env.VITE_BACKEND_URL);
      navigation(ROUTES.dashboard,{
        replace: true,
      })
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
