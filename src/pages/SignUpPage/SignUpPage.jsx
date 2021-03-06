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
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import proto from '../../assets/images/proto.png';
import { auth, firestore } from '../../services/firebase';
import { useHistory } from 'react-router-dom';
// import Dropzonecomp from '../../components/Dropzone/Dropzonecomp';

function SignUpPage() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  // const [image, setImage] = React.useState();

  const onSubmit = async ({ fullname, email, password }) => {
    console.log('registration in process...');
    // data.image = image;
    // console.log(email, password);
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await firestore.collection('users').doc(user.uid).set({
      fullname,
      email,
      role: 'user',
      uid: user.uid,
      isApproved: false,
    });
    console.log('registered user...', user);
    history.push('/');
  };

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <GridItem colSpan={1}>
        <Image fit="contain" src={proto} alt="sign up img" />
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
          <Box fontSize="4xl">{t('signup.paragraph')}</Box>
          <Box>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box mt={4} fontSize="lg">
                <Text mb={2}>full name</Text>
                <Input
                  size="sm"
                  name="fullname"
                  variant="filled"
                  isRequired
                  focusBorderColor="green.200"
                  maxWidth={72}
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
                  maxWidth={72}
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
                  maxWidth={72}
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
                <Dropzonecomp dropzoneRef={register} setImage={setImage} />
              </Box> */}
              <Box mt={8}>
                <Button type="submit" colorScheme="green" w={72}>
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
