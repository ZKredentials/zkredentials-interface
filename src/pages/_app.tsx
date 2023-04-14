import { MetamaskSdkLayout } from '@/components/MetamaskSdkLayout'
import { MetaMaskProvider } from '@/hooks/useMetamask'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MetaMaskProvider>
    <MetamaskSdkLayout>
      <Component {...pageProps} />
    </MetamaskSdkLayout>
  </MetaMaskProvider>
  )
}
