import React from 'react';
import {
  Box,
  Image,
  Flex,
  HStack,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { MapPin } from 'react-feather';

const Card = () => {
  return (
    <Box bg="white" maxW="2xs" borderRadius="lg">
      <Box p="4">
        <Image
          borderRadius="lg"
          boxShadow="lg"
          src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
          alt="item image"
        />
      </Box>
      <Box px="4" pb="4">
        <Flex mb="4" align="center" justify="space-between">
          <VStack>
            <Text
              fonts="Montserrat"
              fontSize="lg"
              fontWeight="semibold"
              as="h3"
            >
              ITEM TITLE
            </Text>
            <Text
              fonts="Montserrat"
              color="gray.400"
              fontSize="xs"
              textTransform="uppercase"
            >
              5 minutes ago
            </Text>
          </VStack>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Flex>
        <Flex align="center" justify="space-between">
          <HStack color="gray.500">
            <MapPin />
            <Box fontSize="sm">Location</Box>
          </HStack>
          <Box fonts="Montserrat" color="blue.500" fontSize="sm">
            More Details
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
