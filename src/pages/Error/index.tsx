import { ContainerStyled, WrapperGrid } from "./error.styled";
import img from '../../assets/imgs/gifs/space.gif'
import { Logo } from "../../components/Logo";


export function Error404() {
  return (
    <>
      <Logo />
      <ContainerStyled>
        <WrapperGrid>
          <img src={img} />
          <div className="text">
            <div>
              <h1>404</h1>
            </div>
            <h2>Página não encontrada nesta galáxia!</h2>
          </div>
        </WrapperGrid>
      </ContainerStyled>
    </>
  )
}