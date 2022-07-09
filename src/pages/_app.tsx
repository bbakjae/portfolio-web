import '../styles/globals.css';
import '../styles/main.css';
import type { AppProps } from 'next/app';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api.bbakjae.me/portfolio/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
