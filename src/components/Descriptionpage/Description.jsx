import React from 'react';
import { Flex, Box, HStack, Text, Button, Badge } from '@chakra-ui/react';
import { MapPin, Edit2, ArrowLeft, AlertCircle, Trash2 } from 'react-feather';

const Description = () => {
  return (
    <Flex d="column" px={28} maxW="50%" my="50" fontSize={18}>
      <Flex justify="space-between">
        <Button variant="ghost">Details</Button>
        <Button color="gray" variant="ghost">
          Request
        </Button>
      </Flex>
      <hr width="100%" />
      <Flex justify="space-between">
        <Button leftIcon={<ArrowLeft size={15} />} variant="ghost">
          items
        </Button>
        <HStack color="gray" fontSize={12}>
          <Button leftIcon={<Edit2 size={15} />} variant="ghost">
            Edit
          </Button>
        </HStack>
      </Flex>

      <Badge my="40px" bg="gray.100" fontSize="1em" py="1" px="5">
        Clothes
      </Badge>

      <Box color="black" fontWeight="bold" letterSpacing="wide" fontSize="3xl">
        items name
        <HStack>
          <MapPin color="green" size={15} />
          <Text color="gray" fontSize="15px">
            Tripoli,Mina
          </Text>
        </HStack>
      </Box>
      <Box py="50px">Description</Box>

      <Button colorScheme="green" w="100%" size="lg">
        Request
      </Button>

      <Flex justify="space-between" pt={50}>
        <Button
          color="red"
          leftIcon={<AlertCircle size={15} color="red" />}
          variant="ghost"
        >
          Report
        </Button>
        <Button leftIcon={<Trash2 size={15} />} variant="ghost">
          Delete
        </Button>
      </Flex>
    </Flex>
  );
};

export default Description;
