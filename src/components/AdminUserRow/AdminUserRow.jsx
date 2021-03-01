import React from 'react';
import { HStack, Avatar, VStack, Heading, Box, Button } from '@chakra-ui/react';
import { MapPin, Heart, ShoppingCart } from 'react-feather';

const AdminUserRow = () => {
  return (
    <Box>
      <HStack mx="auto" spacing="125px" justifyContent="space-between">
        <HStack spacing="20px">
          <Avatar
            size="lg"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          ></Avatar>
          <VStack>
            <Heading fontSize="sm">User Name</Heading>
            <HStack color="gray.500">
              <MapPin size="14" />
              <Box fontSize="12x">Location</Box>
            </HStack>
          </VStack>
        </HStack>
        <VStack>
          <Heart size="14" />
          <Box fontSize="12px">N donations</Box>
        </VStack>
        <VStack>
          <ShoppingCart size="14" />
          <Box fontSize="12px">3 Requests</Box>
        </VStack>

        <Button colorScheme="red" variant="outline">
          Delete
        </Button>
      </HStack>
    </Box>
  );
};

export default AdminUserRow;
