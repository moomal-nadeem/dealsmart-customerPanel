import * as Yup from "yup";

export const signup = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter  Name "),
  email: Yup.string().email().required("Please Enter  Email "),
  pno: Yup.string().required("Please enter UAE mobile number"),
  cnic: Yup.string().required("Please enter  CNIC number"),
  password: Yup.string().min(8).max(25).required("Please Enter  Password "),
  img: Yup.string().required("Select .jpeg or .jpg file "),
});
