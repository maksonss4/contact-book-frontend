import * as yup from "yup";

export const schemaCreateUser = yup.object({
  first_name: yup.string().required("Campo obrigatório"),
  last_name: yup.string().required("Campo obrigatório"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Campo obrigatório")
    .transform((value: string, originalValue: string) => {
      return originalValue.toLowerCase();
    }),
  phone_number: yup
    .string()
    .required("Campo obrigatório")
    .length(11, "Exatamente 11 dígitos"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .matches(/(\d)/, "deve conter ao menos 1 número")
    .matches(/[A-Z]/, "deve conter ao menos 1 letra maiúscula"),
  confirm_password: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "Precisa ser igual a senha"),
});

export const schemaLoginUser = yup.object({
  email: yup
    .string()
    .email("Email inválido")
    .required("Campo obrigatório")
    .transform((value: string, originalValue: string) => {
      return originalValue.toLowerCase();
    }),
  password: yup.string().required("Campo obrigatório"),
});

export const schemaUpdateContact = yup.object({
  first_name: yup.string().notRequired(),
  last_name: yup.string().notRequired(),
  email: yup
    .string()
    .email("Email inválido")
    .notRequired()
    .transform((value: string, originalValue: string) => {
      return originalValue.toLowerCase();
    }),
  // phone_number: yup
  //   .string()
  //   .notRequired()
  //   .length(11, "Exatamente 11 dígitos"),
});

export const schemaCreateContact = yup.object({
  first_name: yup.string().required("Campo obrigatório"),
  last_name: yup.string().notRequired(),
  email: yup
    .string()
    .email("Email inválido")
    .required("Campo obrigatório")
    .transform((value: string, originalValue: string) => {
      return originalValue.toLowerCase();
    }),
  phone_number: yup
    .string()
    .required("Campo obrigatório")
    .length(11, "Exatamente 11 dígitos"),
});
