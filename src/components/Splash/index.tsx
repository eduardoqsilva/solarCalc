import { ContainerStyled, WrapperLogo } from "./splash.styled";
import icon from '../../assets/svgs/logo/logoText.svg'
import { useState } from "react";


export function SplashScreen() {
  const [show, setShow] = useState(true)
  setTimeout(() => {
    setShow(false)
  },2000)

  return (
    <ContainerStyled show={show} >
      <div className="minCont">
        <WrapperLogo>
          <img src={icon} />
        </WrapperLogo>
      </div>
    </ContainerStyled>
  )
}