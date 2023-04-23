import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 1.5rem 1.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  
  overflow-x: hidden;

  @media (max-width: 654px) {
    align-items: flex-start;
  }
`

export const ContentContainer = styled.main`
  width: 100%;
  min-height: 100%;
  max-width: 950px;
  padding-top: 100px;

  /* @media (max-width: 654px) {
    padding-top: 0;
  } */
`
export const GridStyled = styled.div`
  width: 100%;
  min-height: 100%;
  
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(3,270px);
  gap: 0.5rem;
  
  position: relative;
  z-index: 10;
  @media (max-width: 964px) {
    grid-template-rows: auto 270px 270px;
  }
  @media (max-width: 654px) {
    gap: 1rem;
  }
`
export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;

  @media (max-width: 964px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
  @media (max-width: 654px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(1, 1fr);
    overflow-x: scroll;
    gap: 1rem;
  }
`
export const OrnamentsStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  width: 100%;
  height: 100%;

  & img.up {
    position: absolute;
    bottom: 10%;
    left: 41px;
  }
  & img.down {
    position: absolute;
    top: 10%;
    right: 41px;
  }

  @media (max-width: 1200px) {
    display: none
  }
`