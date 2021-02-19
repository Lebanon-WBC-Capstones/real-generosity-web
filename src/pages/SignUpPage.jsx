import React, { useState } from 'react';
import {
  Box,
  Image,
  Text,
  Grid,
  Center,
  Input,
  Button,
} from '@chakra-ui/react';
import proto from '../assets/proto.png';
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
      <Box>
        <Image maxH="100vh" w="100%" src={proto} alt="sign up img" />
      </Box>
      <Box mt={10} ml={10}>
        <Box fontSize="4xl">LOGO</Box>

        <Center h="60vh" fontSize="4xl" alignSelf="center">
          Some relatively long heading paragraph sign-up
        </Center>
      </Box>
      <Box mt={10} ml={10}>
        <Box float="right" mr={20}>
          <Button variant="outline" colorScheme="black">
            Sign In
          </Button>
        </Box>
        <Box mt={16} fontSize="lg">
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
          <Input
            type="file"
            accept="image/*,.pdf"
            size="sm"
            isRequired
            maxWidth={72}
            focusBorderColor="green.200"
          />
        </Box>

        <Box mt={8}>
          <Button colorScheme="green" w={72}>
            Create Account
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default SignUpPage;
