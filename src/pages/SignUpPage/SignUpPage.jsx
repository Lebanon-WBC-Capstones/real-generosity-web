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
import Dropzone from '../../components/Dropzone';


function SignUpPage() {
  const { t } = useTranslation();
  const { register, handleSubmit, errors , getValues} = useForm();
  const history = useHistory();
  const [image, setImage] = React.useState();

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
        
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
        >
          <Box
            maxWidth={['20', '28', '36', '80']}
            fontSize={['sm', 'md', '2xl', '4xl']}
            display={{ base: 'none', md: 'block' }}
            mx={['0','0','28','32']}
            my={['0','0','28','36']}
        
          >
            {t('signup.paragraph')}
          </Box>
          <Box  w={{ base: "80%", md: "40%" }}
        align={["flex-start", "flex-start", "flex-start", "flex-start"]} >
            <form onSubmit={handleSubmit(onSubmit)}  >
              <Box mt={4} fontSize="lg">
                <Text mb={2}>first name</Text>
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
              <Box mt={4} fontSize="lg">
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
              </Box>

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
                type="password"
                  size="sm"
                  name="password"
                  variant="filled"
                  isRequired
                  maxW={['48', '40', '52', '72']}
                 
                  ref={register({
               
                    minLength: { value: 10, message: 'Too short' }})}
                    pattern="(?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?=.*[!@#\$%\^&\*]).{9,}$"
                   
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 10 or more characters"
                    
                  focusBorderColor="green.200"
                />
                { errors.password  && <Text>{errors.password.message } </Text> }
    
              </Box>
              <Box mt={8} fontSize="lg">
                <Text mb={2}> Repeat Password</Text>
        
                <Input
                type="password"
                  size="sm"
                  name="confirm"
                  variant="filled"
                  isRequired
                  maxW={['48', '40', '52', '72']}
                  focusBorderColor="green.200"
                  ref={register ({validate: value =>{
                 

  if (value === getValues('password')) {return true} else {return <span>Password fields don't match</span>}}})}
               
                 
                />
               
               {errors.confirm && <p>{errors.confirm.message}</p>}
              </Box>
              <Box mt={8} fontSize="lg">
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
                <Dropzone dropzoneRef={register} setImage={setImage} isRequired />
              </Box>
              <Box mt={8}>
                <Button
                  type="submit"
                  colorScheme="green"
                  w={['48', '40', '56', '72']}
                  mb={["8","9","10","10"]}
             
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
