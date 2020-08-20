import { AppProps } from 'next/app'
import '../assets/style.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Component {...pageProps} />
    )
}

export default App
