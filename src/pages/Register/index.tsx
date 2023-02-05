import { Link } from "react-router-dom";
import { ContainerForm } from "../../components/ContainerForm";
import { Header } from "../../components/Header";
import { ContainerRegister, FormStyled } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaCreateUser } from "../../schemas";
import { IDataRegistration, UserContext } from "../../Provider/UserProvider";
import { useContext } from "react";

export function Register() {
  const { createUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataRegistration>({
    resolver: yupResolver(schemaCreateUser),
  });

  return (
    <ContainerRegister>
      <Header />

      <ContainerForm>
        <FormStyled onSubmit={handleSubmit(createUser)}>
          <h2>Cadastre-se</h2>

          <div>
            <label htmlFor="first_name">
              Nome:
              {errors.first_name && <span>{errors.first_name.message}</span>}
            </label>
            <input
              type="text"
              id="first_name"
              placeholder="Digite seu nome"
              {...register("first_name")}
            />
          </div>

          <div>
            <label htmlFor="last_name">
              Sobrenome:
              {errors.last_name && <span>{errors.last_name.message}</span>}
            </label>
            <input
              id="last_name"
              type="text"
              placeholder="Digite seu sobrenome"
              {...register("last_name")}
            />
          </div>

          <div>
            <label htmlFor="email">
              Email:{errors.email && <span>{errors.email.message}</span>}
            </label>
            <input
              id="email"
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
          </div>

          <div>
            <label htmlFor="phone_number">
              Celular:
              {errors.phone_number && (
                <span>{errors.phone_number.message}</span>
              )}
            </label>
            <input
              id="phone_number"
              type="number"
              placeholder="Digite seu número"
              {...register("phone_number")}
            />
          </div>

          <div>
            <label htmlFor="password">
              Senha:{errors.password && <span>{errors.password.message}</span>}
            </label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
          </div>

          <div>
            <label htmlFor="confirm_password">
              Confirme sua senha:
              {errors.confirm_password && (
                <span>{errors.confirm_password.message}</span>
              )}
            </label>
            <input
              id="confirm_password"
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirm_password")}
            />
          </div>

          <button type="submit">Cadastrar</button>
        </FormStyled>

        <p>Já possui conta?</p>

        <Link to={"/login"}>Login</Link>
      </ContainerForm>
    </ContainerRegister>
  );
}
