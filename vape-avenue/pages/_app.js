import '@/styles/globals.css';
import Layout from '@/components/Layout';
/**this is our import for the global state*/
import { StoreProvider } from '@/utils/GlobalState';

export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
  <Layout>
 <Component {...pageProps} />
  </Layout>
  </StoreProvider>
  );
}
