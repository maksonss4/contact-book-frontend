import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IChildren } from "..";
import { api } from "../../services";

export const UserContext = createContext({} as ILoginContext);

interface ILoginContext {
  loginUser: (data: IDataLogin) => void;
  logout: () => void;
  getUser: () => void;
  createUser: (data: IDataRegistration) => void;
  user: IUser;
  loading: boolean;
}

export interface IDataRegistration {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  confirm_password: string;
}

export interface IDataLogin {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
}

export interface IUser {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  id: string;
}

export function LoginProvider({ children }: IChildren) {
  const [user, setUser] = useState({} as IUser);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  function createUser(data: IDataRegistration) {
    api
      .post("/users", data)
      .then(() => {
        toast.success("Usuário criado com sucesso", { autoClose: 3000 });
        navigate("/login");
      })
      .catch((err) => {
        if (err.response.data.message === "Email already exists.") {
          toast.error("Email anteriormente cadastrado, faça o login", {
            autoClose: 3000,
          });
        } else {
          toast.error(err.response.data.message, { autoClose: 3000 });
        }
      });
  }

  function loginUser(data: IDataLogin) {
    api
      .post<ILoginResponse>("/login", data)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("@contact-book", token);
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        toast.success("Login realizado com sucesso", { autoClose: 3000 });
        navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response.data.message === "Wrong email/password") {
          toast.error("Email ou senha incorretos", { autoClose: 3000 });
        }
      });
  }

  function logout() {
    toast.info("Logout realizado", { autoClose: 3000 });
    localStorage.removeItem("@contact-book");
    navigate("/landingpage", { replace: true });
  }

  function getUser() {
    const token = localStorage.getItem("@contact-book");
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      api
        .get<IUser>("/users")
        .then((res) => {
          setUser(res.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/landingpage", { replace: true });
        });
    } else {
      navigate("/landingpage", { replace: true });
    }
  }

  return (
    <UserContext.Provider
      value={{
        loginUser,
        logout,
        getUser,
        createUser,
        user,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
