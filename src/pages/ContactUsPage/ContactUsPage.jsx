import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import {
  Box,
  Text,
  HStack,
  Heading,
  Flex,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

function ContactUsPage() {
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'real_generosity',
        'template_in561cn',
        e.target,
        'user_0AZ26wMMAKxuuS0KdvVRX'
      )
      .then(
        (result) => {
          alert(`${t('contactUs.alert')}`);
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  };

  const [firstName, setFirstName] = useState('');
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const [lastName, setLastName] = useState('');
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const [emailAddress, setEmailAddress] = useState('');
  const handleEmailAddressChange = (e) => {
    setEmailAddress(e.target.value);
  };

  const [message, setMessage] = useState('');
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      m="auto"
      fontSize="md"
      fontWeight="medium"
    >
      <Box>
        <Heading pt="2" mb="12">{t('navbar.contactUs')}</Heading>
        <Box>
          <form onSubmit={sendEmail}>
          <HStack justify="space-between">
            <Box mb={2}>
              <Text mb={2}>{t('contactUs.fullname')}</Text>
              <Input
                value={firstName}
                onChange={handleFirstNameChange}
                type="text"
                size="md"
                variant="filled"
                isRequired
                focusBorderColor="green.200"
                maxW={['32', '44', '44', '44']}
                name="name"
              /> 
              </Box>

              <Box mb={2}>
              <Text mb={2}>{t('contactUs.fullname')}</Text>
              <Input
                value={lastName}
                onChange={handleLastNameChange}
                type="text"
                size="md"
                variant="filled"
                isRequired
                focusBorderColor="green.200"
                maxW={['32', '44', '44', '44']}
                name="name"
              />
            </Box>
            </HStack>

            <Box mt={4}>
              <Text mb={2}>{t('contactUs.email')}</Text>
              <Input
                value={emailAddress}
                onChange={handleEmailAddressChange}
                type="email"
                size="md"
                variant="filled"
                isRequired
                maxW={['72', '96', '96', '96']}
                focusBorderColor="green.200"
                name="email"
              />
            </Box>

            <Box mt={4}>
              <Text mb={2}>{t('contactUs.message')}</Text>
              <Textarea
                value={message}
                onChange={handleMessageChange}
                size="md"
                variant="filled"
                isRequired
                maxW={['72', '96', '96', '96']}
                focusBorderColor="green.200"
                name="message"
              />
            </Box>

            <Box mt={4}>
              <Button
                type="submit"
                colorScheme="green"
                w={['72', '96', '96', '96']}
              >
                {t('contactUs.send')}
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  );
}

export default ContactUsPage;