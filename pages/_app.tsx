import '../assets/css/bootstrap-icons.css'
import '../assets/css/bold.css'
import '../assets/css/app.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
