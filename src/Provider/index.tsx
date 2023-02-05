import { ReactNode } from "react";
import { LoginProvider } from "./UserProvider";
import { RegistrationProvider } from "./ContactsProvider";

export interface IChildren {
  children: ReactNode;
}

export function Providers({ children }: IChildren) {
  return (
    <RegistrationProvider>
      <LoginProvider>{children}</LoginProvider>;
    </RegistrationProvider>
  );
}
