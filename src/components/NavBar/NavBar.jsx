import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
  HStack,
  Icon,
  Button,
  Image,
} from '@chakra-ui/react';
import { Globe } from 'react-feather';
import GetStartedBtn from '../GetStartedBtn/GetStartedBtn';
import { auth } from '../../services/firebase';
import { useAuth } from '../../contexts/AuthContext';
import {
  useCollectionData,
  useDocumentData,
} from 'react-firebase-hooks/firestore';
import { firestore } from '../../services/firebase';
import logo2 from '../../assets/images/logo2.png';

function NavBar() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('EN');
  const user = useAuth();
  const history = useHistory();

  //check if the user is Admin
  let currentUser;
  if (user) currentUser = firestore.collection('users').doc(user.uid);
  const [userData, userDataLoading] = useDocumentData(currentUser);
  console.log(userDataLoading);
  const isAdmin = user && userData?.role === 'admin';
  console.log('admin', isAdmin);
  //logout function
  const logOut = async () => {
    try {
      await auth.signOut();
      history.push('/auth/signin');
    } catch (error) {
      console.log('an error has occured...', error);
    }
  };

  //query notifications from firebase
  let notifications;
  if (user)
    notifications = firestore
      .collection('notifications')
      .where('targetId', '==', user.uid)
      .where('seen', '==', false);

  const [notify, notifyloading, notifyerror] = useCollectionData(notifications);
  console.log('notify', notify);
  if (notifyerror) console.log('error');
  if (notifyloading) return <>loading...</>;

  return (
    <Box as="nav">
      <Flex
        maxWidth="1200px"
        m="auto"
        justify="space-between"
        align="center"
        px={16}
        pt={3}
        fontSize="md"
        fontWeight="medium"
      >
        <Box fontSize="xl">
          <Image borderRadius="full" boxSize="130px" src={logo2} alt="logo" />
        </Box>

        <HStack spacing={50} color="gray.400" _hover={{ cursor: 'pointer' }}>
          <Link to="/">
            <Text _hover={{ color: 'green.400' }}>{t('navbar.home')}</Text>
          </Link>
          <Link to="/items">
            <Text _hover={{ color: 'green.400' }}>{t('navbar.items')}</Text>
          </Link>
          <Link to="/about">
            <Text _hover={{ color: 'green.400' }}>{t('navbar.about')}</Text>
          </Link>
          <Link to="/contactus">
            <Text _hover={{ color: 'green.400' }}>{t('navbar.contactUs')}</Text>
          </Link>
        </HStack>
        <HStack>
          <Menu>
            <MenuButton
              p={2}
              transition="all 0.2s"
              borderRadius="md"
              _hover={{ bg: 'gray.100', color: 'green.400' }}
              _expanded={{ bg: 'gray.100' }}
            >
              <Box color="gray.400">
                <Icon as={Globe} mr={0.5} /> {lang}
              </Box>
            </MenuButton>
            <MenuList minW="max-content">
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage('en');
                  document.body.dir = i18n.dir();
                  setLang('EN');
                }}
              >
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  English
                </Box>
              </MenuItem>

              <MenuItem
                onClick={() => {
                  i18n.changeLanguage('fr');
                  document.body.dir = i18n.dir();
                  setLang('FR');
                }}
              >
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  Français
                </Box>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  i18n.changeLanguage('ar');
                  document.body.dir = i18n.dir();
                  setLang('ع');
                }}
              >
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  العربية
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
          {user ? (
            <GetStartedBtn
              logOut={logOut}
              user={user}
              notify={notify}
              isAdmin={isAdmin}
            />
          ) : (
            <Link to="/auth/signin">
              <Button
                color="gray.400"
                variant="outline"
                _hover={{ bg: 'green.400', color: 'white' }}
                _focus={{ boxShadow: 'none' }}
                colorScheme="black"
                ml={2}
              >
                {t('navbar.getStarted')}
              </Button>
            </Link>
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

export default NavBar;
