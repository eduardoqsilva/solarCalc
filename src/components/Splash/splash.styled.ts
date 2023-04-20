import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/variables";

const splash = keyframes`
  0% {
    width: 0px;
  }
  100%{
    width: 250px;
  }
`
const transform = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-20px);
    opacity: 0.5;
  }
`
const opacity = keyframes`
  100%{
    opacity: 0;
  }
`

interface SplashType {
  show: boolean
}

export const ContainerStyled = styled.div<SplashType>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;

  display: ${props => props.show ? 'flex': 'none'};
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray1};
  background: radial-gradient(circle, rgba(32,32,36,1) 0%, rgba(18,18,20,1) 100%);

  animation: ${opacity} 0.2s ease-in-out both;
  animation-delay: 1.8s;

  & .minCont {
    min-width: 230px;
    min-height: 65px;
    max-width: 230px;
    max-height: 65px;
    display: flex;
    justify-content: right;
  }
`

export const WrapperLogo = styled.div`
  /* background-color: red; */
  display: flex;
  align-items: center;
  justify-content: right;
  width: 230px;

  overflow: hidden;
  position: relative;

  animation: ${splash} 0.6s ease-in;


  &::after {
    content: '';
    display: inline-block;
    width: 20px;
    height: 65px;
    background-color: ${colors.white};
    position: absolute;
    top: 0;
    left: 0;
    /* opacity: 0; */
    animation: ${transform} 0.1s ease-out both;
    animation-delay: 0.6s;
  }

  & img {
    width: 230px;
    height: 65px;
  }
`