import { IconContext, IconProps, WarningCircle } from "@phosphor-icons/react";import { MouseEventHandler, useEffect, useState } from "react";
;
import { colors } from "../../styles/variables";
import { CardWapperStyled, ContentContainer, TextStyled, Tip, TitleStyled } from "./card.styled";


interface CardType {
  title: string
  icon: React.ReactElement<IconProps>
  value: [string, string] //text | sup
  tip: string //dica
}

export function Card({title, icon, value, tip}:CardType) {

  const [legendTip, setLegendTip] = useState(false)

  function handleTip() { 
    if(window.innerWidth <= 800) {
      setLegendTip(true)
      console.log('passou')
    }
  }

  function onHover() {
    if(window.innerWidth > 800) {
      setLegendTip(true)
      console.log('passou')
    }
  }
  function onOut() {
    if(window.innerWidth > 800) {
      setLegendTip(false)
    }
  }

  useEffect(() => {
    let intervalId:any = null;
    if (legendTip) {
      intervalId = setInterval(() => {
        setLegendTip(false);
      }, 3000);
    }
    return () => clearInterval(intervalId);
  }, [legendTip]);

  
  return(
    <CardWapperStyled>
      <TitleStyled>
        <span 
          onMouseOver={onHover}
          onMouseOut={onOut}
          onClick={handleTip}
        >
          {title}
        </span>  
      </TitleStyled>
      <ContentContainer>
        <IconContext.Provider 
          value={{
            color: colors.yellow,
            size: 32,
            weight: "regular",
            mirrored: false,
          }}
        >
          {icon}
        </IconContext.Provider>
        <TextStyled>{value[0]}<sup>{value[1]}</sup></TextStyled>
      </ContentContainer>
      <Tip show={legendTip}>
        {tip}
      </Tip>
    </CardWapperStyled>
  )
}