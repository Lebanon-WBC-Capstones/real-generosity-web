import { Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

function Layout({ children }) {
  return (
    <Flex direction="column">
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
}

export default Layout;
