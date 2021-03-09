import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';
import GetStartedBtn from '../../components/GetStartedBtn/GetStartedBtn';
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

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem colSpan={1}>
        <Image fit="contain" src={proto} alt="contact us img" />
      </GridItem>

      <GridItem colSpan={2} mt={10} w="100%" maxW="800px" mx="auto">
        <Flex justify="space-between">
          <Link to="/">
            <Box fontSize="4xl">LOGO</Box>
          </Link>
          <GetStartedBtn />
        </Flex>

        <Flex
          minH="80vh"
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
        >
          <Box
            maxWidth={['20', '28', '36', '72']}
            fontSize={['sm', 'md', 'md', '4xl']}
            display={{ base: 'none', md: 'block' }}
          >
            {t('contactUs.paragraph')}
          </Box>
          <Box>
            <form onSubmit={sendEmail}>
              <Box mt={4} fontSize={['xx-small', 'md', 'md', 'lg']}>
                <Text mb={2}>{t('contactUs.fullname')}</Text>
                <Input
                  value={fullName}
                  onChange={handleFullNameChange}
                  type="text"
                  size="sm"
                  variant="filled"
                  isRequired
                  focusBorderColor="green.200"
                  maxWidth={['38', '28', '48', '72']}
                  name="name"
                />
              </Box>

              <Box mt={8} fontSize={['xx-small', 'md', 'md', 'lg']}>
                <Text mb={2}>{t('contactUs.email')}</Text>
                <Input
                  value={emailAddress}
                  onChange={handleEmailAddressChange}
                  type="email"
                  size="sm"
                  variant="filled"
                  isRequired
                  maxWidth={['38', '28', '48', '72']}
                  focusBorderColor="green.200"
                  name="email"
                />
              </Box>

              <Box mt={8} fontSize={['xx-small', 'md', 'md', 'lg']}>
                <Text mb={2}>{t('contactUs.message')}</Text>
                <Textarea
                  value={message}
                  onChange={handleMessageChange}
                  size="sm"
                  variant="filled"
                  isRequired
                  maxWidth={['38', '28', '48', '72']}
                  focusBorderColor="green.200"
                  name="message"
                />
              </Box>

              <Box mt={8}>
                <Button
                  colorScheme="green"
                  w={['48', '40', '40', '72']}
                  fontSize={['xx-small', 'md', 'md', 'lg']}
                >
                  {t('contactUs.send')}
                </Button>
              </Box>
            </form>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default ContactUsPage;
