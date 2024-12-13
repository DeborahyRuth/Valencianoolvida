import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Valencia no olvida</title>
        <link rel='apple-touch-icon' href='/icon.jpeg' />
        <link rel='favicon' href='/icon.jpeg' />
        <link rel='icon' href='/icon.jpeg' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
