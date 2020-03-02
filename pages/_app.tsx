import { AppProps } from 'next/app';
import '../public/pett.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <script
      async
      defer
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&libraries=places`}
    ></script>
    <Component {...pageProps} />
  </>
);

export default App;
