import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { ContainerLandingpage, DivLinks } from "./styles";
import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <ContainerLandingpage>
      <Header />

      <p>
        Gerencie seus contatos de maneira
        <Text color="green"> simples </Text>e
        <Text color="pink"> intuitiva</Text>
      </p>

      <p>Crie sua conta ou faça login</p>

      <DivLinks>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Cadastre-se</Link>
      </DivLinks>
    </ContainerLandingpage>
  );
}
