import * as Yup from "yup";

export const login = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email "),
  password: Yup.string().min(8).max(25).required("Please Enter Your Password "),
});
