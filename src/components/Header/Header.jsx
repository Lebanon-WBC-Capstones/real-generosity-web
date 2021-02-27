import React from 'react';
import {
  Flex,
  Box,
  HStack,
  Text,
  Image,
  Input,
  InputLeftElement,
  InputGroup,
} from '@chakra-ui/react';
import { Search } from 'react-feather';
import sofa from '../../assets/images/sofa.png';

const Header = () => {
  return (
    <Box
      py="10"
      px="10"
      my="50px"
      as="header"
      mx="auto"
      fontSize={30}
      fontWeight={600}
      height={200}
      width={1080}
      borderRadius="20px"
      bg="gray.200"
    >
      <Flex mb="10" color="black" fontWeight={800}>
        <Text>Furniture</Text>

        <Flex mx="200px" py="1">
          <InputGroup>
            <InputLeftElement children={<Search color="black" />} />
            <Input width="400px" bg="whiteAlpha.800" placeholder="Search" />
          </InputGroup>
        </Flex>
      </Flex>

      <Flex float="right" my="-180px">
        <Image src={sofa} maxW="241px" maxH="233px"></Image>
      </Flex>
      <HStack>
        <Text mt="-50px" fontWeight={200} color="gray" fontSize="20px">
          365 results
        </Text>
      </HStack>
    </Box>
  );
};

export default Header;
