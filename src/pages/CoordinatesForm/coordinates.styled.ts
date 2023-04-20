import styled from "styled-components";
import { colors } from "../../styles/variables";

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
    gap: 1rem;
  }
`
export const InputWrapperStyled = styled.div`
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