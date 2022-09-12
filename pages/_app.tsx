import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Footer from '@components/Footer';
import { Meta } from '@components/Meta';
import { environment, isProduction } from '@utils/config';
import { NavBar } from '@components/Navbar';

/* Theming */
const theme = extendTheme({
  styles: {
    global: {
      a: {
        color: 'blue.700',
        _hover: {
          textDecoration: 'underline',
        },
      },
      h1: {
        fontSize: '4xl',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '2xl',
        fontWeight: 'bold',
      },
      h3: {
        fontSize: 'xl',
        fontWeight: 'bold',
      },
      h4: {
        fontSize: 'lg',
        fontWeight: 'bold',
      },
    },
  },
});

function App({ Component, pageProps }: AppProps) {
  console.log('env', environment, isProduction);
  return (
    <ChakraProvider theme={theme}>
      <Meta />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
