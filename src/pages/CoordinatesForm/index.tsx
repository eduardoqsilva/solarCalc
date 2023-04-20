import { SplashScreen } from "../../components/Splash";
import { Container, ContainerForm, FormStyled, InputWrapperStyled, Ornaments } from "./coordinates.styled";
import illustration from '../../assets/svgs/illustrations/robotSun.svg'
import decal from '../../assets/svgs/decal/balls.svg'
import { MapPinLine } from "@phosphor-icons/react";
import { colors } from "../../styles/variables";
import Lightning from "@phosphor-icons/react/dist/icons/Lightning";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";

export function CoordinatesForm() {
  return (
    <>
      <SplashScreen />
      <Container>
        <Ornaments>
          <img className="illustration" src={illustration} />
          <img className="decal" src={decal} />
        </Ornaments>
        <ContainerForm>
        <Logo />
          <FormStyled>
            <h2>Preencha os dados</h2>
            <div className="inputs">
              <InputWrapperStyled>
                <label>Latitude:</label>
                <MapPinLine
                  size={28}
                  color={colors.yellow}
                  weight="regular"
                />
                <input
                  type="number"
                  placeholder="Example: -17.446"
                />
              </InputWrapperStyled>
              <InputWrapperStyled>
                <label>Longitude:</label>
                <MapPinLine
                  size={28}
                  color={colors.yellow}
                  weight="regular"
                />
                <input
                  type="number"
                  placeholder="Example: -32.924"
                />
              </InputWrapperStyled>
              <InputWrapperStyled>
                <label>Consumo mensal:</label>
                <Lightning
                  size={28}
                  color={colors.yellow}
                  weight="regular"
                />
                <input
                  type="number"
                  placeholder="Example: 305kwh"
                />
              </InputWrapperStyled>
            </div>
            <div className="buttonsFormWrapper">
              <Button
                text="Pegar Coordenadas (GPS)"
                type="button"
              />
              <Button
                text="Próximo"
                type="submit"
                variation="secundary"
                disable
              />
            </div>
          </FormStyled>
        </ContainerForm>
      </Container>
    </>
  )
}