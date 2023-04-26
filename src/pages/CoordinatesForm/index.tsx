import { SplashScreen } from "../../components/Splash";
import { Container, ContainerForm, FormStyled, Ornaments } from "./coordinates.styled";
import { MapPinLine, Lightning } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo";
import { FormEvent, useState } from "react";
import { GetLocation } from "../../constants/getLocation";
import { Loading } from "../../components/Loading";
import illustration from '../../assets/svgs/illustrations/robotSun.svg'
import decal from '../../assets/svgs/decal/balls.svg'
import { useNavigate } from "react-router-dom";
import { InputNumber } from "../../components/Inputs";

export function CoordinatesForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [values, setValues] = useState({
    lat: '',
    long: '',
    cons: ''
  })
  const navigate = useNavigate()

  const isDisable = () => {
    if (values.cons && values.lat && values.long !== '') {
      return false;
    } else {
      return true
    }
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
    }).catch((err) => {
      setIsLoading(false)
      console.error(err)
    })
  }
  function handleSubmit(e:FormEvent) {
    e.preventDefault()
    navigate(`/home/${values.lat}/${values.long}/${values.cons}`)
  }

  return (
    <>
      <SplashScreen />
      <Loading show={isLoading} variant={"02"} />
      <Container>
        <Ornaments>
          <img className="illustration" src={illustration} />
          <img className="decal" src={decal} />
        </Ornaments>
        <ContainerForm>
          <Logo />
          <FormStyled onSubmit={handleSubmit}>
            <h2>Preencha os dados</h2>
            <div className="inputs">
              <InputNumber 
                icon={<MapPinLine/>}
                label={'Latitude'}
                placeholder={'Example: -19,123'}
                name={'lat'}
                characters={{min: -86, max: 86}}
                getValue={[setValues, values, 'lat']}
                isValue={values.lat}
                requered
              />

              <InputNumber 
                icon={<MapPinLine/>}
                label={'Longitude'}
                placeholder={'Example: -32,123'}
                name={'Long'}
                characters={{min: -86, max: 86}}
                getValue={[setValues, values, 'long']}
                isValue={values.long}
                requered
              />

              <InputNumber 
                icon={<Lightning/>}
                label={'Consumo mensal médio'}
                placeholder={'Example: 300kWh'}
                name={'cons'}
                characters={{min: 150, max: 50000}}
                getValue={[setValues, values, 'cons']}
                isValue={values.cons}
                requered
              />
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