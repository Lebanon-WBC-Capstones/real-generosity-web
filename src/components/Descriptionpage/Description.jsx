import React from 'react';
import {
  Flex,
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Badge,
} from '@chakra-ui/react';
import { MapPin, Edit2, ArrowLeft, AlertCircle, Trash2 } from 'react-feather';

const Description = () => {
  return (
    <Box py="10" my="50" fontSize={18} fontWeight={600}>
      <VStack>
        <HStack spacing={80}>
          <Button variant="ghost">Details</Button>
          <Button color="gray" variant="ghost">
            Request
          </Button>
        </HStack>
        <hr width="50%" />
        <HStack spacing={80}>
          <Button variant="ghost">
            <ArrowLeft size={15} />
            items
          </Button>
          <HStack color="gray" fontSize={12}>
            <Button variant="ghost">
              <Edit2 size={15} />
              Edit
            </Button>
          </HStack>
        </HStack>
      </VStack>
      <VStack>
        <Box my="40px" bg="gray.200" mr={370} size="lg">
          <Badge px="5">Clothes</Badge>
        </Box>
        <Box
          color="black"
          fontWeight="bold"
          letterSpacing="wide"
          fontSize="3xl"
          mr={260}
        >
          items name
          <HStack>
            <MapPin color="green" size={15} />
            <Text color="gray" fontSize="15px">
              Tripoli,Mina
            </Text>
          </HStack>
        </Box>
        <Box mr={340} py="50px">
          Description
        </Box>

        <Button mr={-20} colorScheme="green" width={400} size="sm">
          Request
        </Button>

        <HStack mr={-20} pt={50} spacing={300}>
          <HStack>
            <AlertCircle size={15} color="red" />
            <Text color="red" fontSize={15}>
              Report
            </Text>
          </HStack>
          <HStack>
            {' '}
            <Trash2 size={15} />
            <Text fontSize={15}>Delete</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Description;
