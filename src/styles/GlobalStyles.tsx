import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;

    background: ${theme.colors.backgroundOne}
  }

  a {
    text-decoration-line: none !important;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  @font-face {
    font-family: "SFProBlack";
    src: url("../assets/fonts/SF-Pro-Rounded-Black.otf") format('otf);
  }

  // @font-face {
  //   font-family: "SFProBold";
  //   src: url("@/assets/fonts/SF-Pro-Rounded-Bold.otf") format('otf);
  // }

  // @font-face {
  //   font-family: "SFProHeavy";
  //   src: url("@/assets/fonts/SF-Pro-Rounded-Heavy.otf") format('otf);
  // }

  // @font-face {
  //   font-family: "SFProLight";
  //   src: url("@/assets/fonts/SF-Pro-Rounded-Light.otf") format('otf);
  // }

  @font-face {
    font-family: "SFProMedium";
    src: url("../assets/fonts/SF-Pro-Rounded-Medium.otf") format('otf);
  }

  // @font-face {
  //   font-family: "SFProRegular";
  //   src: url("@/assets/fonts/SF-Pro-Rounded-Regular.otf") format('otf);
  // }

  // @font-face {
  //   font-family: "SFProSemibold";
  //   src: url("@/assets/fonts/SF-Pro-Rounded-Semibold.otf") format('otf);
  // }

  // @font-face {
  //   font-family: "SFProThin";
  //   src: url("@/assets/fonts/SF-Pro-Rounded-Thin.otf") format('otf);
  // }

  // @font-face {
  //   font-family: "SFProUltralight";
  //   src: url("@/assets/fonts/SF-Pro-Rounded-Ultralight.otf") format('otf);
  // }
`;

export default GlobalStyle;
