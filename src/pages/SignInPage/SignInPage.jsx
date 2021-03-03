import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useHistory } from 'react-router-dom';
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
import { useTranslation } from 'react-i18next';
import { auth } from '../../firebaseConfig';

function SignInPage() {
  const { t } = useTranslation();
  const history = useHistory();
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(authEmail, authPassword);
    if (user) {
      history.push('/');
    }
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4} fontFamily="Montserrat">
      <GridItem colSpan={1}>
        <Image fit="contain" src={proto} alt="sign up img" />
      </GridItem>

      <GridItem colSpan={2} mt={10} w="100%" maxW="800px" mx="auto">
        <Flex justify="space-between">
          <Box fontSize="4xl">LOGO</Box>
          <Link to="/auth/signup">
            <Button
              variant="outline"
              colorScheme="black"
              _hover={{ bg: 'green.500', color: 'white' }}
              _focus={{ boxShadow: 'none' }}
            >
              {t('signup.createbutton')}
            </Button>
          </Link>
        </Flex>

        <Flex minH="80vh" align="center" justify="space-between">
          <Box fontSize="4xl">{t('signin.paragraph')}</Box>
          <Box>
            <form onSubmit={handleSubmit}>
              <Box mt={4} fontSize="lg">
                <Text mb={2}>{t('signin.email')}</Text>
                <Input
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  type="email"
                  size="sm"
                  variant="filled"
                  isRequired
                  maxWidth={72}
                  focusBorderColor="green.200"
                />
              </Box>
              <Box mt={8} fontSize="lg">
                <Text mb={2}>{t('signin.password')}</Text>
                <Input
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
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
                  {t('signin.forgotyourpassword')}
                </Text>
              </Box>

              <Box mt={8}>
                <Button type="submit" colorScheme="green" w={72}>
                  {t('signin.signinbutton')}
                </Button>
              </Box>
            </form>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default SignInPage;
