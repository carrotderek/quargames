import { CssBaseline, GeistProvider } from '@geist-ui/react'
import { AppProps } from 'next/app'
import '../styles/globals.css'
import { theme } from '../styles/theme.js'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}

export default MyApp
