import { MetamaskSdkLayout } from "@/components/MetamaskSdkLayout";
import { MetaMaskProvider } from "@/hooks/useMetamask";

import GlobalStyle from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";

import localFont from "next/font/local";

const sfPro = localFont({
  src: [
    {
      path: "../assets/fonts/SF-Pro-Rounded-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SF-Pro-Rounded-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/SF-Pro-Rounded-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/SF-Pro-Rounded-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../assets/fonts/SF-Pro-Rounded-Black.otf",
      weight: "900",
      style: "bold",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${sfPro.style.fontFamily} !important;
        }
      `}</style>
      <MetaMaskProvider>
        <MetamaskSdkLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </MetamaskSdkLayout>
      </MetaMaskProvider>
    </>
  );
}
