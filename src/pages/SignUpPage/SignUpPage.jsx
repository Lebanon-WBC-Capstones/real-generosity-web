import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import proto from '../../assets/images/proto.png';
import Dropzonecomp from '../../components/Dropzone/Dropzonecomp';
import { useTranslation } from 'react-i18next';

function SignUpPage() {
  const { t } = useTranslation();

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
          <Box>
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
              <Text mb={2}>{t('signup.address')}</Text>
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
              <Button colorScheme="green" w={72}>
                {t('signup.createbutton')}
              </Button>
            </Box>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default SignUpPage;
