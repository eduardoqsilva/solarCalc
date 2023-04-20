import { ButtonStyled } from "./button.styled";

interface ButtonType {
  text: string
  type?: 'button' | 'submit' | 'reset'
  variation?: 'primary' | 'secundary'
  radius?: number
  click?: () => void
  disable?: boolean
}

export function Button({text,type, click, variation = 'primary', radius = 5, disable}:ButtonType) {
  return(
    <ButtonStyled 
      type={type}
      onClick={click}
      variation={variation}
      radius={radius}
      disabled={disable}
    >
      {text}
    </ButtonStyled>
  )
}