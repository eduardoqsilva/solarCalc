import LogoImg from "../../assets/svgs/logo/logoText.svg"
import { LogoStyled } from "./logo.styled";

export function Logo() {
  return (
    <LogoStyled>
      <img src={LogoImg} />
    </LogoStyled>
  )
}