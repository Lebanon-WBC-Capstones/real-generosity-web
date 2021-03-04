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
  Textarea,
  Button,
} from '@chakra-ui/react';
import proto from '../../assets/images/proto.png';
import { useTranslation } from 'react-i18next';

function ContactUsPage() {
  const { t } = useTranslation();

  const [fullName, setFullName] = useState('');
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const [emailAddress, setEmailAddress] = useState('');
  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const [message, setMessage] = useState('');
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage=(e)=>{
    e.preventDefault()
    console.log("contact us message")
  }
  return (
<Grid templateColumns="repeat(3, 1fr)" gap={4} fontFamily="Montserrat">
      <GridItem colSpan={1}>
        <Image fit="contain" src={proto} alt="contact us img" />
      </GridItem>

      <GridItem colSpan={2} mt={10} w="100%" maxW="800px" mx="auto">
        <Flex justify="space-between">
          <Link to="/">
          <Box fontSize="4xl">LOGO</Box>
          </Link>
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
          <Box fontSize="4xl">{t('contactUs.paragraph')}</Box>
          <form onSubmit={handleSubmitMessage}>
          <Box>
            <Box mt={4} fontSize="lg">
              <Text mb={2}>{t('contactUs.fullname')}</Text>
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
              <Text mb={2}>{t('contactUs.email')}</Text>
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
              <Text mb={2}>{t('contactUs.message')}</Text>
              <Textarea
                value={message}
                onChange={handleMessageChange}
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              />
            </Box>

            <Box mt={8}>
              <Button colorScheme="green" w={72} type="submit">
                {t('contactUs.send')}
              </Button>
            </Box>
            
          </Box>
          </form>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default ContactUsPage;