import { Link } from "react-router-dom";
import LogoImg from "../../assets/svgs/logo/logoText.svg"
import { LogoStyled } from "./logo.styled";

export function Logo() {
  return (
    <LogoStyled>
      <Link to={'/'}>
        <img src={LogoImg} />
      </Link>
    </LogoStyled>
  )
}