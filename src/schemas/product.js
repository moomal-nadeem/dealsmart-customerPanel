import * as Yup from "yup";

export const product = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter  Name "),
  // total: Yup.string().required("Enter Origenal Price"),
  // off: Yup.string().required("Enter Off on Product"),
  // afterOff: Yup.string().required("Enter Price after Off"),
  // smallDesc: Yup.string().required("Enter main Description"),
  // des: Yup.string().required("Enter Descripton"),
  // cID: Yup.string().required("Enter Product category"),
  img: Yup.string().required("Select .jpeg or .jpg file "),
});
