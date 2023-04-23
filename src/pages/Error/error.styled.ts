import styled from "styled-components";
import { colors, fonts } from "../../styles/variables";

export const ContainerStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray1};
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`

export const WrapperGrid = styled.div`
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 400px auto;
  align-items: center;
  justify-items: center;

  @media (max-width: 500px) {
    grid-template-rows: 1fr auto;
  }

  & img {
    width: 400px;
    align-self: end;

    @media (max-width: 500px) {
      width: 100%
    }
  }
  & .text {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    align-self: start;

    & h1 {
      font-family: ${fonts.secundary};
      font-size: 15rem;
      color: ${colors.yellow};
      width: 100%;
      height: 100%;
      line-height: 15rem;
      border: none;

      @media (max-width: 500px) {
        font-size: 10rem;
        line-height: 10rem;
      }
    }
    & h2 {
      color: ${colors.yellow_light};
     
      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
  
`