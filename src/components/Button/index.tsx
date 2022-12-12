import { ButtonContainer } from "./styles";

interface ButtonContainerProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonContainerProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}
