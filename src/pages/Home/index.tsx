import { BoundingBox, LightbulbFilament, Lightning, PottedPlant, SunDim, Thermometer } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card";
import { BarChart, LineChart } from "../../components/Charts";
import { Loading } from "../../components/Loading";
import { Logo } from "../../components/Logo";
import { CardsGrid, ContainerStyled, ContentContainer, GridStyled, OrnamentsStyled } from "./home.styled";
import getData, { TotalInfo } from "../../constants/solarCalcFunction-ts";

import up from '../../assets/svgs/decal/up.svg'
import down from '../../assets/svgs/decal/down.svg'
import { ShareButton } from "../../components/Share";



export function Home() {
  const { lat, long, cons } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<TotalInfo>()


  useEffect(() => {
    setIsLoading(true)
    getData(Number(lat), Number(long), Number(cons))
    .then((dat) => {
      if(dat) {
        setData({
          ...dat
        })
      }
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
                value={[`${data ? data.potSistema : '0' }`, 'kWp']}
                tip={'Base para dimensionar o seu sistema solar.'}
              />
               <Card
                title={'Geração anual'}
                icon={<LightbulbFilament/>}
                value={[`${data ? data?.energiaTotal : '0'}`, 'kWh']}
                tip={'Total de energia produzida em um ano.'}
              />
               <Card
                title={'Área de instalação'}
                icon={<BoundingBox/>}
                value={[`${data ? data?.areaInstalacao : '0'}`, 'm²']}
                tip={'Área total em m² ocupada pelo sistema.'}
              />
               <Card
                title={'Média irradiação anual'}
                icon={<SunDim/>}
                value={[`${data ? data?.mediaIrradiacaoAnual : '0'}`, 'W/m²']}
                tip={'Media anual da radiação global no local.'}
              />
               <Card
                title={'Temperatura média anual'}
                icon={<Thermometer/>}
                value={[`${data ? data?.mediaTemperaturaAnual : '0'}`, 'C°']}
                tip={'Base para calcular o desempenho dos Modulos solares.'}
              />
               <Card
                title={'Redução de CO2'}
                icon={<PottedPlant/>}
                value={[`${data ? data.TONco2 : '0'}`, 'TON']}
                tip={'Redução em toneladas de CO² equivalente a energia produzida.'}
              />
            </CardsGrid>
            <BarChart 
              dat={data ? data?.energiaGeradaArray.dados : []}
              labels={data ? data?.energiaGeradaArray.meses : [] }
              title={'Geração anual mensal em kWh'} 
              dataLegend={'kWh'}            
            />
            <LineChart 
              dat={data ? data?.mediaIrradiacao.dados : []}
              labels={data ? data?.mediaIrradiacao.meses : []}
              title={'Média irradiação mensal em W/m²'}
              dataLegend={'W/m²'}
            />
          </GridStyled>
        </ContentContainer>
      </ContainerStyled>
    </>
  )
}