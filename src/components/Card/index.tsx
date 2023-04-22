import { IconContext, IconProps } from "@phosphor-icons/react";;
import { colors } from "../../styles/variables";
import { CardWapperStyled, ContentContainer, TextStyled, TitleStyled } from "./card.styled";


interface CardType {
  title: string
  icon: React.ReactElement<IconProps>
  value: [string, string] //text | sup
}

export function Card({title, icon, value}:CardType) {
  return(
    <CardWapperStyled>
      <TitleStyled>{title}</TitleStyled>
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