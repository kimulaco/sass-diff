import { AppProps } from 'next/app'
import '../assets/scss/style.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps} />
  )
}

export default App
