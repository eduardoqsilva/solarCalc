import styled, { css, keyframes } from "styled-components"
import { colors, fonts } from "../../styles/variables"

const shake = keyframes`
  0% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(5px);
  }
`
interface Inputype {
  warning: boolean
}

export const InputWrapperStyled = styled.div<Inputype>`
  background-color: ${colors.gray2};
  border-radius: 5px;
  padding-left: 0.75rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  border: 2px solid transparent;
  transition: all .1s ease-in;
  margin-top: 1rem;

  position: relative;

  ${(props) => props.warning 
    ? css`color: ${colors.red};
      animation: ${shake} 0.1s 4 ease-in;
      border: 2px solid ${colors.red_dark};`
    : ''       
  }

  :focus-within {
    border: 2px solid ${colors.yellow};
  }
  & label {
    position: absolute;
    top: -25px;
    left: 0;
    
    font-size: 0.625rem;
    color: ${colors.gray6}
  }
  & input[type=number] {
    -moz-appearance: textfield;
  }
  & input {
    width: 100%;
    padding: 1rem 0;
    background: transparent;
    
    border: none;
    outline: none;

    font-size: 1rem;
    color: ${colors.white};
    letter-spacing: 0.055em;

    caret-color: ${colors.white};

    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
    }
  }
`
interface WarningType {
  warning: boolean
}
export const WarningStyled = styled.span<WarningType>`
  width: 100%;
  height: fit-content;
  visibility: ${props => props.warning ? 'visible' : 'hidden'};
  color: ${colors.red};
  font-family: ${fonts.default};
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 0.8rem;
  transition: all 0.1s ease-in;
`