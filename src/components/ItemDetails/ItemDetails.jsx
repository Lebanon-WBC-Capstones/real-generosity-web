import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  ModalBody,
  Text,
  Textarea,
  VStack,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import { ArrowLeft, Edit2, MapPin } from 'react-feather';
import GenericModal from '../GenericModal';

const ItemDetails = () => {
  return (
    <>
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

        <Box
          color="black"
          fontWeight="bold"
          letterSpacing="wide"
          fontSize="3xl"
        >
          items name
          <HStack>
            <MapPin color="green" size={15} />
            <Text color="gray" fontSize="15px">
              Tripoli,Mina
            </Text>
          </HStack>
        </Box>
        <Box py="50px">Description</Box>
        {/* Request Component  */}
        <GenericModal type="request" buttonText="request">
          <ModalBody>
            <VStack>
              <Text fontSize="large">Reason for requesting</Text>
              <Textarea
                size="sm"
                maxW="96"
                minH="24"
                focusBorderColor="green.200"
              />
            </VStack>
          </ModalBody>
        </GenericModal>

        <Flex justify="space-between" pt={50}>
          <GenericModal type="report" buttonText="report">
            <ModalBody>
              <VStack>
                <Text fontSize="large">Reason for reporting</Text>
                <Select
                  placeholder="Select option"
                  size="sm"
                  maxW="96"
                  focusBorderColor="green.200"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </VStack>
            </ModalBody>
          </GenericModal>
          <GenericModal type="delete" buttonText="delete">
            <ModalBody textAlign="center">
              <Text fontSize="large">Are you sure?</Text>
            </ModalBody>
          </GenericModal>
        </Flex>
      </Flex>
    </>
  );
};

export default ItemDetails;
