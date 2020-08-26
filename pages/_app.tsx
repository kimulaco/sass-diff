import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Router from 'next/router'
import { hasGaId, sendPageview } from '../utils/ga'
import '../assets/scss/style.scss'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (!hasGaId) {
      return
    }

    const handleRouteChange = (path: string): void => {
      sendPageview(path)
    }

    Router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default App
