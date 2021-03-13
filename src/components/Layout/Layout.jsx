import { Flex, Box } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer';
import NavBar from '../NavBar';

function Layout({ children }) {
  return (
    <Flex
      minH="100vh"
      direction="column"
      justify="space-between"
      m="0 auto"
    >
      <NavBar />
      <Box flex="1">{children}</Box>
      <Footer />
    </Flex>
  );
}

export default Layout;
