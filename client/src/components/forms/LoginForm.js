import * as Yup from "yup";

export const data = [
  { name: "email", label: "Email", type: "text" },
  { name: "password", label: "Password", type: "password" },
];

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(2, "Too Short! ")
    .max(50, "Too Long! ")
    .required("Required"),
});

export const initialValues = {
  email: "",
  password: "",
};
