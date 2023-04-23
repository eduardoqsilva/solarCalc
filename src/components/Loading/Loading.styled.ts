import styled, { keyframes } from "styled-components";
import { colors } from "../../styles/variables";


const loading = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(0.9);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`
const size = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
`

interface LoadingType {
  show: boolean
  variant: '01' | '02'
}

export const WrapperLoading = styled.div<LoadingType>`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  padding: 1.5rem;

  display: ${(props) => props.show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.variant === '01' 
    ? 'rgba(0,0,0,0.97)' 
    : 'transparent'
  };
`
interface LoadingWrapperType {
  variant: '01' | '02'
}

export const LoadingImgWrapper = styled.div<LoadingWrapperType>`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;

  background-color: ${(props) => props.variant === '01' 
    ? `${colors.gray2}` 
    : `${colors.gray3}`
  };
  border-radius: 8px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.green_light};
  position: relative;

  & img.sun {
    animation: ${loading} 4s infinite linear; 
  }
  & img.energy {
    position: absolute;
    width: 35px;
    
    animation: ${size} 1.5s infinite ease-in-out;
  }
`