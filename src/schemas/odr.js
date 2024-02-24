import * as Yup from "yup";

export const odr = Yup.object({
  qun: Yup.string().required("Pleas Enter Product Quanity"),
});
