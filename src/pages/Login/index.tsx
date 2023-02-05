import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ContainerForm } from "../../components/ContainerForm";
import { Header } from "../../components/Header";
import { IDataLogin, UserContext } from "../../Provider/UserProvider";
import { schemaLoginUser } from "../../schemas";
import { FormStyled } from "../Register/styles";
import { ContainerLogin } from "./styles";

export function Login() {
  const { loginUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IDataLogin>({
    resolver: yupResolver(schemaLoginUser),
  });

  return (
    <ContainerLogin>
      <Header />

      <ContainerForm>
        <FormStyled onSubmit={handleSubmit(loginUser)}>
          <h2>Login</h2>

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

          <button type="submit">Login</button>
        </FormStyled>

        <p>Não possui conta?</p>

        <Link to={"/register"}>Cadastre-se</Link>
      </ContainerForm>
    </ContainerLogin>
  );
}
