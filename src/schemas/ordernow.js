import * as Yup from "yup";

export const ordernow = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter  Name "),
  pno: Yup.string().required("Enter UAE Phone number"),
  emi: Yup.string().required("Please select an option"),
  address: Yup.string().required("Enter Address"),
});
