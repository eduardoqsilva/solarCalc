import { IconContext, IconProps, WarningCircle } from "@phosphor-icons/react";import { useEffect, useState } from "react";
;
import { colors } from "../../styles/variables";
import { CardWapperStyled, ContentContainer, TextStyled, TitleStyled } from "./card.styled";


interface CardType {
  title: string
  icon: React.ReactElement<IconProps>
  value: [string, string] //text | sup
  tip: string //dica
}

export function Card({title, icon, value, tip}:CardType) {

  const [legendTip, setLegendTip] = useState(false)

  function handleTip() {
    setLegendTip(prev => !prev) 
  }

  useEffect(() => {
    const interval = setTimeout(() => {
      setLegendTip(false)
    }, 3000)

    if(!legendTip) {
      clearInterval(interval)
    }
  },[legendTip])

  
  return(
    <CardWapperStyled>
      <TitleStyled tip={tip} show={legendTip}>
        {title} 
        <div className="tip">
          <WarningCircle
            width={15}
            weight={"bold"}
            color={colors.gray7}
            onClick={handleTip}
          />
        </div>
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
    </CardWapperStyled>
  )
}