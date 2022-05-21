import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/css/font-awesome.min.css";
import "../public/css/elegant-icons.css";
import "../public/css/style.css";
import Head from 'next/head';
import { Provider } from 'react-redux';
import store from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
