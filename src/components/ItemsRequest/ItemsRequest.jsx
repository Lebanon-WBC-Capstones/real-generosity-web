import React from 'react';
import { Flex, Box, VStack, Text, Button } from '@chakra-ui/react';

const ItemsRequest = () => {
  return (
    <Flex d="column" px={28} maxW="50%" my="50" fontSize={18}>
      <Flex justify="space-between">
        <Button color="gray" variant="ghost">
          Details
        </Button>
        <Button variant="ghost">Request</Button>
      </Flex>
      <hr width="100%" />
      <Flex py={5}>
        <Text fontWeight="bold" fontSize={12}>
          {' '}
          3 Requests
        </Text>
      </Flex>
      <VStack>
        <Flex bg="gray.50" height="80px">
          <VStack>
            <Text
              fontWeight="semi-bold"
              letterSpacing="wide"
              mt="25px"
              ml="15px"
            >
              Reason of Request{' '}
            </Text>

            <Text mr="100px" fontSize={12} color="gray">
              Time
            </Text>
          </VStack>

          <Box ml="80px" mt="15px">
            <Button variant="ghost">Approve</Button>
            <Button color="red" variant="ghost">
              Decline
            </Button>
          </Box>
        </Flex>
        <Flex bg="gray.50" height="80px">
          <VStack>
            <Text
              fontWeight="semi-bold"
              letterSpacing="wide"
              mt="25px"
              ml="15px"
            >
              Reason of Request{' '}
            </Text>

            <Text mr="100px" fontSize={12} color="gray">
              Time
            </Text>
          </VStack>

          <Box ml="80px" mt="15px">
            <Button variant="ghost">Approve</Button>
            <Button color="red" variant="ghost">
              Decline
            </Button>
          </Box>
        </Flex>
        <Flex bg="gray.50" height="80px">
          <VStack>
            <Text
              fontWeight="semi-bold"
              letterSpacing="wide"
              mt="25px"
              ml="15px"
            >
              Reason of Request{' '}
            </Text>

            <Text mr="100px" fontSize={12} color="gray">
              Time
            </Text>
          </VStack>

          <Box ml="80px" mt="15px">
            <Button variant="ghost">Approve</Button>
            <Button color="red" variant="ghost">
              Decline
            </Button>
          </Box>
        </Flex>
      </VStack>

      <Box py="30px">
        <Button variant="outline" w="100%" size="lg">
          Delivered
        </Button>
      </Box>
    </Flex>
  );
};

export default ItemsRequest;
