import { NavContainer } from "./styles";
import logo from "../../assets/logo.png";

export function Nav() {
  return (
    <NavContainer>
      <a href="">Projetos</a>
      <img src={logo} />
      <a
        href="https://wa.me/5545988207140"
        target="_blank"
      >
        Contate-nos
      </a>
    </NavContainer>
  );
}
