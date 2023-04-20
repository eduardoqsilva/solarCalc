import { SplashScreen } from "../../components/Splash";
import { Container, ContainerForm, FormStyled, InputWrapperStyled, Ornaments } from "./coordinates.styled";
import illustration from '../../assets/svgs/illustrations/robotSun.svg'
import decal from '../../assets/svgs/decal/balls.svg'
import { MapPinLine } from "@phosphor-icons/react";
import { colors } from "../../styles/variables";
import Lightning from "@phosphor-icons/react/dist/icons/Lightning";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { useEffect, useState } from "react";
import { GetLocation } from "../../constants/getLocation";
import { Loading } from "../../components/Loading";

export function CoordinatesForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    lat: '',
    long: '',
    cons: ''
  })


  const isDisable = () => {
    if(values.cons && values.lat && values.long !== '' ){
      return false;
    } else {
      return true
    }
  }

  function handleSetValues(key:string, value:string) {
    setValues({
      ...values,
      [key]: value
    })
  }
  
  function handleSetCoordinates() {
    setIsLoading(true)
    const coord = GetLocation()
      coord.then(val => {
        setValues({
          ...values,
          lat: val.lat.toString(),
          long: val.long.toString(),
        })
        setIsLoading(false)
      })
  }


  useEffect(() => {console.log(values)}, [values])

  return (
    <>
      <SplashScreen />
      <Loading show={isLoading} variant={"02"}/>
      <Container>
        <Ornaments>
          <img className="illustration" src={illustration} />
          <img className="decal" src={decal} />
        </Ornaments>
        <ContainerForm>
        <Logo />
          <FormStyled action="home">
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
                  name="lat"
                  step={0.0000001}
                  onChange={(e) => handleSetValues('lat', e.currentTarget.value)}
                  value={values.lat}
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
                  name="long"
                  step={0.0000001}
                  onChange={(e) => handleSetValues('long', e.currentTarget.value)}
                  value={values.long}
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
                  placeholder="Example: 305kWh"
                  name="cons"
                  step={0.01}
                  onChange={(e) => handleSetValues('cons', e.currentTarget.value)}
                  value={values.cons}
                />
              </InputWrapperStyled>
            </div>
            <div className="buttonsFormWrapper">
              <Button
                text="Pegar Coordenadas (GPS)"
                type="button"
                click={() => handleSetCoordinates()}
              />
              <Button
                text="Próximo"
                type="submit"
                variation="secundary"
                disable={isDisable()}
              />
            </div>
          </FormStyled>
        </ContainerForm>
      </Container>
    </>
  )
}