import React, { useState } from 'react';
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Flex,
  Input,
  Button,
} from '@chakra-ui/react';
import proto from '../assets/images/proto.png';

function SignInPage() {
  const [authEmail, setAuthEmail] = useState('');
  const handleAuthEmailChange = (e) => {
    setAuthEmail(e.target.value);
  };

  const [authPassword, setAuthPassword] = useState('');
  const handleAuthPasswordChange = (e) => {
    setAuthPassword(e.target.value);
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} fontFamily="Montserrat">
      <GridItem colSpan={1}>
        <Image fit="contain" src={proto} alt="sign up img" />
      </GridItem>

      <GridItem colSpan={2} mt={10} w="100%" maxW="800px" mx="auto">
        <Flex justify="space-between">
          <Box fontSize="4xl">LOGO</Box>
          <Button
            variant="outline"
            colorScheme="black"
            _hover={{ bg: 'green.500', color: 'white' }}
            _focus={{ boxShadow: 'none' }}
          >
            Sign Up
          </Button>
        </Flex>

        <Flex minH="80vh" align="center" justify="space-between">
          <Box fontSize="4xl">
            Some relatively long heading paragraph sign-in
          </Box>
          <Box>
            <Box mt={8} fontSize="lg">
              <Text mb={2}>Email Address:</Text>
              <Input
                value={authEmail}
                onChange={handleAuthEmailChange}
                type="email"
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              />
            </Box>

            <Box mt={8} fontSize="lg">
              <Text mb={2}>Password:</Text>
              <Input
                value={authPassword}
                onChange={handleAuthPasswordChange}
                type="password"
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              />
            </Box>
            <Box mt={8}>
              <Text
                as="em"
                color="blue.500"
                fontSize="md"
                _hover={{ color: 'blue', cursor: 'pointer' }}
              >
                Forgot your password?
              </Text>
            </Box>

            <Box mt={8}>
              <Button colorScheme="green" w={72}>
                Sign In
              </Button>
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default SignInPage;
