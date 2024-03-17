import { matchIsValidTel } from "mui-tel-input";
import * as yup from "yup";

export const loginFormValidationschema = yup.object().shape({
  emailId: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup.string().required("Password is required"),
});

// User Form Validation Schmema
export const userFormValidationschema = yup.object().shape({
  userName: yup.string().required("User name is required"),
  roleId: yup.string().required("Role is required"),
  status: yup.string().required("Status is required"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("phone", "Phone number is not valid", (str, context) => {
      const pn = matchIsValidTel(str);
      return pn;
    }),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup.string().required("Password is required"),
});
