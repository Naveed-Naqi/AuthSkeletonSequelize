import * as Yup from "yup";

export const data = [
  { name: "email", label: "Email", type: "text" },
  { name: "firstName", label: "First Name", type: "text" },
  { name: "lastName", label: "Last Name", type: "text" },
];

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
});

export const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
};
