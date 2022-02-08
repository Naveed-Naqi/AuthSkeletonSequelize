import * as Yup from "yup";

export const data = [
  { name: "email", label: "Email", type: "text" },

  {
    name: "newPassword1",
    label: "Password",
    type: "password",
  },
  {
    name: "newPassword2",
    label: "Confirm Password",
    type: "password",
  },
];

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  newPassword1: Yup.string()
    .min(2, "Too Short! ")
    .max(50, "Too Long! ")
    .required("Required")
    .required("Required"),
  newPassword2: Yup.string()
    .oneOf([Yup.ref("newPassword1"), null], "Passwords must match")
    .required("Required"),
});

export const initialValues = [
  {
    email: "",
    newPassword1: "",
    newPassword2: "",
  },
];
