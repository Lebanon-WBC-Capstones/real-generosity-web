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
import { auth, firestore } from '../../services/firebase';
import { useHistory } from 'react-router-dom';
// import Dropzone from '../../components/Dropzone';

function SignUpPage() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const toast = useToast();
  // const [image, setImage] = React.useState();

  // const checkEmail = () => {
  //   firestore.collection('users').where('email', '==', email)
  //     ?  toast({
  //   title: 'Account created.',
  //   description: "Your account was successfully created.",
  //   status: 'success',
  //   duration: 7000,
  //   isClosable: true,
  // })
  //     :
  // toast({
  //   title: 'Sign Up Failed',
  //   description: 'Email already exists.',
  //   status: 'error',
  //   duration: 9000,
  //   isClosable: true,
  // });
  // };

  // const [notify, notifyLoading] = useCollection(notifications);
  // console.log('email', email);

  const onSubmit = async ({ fullname, email, password }) => {
    console.log('registration in process...');
    console.log('email', email);
    // data.image = image;
    // console.log(email, password);
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await firestore.collection('users').doc(user.uid).set({
        fullname,
        email,
        role: 'user',
        uid: user.uid,
        isApproved: false,
      });
      toast({
        title: 'Account created.',
        description: 'Your account was successfully created.',
        status: 'success',
        duration: 7000,
        isClosable: true,
      });

      history.push('/');
    } catch (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      if (errorCode === 'auth/email-already-in-use') {
        alert('email already in use');
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
          <Link to="/auth/signin">
            <Button
              variant="outline"
              colorScheme="black"
              _hover={{ bg: 'green.500', color: 'white' }}
              _focus={{ boxShadow: 'none' }}
              w={['32', '36', '40', '72']}
              ml={['28', '56', '56', '15']}
            >
              {t('signin.signinbutton')}
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
            {t('signup.paragraph')}
          </Box>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mt={4} fontSize="lg">
                <Text mb={2}>Full Name</Text>
                <Input
                  size="sm"
                  name="fullname"
                  variant="filled"
                  isRequired
                  focusBorderColor="green.200"
                  maxW={['48', '40', '52', '72']}
                  ref={register}
                />
              </Box>
              {/* <Box mt={4} fontSize="lg">
                <Text mb={2}>last name</Text>
                <Input
                  size="sm"
                  name="lastname"
                  variant="filled"
                  isRequired
                  focusBorderColor="green.200"
                  maxWidth={72}
                  ref={register}
                />
              </Box> */}

              <Box mt={8} fontSize="lg">
                <Text mb={2}>{t('signup.email')}</Text>
                <Input
                  type="email"
                  size="sm"
                  name="email"
                  variant="filled"
                  isRequired
                  maxW={['48', '40', '52', '72']}
                  ref={register}
                  focusBorderColor="green.200"
                />
              </Box>
              <Box mt={8} fontSize="lg">
                <Text mb={2}>Password</Text>
                <Input
                  size="sm"
                  name="password"
                  variant="filled"
                  isRequired
                  maxW={['48', '40', '52', '72']}
                  ref={register}
                  focusBorderColor="green.200"
                />
              </Box>
              {/* <Box mt={8} fontSize="lg">
                <Text mb={2}>{t('signup.phone')}</Text>
                <Input
                  type="tel"
                  size="sm"
                  name="phone"
                  variant="filled"
                  isRequired
                  maxWidth={72}
                  ref={register}
                  focusBorderColor="green.200"
                />
              </Box>
              <Box mt={8} fontSize="lg">
                <Text mb={2}>{t('signup.idupload')}</Text>
                <Dropzone dropzoneRef={register} setImage={setImage} />
              </Box> */}
              <Box mt={8}>
                <Button
                  type="submit"
                  colorScheme="green"
                  w={['48', '40', '56', '72']}
                >
                  {t('signup.createbutton')}
                </Button>
              </Box>
            </form>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
}

export default SignUpPage;
