import styled from "styled-components";

export const LogoStyled = styled.div`
  position: absolute;
  left: 2rem;
  top: 2rem;
  width: 161px;
  height: 45px;
  display: block;
  z-index: 2;

  @media (max-width: 800px) {
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  }
`