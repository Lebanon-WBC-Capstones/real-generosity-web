import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { auth, firestore } from '../../services/firebase';
import { useHistory } from 'react-router-dom';

function SignUpPage() {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  // const [image, setImage] = React.useState();

  const onSubmit = async ({ fullname, email, password, }) => {
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
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      align="center"
      m="auto"
      fontSize="md"
      fontWeight="medium"
    >

      <Box>
        <Heading py="2">{t('navbar.getStarted')}</Heading>

        <HStack mb="12">
          <Text textColor="gray.400">{t('signup.subheading')} </Text>
          <Link to="/auth/signin">
            <Text textColor="blue.400">{t('signin.signinbutton')}</Text>
          </Link>
        </HStack>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Text mb={2}>{t('signup.fullname')}</Text>
            <Input
              size="md"
              name="fullname"
              variant="filled"
              isRequired
              focusBorderColor="green.200"
              maxW={['72', '96', '96', '96']}
              ref={register}
            />
          </Box>

          <Box mt={4}>
            <Text mb={2}>{t('signup.email')}</Text>
            <Input
              placeholder="samir@realgen.com"
              type="email"
              size="md"
              name="email"
              variant="filled"
              isRequired
              maxW={['72', '96', '96', '96']}
              ref={register}
              focusBorderColor="green.200"
            />
          </Box>
          <Box mt={4}>
            <Text mb={2}>{t('signup.password')}</Text>
            <Input
              placeholder={t('signup.passplaceholder')}
              size="md"
              name="password"
              variant="filled"
              isRequired
              maxW={['72', '96', '96', '96']}
              ref={register}
              focusBorderColor="green.200"
            />
          </Box>

          <Box mt={8}>
            <Button
              type="submit"
              colorScheme="green"
              w={['72', '96', '96', '96']}
            >
              {t('signup.createbutton')}
            </Button>
          </Box>
        </form>
      </Box>
    </Flex>

  );
}

export default SignUpPage;
