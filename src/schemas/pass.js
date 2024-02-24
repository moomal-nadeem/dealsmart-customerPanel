import * as Yup from "yup";

export const pass = Yup.object({
  cpass: Yup.string().min(2).max(25).required("Please Enter Current Password "),
  password: Yup.string().required("Please Enter New Password "),
  cnfPass: Yup.string().required("Please Confirm Password"),
  
});
