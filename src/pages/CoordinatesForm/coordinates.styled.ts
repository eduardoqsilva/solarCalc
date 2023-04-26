import styled from "styled-components";
import { colors, fonts } from "../../styles/variables";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`
export const Ornaments = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  display: grid;
  grid-template-columns: 1.4fr 2fr;
  grid-template-rows: 100%;
  align-items: center;
  justify-items: center;

  & .decal {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }
  & .illustration {
    width: 100%;
    max-width: 700px;
    min-width: 400px;
  }
  @media (max-width: 1200px) {
    display: none;   
  }
`

export const ContainerForm = styled.header`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;

  position: relative;
  z-index: 10;
`

export const FormStyled = styled.form`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;


  & .buttonsFormWrapper{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }

  & > h2 {
    text-align: center;
    margin-bottom: 1.75rem;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    letter-spacing: 0.05em;
  }

  & .inputs {
    display: flex;
    flex-direction: column;
  }
`
export const Credits = styled.h6 `
  font-family: ${fonts.default};
  font-weight: 600;
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  white-space: nowrap; 

  & a {
    text-decoration: none;
    color: ${colors.yellow_light};
    cursor: pointer;

    &:visited {
      color: ${colors.yellow};
    }
  }
`

