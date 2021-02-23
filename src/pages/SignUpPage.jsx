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
import Dropzonecomp from '../components/Dropzone/Dropzonecomp';
function SignUpPage() {
  const [fullName, setFullName] = useState('');
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const [address, setAddress] = useState('');
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const [emailAddress, setEmailAddress] = useState('');
  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} fontFamily="Montserrat">
      <GridItem colSpan={1}>
        <Image fit="contain" src={proto} alt="sign up img" />
      </GridItem>

      <GridItem colSpan={2} mt={10} w="100%" maxW="800px" mx="auto">
        <Flex justify="space-between">
          <Box fontSize="4xl">LOGO</Box>
          <Button variant="outline" colorScheme="black">
            Sign In
          </Button>
        </Flex>

        <Flex minH="80vh" align="center" justify="space-between">
          <Box fontSize="4xl">
            Some relatively long heading paragraph sign-up
          </Box>
          <Box>
            <Box mt={4} fontSize="lg">
              <Text mb={2}>Full Name:</Text>
              <Input
                value={fullName}
                onChange={handleFullNameChange}
                size="sm"
                variant="filled"
                isRequired
                focusBorderColor="green.200"
                maxWidth={72}
              />
            </Box>
            <Box mt={8} fontSize="lg">
              <Text mb={2}>Address:</Text>
              <Input
                value={address}
                onChange={handleAddressChange}
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              />
            </Box>
            <Box mt={8} fontSize="lg">
              <Text mb={2}>Email Address:</Text>
              <Input
                value={emailAddress}
                onChange={handleEmailAddressChange}
                type="email"
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              />
            </Box>
            <Box mt={8} fontSize="lg">
              <Text mb={2}>Phone Number:</Text>
              <Input
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                type="tel"
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              />
            </Box>
            <Box mt={8} fontSize="lg">
              <Text mb={2}>Kindly, upload your ID card here:</Text>
              <Dropzonecomp />
              {/* <Input
                type="file"
                accept="image/*,.pdf"
                size="sm"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              /> */}
            </Box>
            <Box mt={8}>
              <Button colorScheme="green" w={72}>
                Create Account
              </Button>
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default SignUpPage;
