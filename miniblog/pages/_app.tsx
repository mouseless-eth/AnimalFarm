import { ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </ChakraProvider>
  );
}

export default MyApp
