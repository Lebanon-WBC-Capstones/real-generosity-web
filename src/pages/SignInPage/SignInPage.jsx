import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Text,
  useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import proto from '../../assets/images/proto.png';
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
            'Invalid Password. Please enter the correct password and try again.',
          status: 'error',
          duration: 10000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem colSpan={1} display={{ base: 'none', md: 'block' }}>
        <Image fit="contain" src={proto} alt="sign up img" />
      </GridItem>

      <GridItem colSpan={2} mt={10} w="100%" maxW="800px" mx="auto">
        <Flex justify="space-between">
          <Link to="/">
            <Box fontSize={['2xl', '2xl', '2xl', '4xl']}>LOGO</Box>
          </Link>
          <Link to="/auth/signup">
            <Button
              variant="outline"
              colorScheme="black"
              _hover={{ bg: 'green.500', color: 'white' }}
              _focus={{ boxShadow: 'none' }}
              w={['32', '36', '40', '72']}
              ml={['28', '56', '56', '15']}
            >
              {t('signup.createbutton')}
            </Button>
          </Link>
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
            mr={40}
          >
            {t('signin.paragraph')}
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <Box mt={4} fontSize="lg">
                <Text mb={2}>{t('signin.email')}</Text>
                <Input
                  ref={register}
                  name="email"
                  type="email"
                  size="sm"
                  variant="filled"
                  isRequired
                  maxW={['48', '40', '52', '72']}
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
                  maxW={['48', '40', '52', '72']}
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
                  w={['48', '40', '56', '72']}
                >
                  {t('signin.signinbutton')}
                </Button>
              </Box>
            </Box>
          </form>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default SignInPage;
