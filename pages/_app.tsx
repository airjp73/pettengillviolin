import { AppProps } from 'next/app';
import '../public/pett.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default App;
