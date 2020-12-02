import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .strict(true)
    .trim("Email cannot include leading and trailing spaces")
    .required("Email is required"),
  password: yup
    .string()
    .strict(true)
    .trim("Password cannot include leading and trailing spaces")
    .required("Password is required"),
});

export default validationSchema;
