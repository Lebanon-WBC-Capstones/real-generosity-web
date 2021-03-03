import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import proto from '../../assets/images/proto.png';
import Dropzonecomp from '../../components/Dropzone/Dropzonecomp';
import firebase, { auth, firestore } from '../../firebaseConfig';

function SignUpPage() {
  const { t } = useTranslation();
  // const [
  //   createUserWithEmailAndPassword,
  //   user,
  //   loading,
  //   error,
  // ] = useCreateUserWithEmailAndPassword(auth);

  // console.log('user ???', user);

  const [fullName, setFullName] = useState('');
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [emailAddress, setEmailAddress] = useState('');
  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailAddress, password).then((res) => {
      return firestore.collection('users').doc(`${res.user.uid}`).set({
        fullName,
        idCard_url: [],
        items: [],
        phoneNumber,
        requests: [],
      });
    });
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem colSpan={1}>
        <Image fit="contain" src={proto} alt="sign up img" />
      </GridItem>

      <GridItem colSpan={2} mt={10} w="100%" maxW="800px" mx="auto">
        <Flex justify="space-between">
          <Box fontSize="4xl">LOGO</Box>
          <Link to="/auth/signin">
            <Button
              variant="outline"
              colorScheme="black"
              _hover={{ bg: 'green.500', color: 'white' }}
              _focus={{ boxShadow: 'none' }}
            >
              {t('signin.signinbutton')}
            </Button>
          </Link>
        </Flex>

        <Flex minH="80vh" align="center" justify="space-between">
          <Box fontSize="4xl">{t('signup.paragraph')}</Box>
          <form onSubmit={handleSubmit}>
            <Box mt={4} fontSize="lg">
              <Text mb={2}>{t('signup.fullname')}</Text>
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
              <Text mb={2}>Password</Text>
              <Input
                value={password}
                onChange={handlePasswordChange}
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              />
            </Box>
            <Box mt={8} fontSize="lg">
              <Text mb={2}>{t('signup.email')}</Text>
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
              <Text mb={2}>{t('signup.phone')}</Text>
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
              <Text mb={2}>{t('signup.idupload')}</Text>
              <Dropzonecomp />
            </Box>
            <Box mt={8}>
              <Button type="submit" colorScheme="green" w={72}>
                {t('signup.createbutton')}
              </Button>
            </Box>
          </form>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default SignUpPage;
