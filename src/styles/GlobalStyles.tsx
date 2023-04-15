import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    max-width: 100vw;
    overflow-x: hidden;
  }

  a {
    text-decoration-line: none !important;
  }

  * {
    font-family: 'Roboto', sans-serif;
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
