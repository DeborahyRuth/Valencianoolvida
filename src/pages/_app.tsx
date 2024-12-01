import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Valencia no olvida</title>
        <link rel='icon' href='/heart.png' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
