import { createGlobalStyle } from "styled-components";
import { colors, fonts } from "./variables";

export const GlobalStyled = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${fonts.default};
    line-height: 160%;
    color: ${colors.gray7};

    background-color: ${colors.gray1};
  }
`