import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string().min(6).required("Please enter Desired Message here"),
  
});