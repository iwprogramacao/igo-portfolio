import { NavContainer } from "./styles";
import logo from "../../assets/logo.png";

export function Nav() {
  return (
    <NavContainer>
      <a href="">Projetos</a>
      <img src={logo} />
      <a href="">Contate-nos</a>
    </NavContainer>
  );
}
