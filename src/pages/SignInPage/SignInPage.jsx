import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { auth } from '../../services/firebase';
import { useHistory } from 'react-router-dom';

function SignInPage() {
  const { t } = useTranslation();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const toast = useToast();

  const onSubmit = async ({ email, password }) => {
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      if (user) {
        toast({
          title: 'You are now signed in',

          status: 'success',
          duration: 7000,
          isClosable: true,
        });
        history.push('/');
      }
      console.log(user);
    } catch (error) {
      const errorCode = error.code;

      if (errorCode === 'auth/wrong-password') {
        toast({
          title: 'Sign In Failed',
          description:
            'Wrong Password. Please enter the correct password and try again.',
          status: 'error',
          duration: 10000,
          isClosable: true,
        });
      }
    }
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
        <Heading py="2">{t('signin.signin')}</Heading>
        <HStack mb="12">
          <Text textColor="gray.400">{t('signin.subheading')} </Text>
          <Link to="/auth/signup">
            <Text textColor="blue.400">{t('signup.signuplink')}</Text>
          </Link>
        </HStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Text mb={2}>{t('signin.email')}</Text>
            <Input
              ref={register}
              name="email"
              type="email"
              size="sm"
              variant="filled"
              isRequired
              maxW={['72', '96', '96', '96']}
              focusBorderColor="green.200"
            />
          </Box>
          <Box mt={8} fontSize="lg">
            <Text mb={2}>{t('signin.password')}</Text>
            <Input
              ref={register}
              name="password"
              type="password"
              size="sm"
              variant="filled"
              isRequired
              maxW={['72', '96', '96', '96']}
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
            <Button
              type="submit"
              colorScheme="green"
              w={['72', '96', '96', '96']}
            >
              {t('signin.signinbutton')}
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>
  );
}

export default SignInPage;
