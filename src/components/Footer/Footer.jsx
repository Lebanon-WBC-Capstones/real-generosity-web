import React from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { Facebook, Instagram, GitHub, Twitter } from 'react-feather';

const Footer = () => {
  return (
    <Box
      py="10"
      as="footer"
      justify="space-between"
      fontSize={16}
      fontWeight={600}
      bg="gray.50"
    >
      <HStack
        spacing={16}
        mb="10"
        justify="center"
        color="gray.500"
        _hover={{ cursor: 'pointer' }}
      >
        <Text>Home</Text>
        <Text>Items</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </HStack>
      <HStack mb="10" spacing={50} justify="center">
        <Box color="gray.500" fontSize="sm">
          <Facebook />
        </Box>
        <Box color="gray.500" fontSize="sm">
          <Instagram />
        </Box>
        <Box color="gray.500" fontSize="sm">
          <GitHub />
        </Box>
        <Box color="gray.500" fontSize="sm">
          <Twitter />
        </Box>
      </HStack>
      <Flex mr="10" justify="flex-end" color="gray.500">
        &copy; All rights reserved
      </Flex>
    </Box>
  );
};

export default Footer;
