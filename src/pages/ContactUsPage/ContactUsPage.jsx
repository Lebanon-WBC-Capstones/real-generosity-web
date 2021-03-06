import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Image,
  Grid,
  GridItem,
  Flex,
  Input,
  Text,
  Textarea,
  Button,
} from '@chakra-ui/react';
import proto from '../../assets/images/proto.png';
import { useTranslation } from 'react-i18next';
import emailjs from 'emailjs-com';

 function ContactUsPage() {
  const { t } = useTranslation();

  const sendEmail=(e)=>{
    e.preventDefault();

     emailjs.sendForm('real_generosity', 'template_in561cn', e.target, 'user_0AZ26wMMAKxuuS0KdvVRX')

    .then((result) => {
        alert(`${t('contactUs.alert')}`);
       
    }, (error) => {
        alert(error.message)
        
    });
    e.target.reset()


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
          <Link to="/auth/login">
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
          <Box>
            <form  onSubmit={sendEmail}>
            <Box mt={4} fontSize="lg">
              <Text mb={2}>{t('contactUs.fullname')}</Text>
              <Input
                type="text"
                size="sm"
                variant="filled"
                isRequired
                focusBorderColor="green.200"
                maxWidth={72}
                name="name"
              />
            </Box>

            <Box mt={8} fontSize="lg">
              <Text mb={2}>{t('contactUs.email')}</Text>
              <Input
                type="email"
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
                name="email"
              />
            </Box>
            <Box mt={8} fontSize="lg">
              <Text mb={2}>{t('contactUs.message')}</Text>
              <Textarea
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
                name="message"
              />
            </Box>

            <Box mt={8}>
              <Button type="submit" value="send" colorScheme="green" w={72} type="submit">
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
