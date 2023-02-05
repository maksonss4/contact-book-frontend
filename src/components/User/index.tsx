import { useContext } from "react";
import { UserContext } from "../../Provider/UserProvider";
import { Text } from "../Text";
import { UserContainer } from "./styles";

export function User() {
  const { user } = useContext(UserContext);
  return (
    <UserContainer>
      <h2>{`Olá ${user.first_name} ${user.last_name}!`}</h2>
      <p>
        <Text color="pink">Email: </Text>
        {user.email}
      </p>
      <p>
        <Text color="pink">Telefone: </Text>
        {user.phone_number}
      </p>
    </UserContainer>
  );
}
