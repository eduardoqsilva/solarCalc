import styled from "styled-components";
import { colors } from "../../styles/variables";


export const CardWapperStyled = styled.div`
  width: 100%;
  height: 9rem;
  max-width: 18.75rem;
  
  border-radius: 8px;
  padding: 1rem;
  
  background-color: ${colors.gray2};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
`
export const TitleStyled = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  color: ${colors.gray7};
  width: 100%;
  text-align: left;
  justify-self: self-start;
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