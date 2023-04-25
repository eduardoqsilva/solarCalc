import styled from "styled-components";
import { colors, fonts } from "../../styles/variables";


export const CardWapperStyled = styled.div`
  width: 100%;
  height: 100%;
  min-height: 8.1875rem;
  min-width: 18.75rem;
  
  border-radius: 8px;
  padding: 1rem;
  
  background-color: ${colors.gray2};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`

interface TitleStyledType{
  tip: string
  show: boolean
}
export const TitleStyled = styled.h2<TitleStyledType>`
  font-weight: 600;
  font-size: 1rem;
  color: ${colors.gray7};
  width: 100%;
  text-align: left;
  justify-self: self-start;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.3rem;

  & svg {
    cursor: pointer;
  }
  & .tip {
    position: relative;
    &::after {
      content: '${(props) => props.tip}';
      
      position: absolute;
      right: -10px;
      top: 30px;
      z-index: 10;

      font-family: ${fonts.secundary};
      font-size: 0.8rem;
     
      background-color: ${colors.gray3};
      min-width: 250px;
      /* min-height: 50px; */
      padding: 0.5rem;
      border-radius: 8px;

      ${(props) => props.show ? ''
        : 'display: none;'  
      }
    }
    &::before {
      content: '';
      border-style: solid;
      border-width: 8px;
      border-color: transparent transparent ${colors.gray3} transparent;
      
      position: absolute;
      top: 15px;
      left: -1px;
      z-index: 11;

      ${(props) => props.show ? ''
        : 'display: none;'  
      }
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const TextStyled = styled.span `
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: ${colors.gray7};

  & sup {
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.yellow};
    position: relative;
    top: -8px;
    left: 2px;
  }
`