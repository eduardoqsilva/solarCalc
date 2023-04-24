import styled from "styled-components";
import { colors } from "../../styles/variables";

export const ButtonShareStyled = styled.button`
  width: 60px;
  height: 60px;

  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 30;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.gray3};
  border: none;
  border-radius: 50%;

  &:active {
    border: 2px solid ${colors.yellow};
    transform: scale(0.90);
    transition: scale 0.1 ease-in;
  }
`