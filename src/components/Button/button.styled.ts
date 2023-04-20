import styled, { css } from "styled-components";
import { colors, fonts } from "../../styles/variables";

interface ButtonType {
  variation?: 'primary' | 'secundary'
  radius?: number
}
export const ButtonStyled = styled.button<ButtonType>`
  width: 100%;
  height: 53px;
  border-radius: ${props => props.radius + 'px'};
  background-color: ${colors.yellow};
  border: none;
  transition: all 0.1s ease-in;
  font-family: ${fonts.default};
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  color: ${colors.white};
  cursor: pointer;
  ${props => props.variation === 'secundary'
    ? css`
      background-color: transparent;
      border: 2px solid ${colors.yellow};
      color: ${colors.yellow};
    ` 
    : ''}
  &:not(:disabled):hover {
    transform: scale(1.01);
  }
  &:not(:disabled):active {
    transform: scale(0.95);
    ${props => props.variation === 'secundary' 
      ? css`
        background-color: transparent;
        border: 2px solid ${colors.yellow_light};
        color: ${colors.yellow_light};
        `
      : css`background-color: ${colors.yellow_light}`
    }
  }
  &:disabled {
    background-color: ${colors.yellow_dark};
    cursor: not-allowed;
    ${props => props.variation === 'secundary' 
      ? css`
        background-color: transparent;
        border: 2px solid ${colors.yellow_dark};
        color: ${colors.yellow_dark};
      `
      : ''
    }
  }
`
