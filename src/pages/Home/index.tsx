import { BoundingBox, LightbulbFilament, Lightning, PottedPlant, SunDim, Thermometer } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { BarChart, LineChart } from "../../components/Charts";
import { Loading } from "../../components/Loading";
import { Logo } from "../../components/Logo";
import { CardsGrid, ContainerStyled, ContentContainer, GridStyled, OrnamentsStyled } from "./home.styled";
import getData from "../../constants/solarCalcfunctions";

import up from '../../assets/svgs/decal/up.svg'
import down from '../../assets/svgs/decal/down.svg'
import { ShareButton } from "../../components/Share";

interface dataType {
  mediaIrradiacaoAnual: string,
  mediaPotCorrigida: number,
  mediaTemperaturaAnual: string,
  qtdModulos: number,
  potSistema: number,
  energiaGeradaArray: {
    meses: string[],
    dados: string[]
  },
  mediaIrradiacao: {
    meses: string[],
    dados: string[]
  },
  mediaTemp: {
    meses: string[],
    dados: string[]
  },
  energiaTotal: string,
  co2: string,
  arvores: number,
  areaInstalacao: string
}


export function Home() {
  const { lat, long, cons } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<dataType>()
  const co2F = () => {
    if(data) {
      if(typeof data.co2 === 'string') {
        const num = Number(data.co2)
        return (num / 1000).toFixed(1)
      }
    }
  }
  const PotF = () => {
    if(data) {
      if(typeof data.potSistema === 'number') {
        const num = Number(data.co2)
        return (num / 1000).toFixed(2)
      }
    }
  }

  useEffect(() => {
    setIsLoading(true)
    getData(Number(lat), Number(long), Number(cons))
    .then((dat:any) => {
      setData({
        ...dat
      })
      setIsLoading(false)
    }).catch((err) => {
      console.error(err)
    })
  }, [ lat, long, cons ])

  return (
    <>
      <Logo />
      <OrnamentsStyled>
        <img src={up} className="up" />
        <img src={down}className="down" />
      </OrnamentsStyled>
      <ShareButton />
      <Loading show={isLoading} variant={"01"}/>
      <ContainerStyled>
        <ContentContainer>
          <GridStyled>
            <CardsGrid>
              <Card
                title={'Potência do total sistema'}
                icon={<Lightning/>}
                value={[`${PotF()}`, 'kW']}
              />
               <Card
                title={'Geração anual'}
                icon={<LightbulbFilament/>}
                value={[`${data ? data?.energiaTotal : ''}`, 'kWh']}
              />
               <Card
                title={'Área de instalação'}
                icon={<BoundingBox/>}
                value={[`${data ? data?.areaInstalacao : ''}`, 'm²']}
              />
               <Card
                title={'Média irradiação anual'}
                icon={<SunDim/>}
                value={[`${data ? data?.mediaIrradiacaoAnual : ''}`, 'W/m²']}
              />
               <Card
                title={'Temperatura média anual'}
                icon={<Thermometer/>}
                value={[`${data ? data?.mediaTemperaturaAnual : ''}`, 'C°']}
              />
               <Card
                title={'Redução de CO2'}
                icon={<PottedPlant/>}
                value={[`${co2F()}`, 'TON']}
              />
            </CardsGrid>
            <BarChart 
              dat={data?.energiaGeradaArray.dados ?
                     data?.energiaGeradaArray.dados.map((i) => {
                       return parseFloat(i)
                     }) 
                     : []
                  }
              labels={data?.energiaGeradaArray.meses ? data?.energiaGeradaArray.meses : [] }
              title={'Geração anual mensal em kWh'} 
              dataLegend={'kWh'}            
            />
            <LineChart 
              dat={data?.mediaIrradiacao.dados ?
                data?.mediaIrradiacao.dados.map((i) => {
                  return parseFloat(i)
                }) 
                : []
             }
              labels={data?.mediaIrradiacao.meses ? data?.mediaIrradiacao.meses : []}
              title={'Média irradiação mensal em W/m²'}
              dataLegend={'W/m²'}
            />
          </GridStyled>
        </ContentContainer>
      </ContainerStyled>
    </>
  )
}