import '~/styles/styles.css';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

import MainContext from '~/contexts/_providers';

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <MainContext>
    <Component {...pageProps} />
  </MainContext>
);

export default App;
