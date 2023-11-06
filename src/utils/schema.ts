import { object, string } from "yup";
const getCharacterValidationError = (str: string | number) => {
  return `Your password must have at least 1 ${str} character`;
};
export const singupSchema = object({
  name: string().required().min(4),
  photo: string().required(),
  email: string()
    .lowercase()
    .required()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid Email Format"
    ),
  password: string()
    .required("Please enter a password")
    .min(8, "Password must have at least 8 characters")
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase"))
    .matches(
      /[!@#$%^&*()_+{}[\]:;<>,.?~]/,
      getCharacterValidationError("special")
    ),
});
