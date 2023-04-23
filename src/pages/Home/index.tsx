import { BoundingBox, LightbulbFilament, Lightning, PottedPlant, SunDim, Thermometer } from "@phosphor-icons/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { BarChart, LineChart } from "../../components/Charts";
import { Loading } from "../../components/Loading";
import { Logo } from "../../components/Logo";
import { CardsGrid, ContainerStyled, ContentContainer, GridStyled, OrnamentsStyled } from "./home.styled";

import up from '../../assets/svgs/decal/up.svg'
import down from '../../assets/svgs/decal/down.svg'


const labels = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
const dat = [100, 200, 300, 400, 540, 700, 500, 300, 400, 500, 600, 790]

export function Home() {
  const { lat, long, cons } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState({
    dataBar: {
      data: [],
      labels: []
    },
    dataLine: {
      data: [],
      labels: []
    },
    pot: 0,
    ger_anual: 0,
    area: 0,
    irradiacao: 0,
    temp: 0,
    co2: 0
  })

  return (
    <>
      <Logo />
      <OrnamentsStyled>
        <img src={up} className="up" />
        <img src={down}className="down" />
      </OrnamentsStyled>
      <Loading show={isLoading} variant={"01"}/>
      <ContainerStyled>
        <ContentContainer>
          <GridStyled>
            <CardsGrid>
              <Card
                title={'Potência do total sistema'}
                icon={<Lightning/>}
                value={['216.8', 'kW']}
              />
               <Card
                title={'Geração anual'}
                icon={<LightbulbFilament/>}
                value={['216.8', 'kWh']}
              />
               <Card
                title={'Área de instalação'}
                icon={<BoundingBox/>}
                value={['216.8', 'm²']}
              />
               <Card
                title={'Média irradiação anual'}
                icon={<SunDim/>}
                value={['5559.56', 'W/m²']}
              />
               <Card
                title={'Temperatura média anual'}
                icon={<Thermometer/>}
                value={['21.85', 'C°']}
              />
               <Card
                title={'Redução de CO2'}
                icon={<PottedPlant/>}
                value={['3.6', 'TON']}
              />
            </CardsGrid>
            <BarChart 
              dat={dat}
              labels={labels}
              title={'Geração anual mensal em kWh'} 
              dataLegend={'kWh'}            
            />
            <LineChart 
              dat={dat}
              labels={labels}
              title={'Média irradiação mensal em W/m²'}
              dataLegend={'W/m²'}
            />
          </GridStyled>
        </ContentContainer>
      </ContainerStyled>
    </>
  )
}