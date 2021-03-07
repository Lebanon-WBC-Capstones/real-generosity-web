import React from 'react';
import {Link,  useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MoreHorizontal, User, LogOut } from 'react-feather';
import { auth } from '../../services/firebase';
import { useAuth } from '../../contexts/AuthContext';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Avatar,
    IconButton,
    HStack
  } from '@chakra-ui/react';

  const GetStartedBtn=()=>{
    const { t } = useTranslation(); 
    const user = useAuth();
    const history = useHistory();
    console.log('context user', user);
  
    const logOut = async () => {
      try {
        await auth.signOut();
        history.push('/auth/signin');
      } catch (error) {
        console.log('an error has occured...', error);
      }
    };
      return(
          <>
    {user ? (
          <HStack>
              <Avatar
                name={user.email.charAt(0).toUpperCase()}
                bg="green.500"
              ></Avatar>

              <Menu border="1px">
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<MoreHorizontal color="#718096" />}
                  size="md"
                  variant="ghost"
                />
                <MenuList>
                  <Link to={`/profile/${user.uid}`}>
                    <MenuItem icon={<User />}>Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={logOut} icon={<LogOut />}>
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
              </HStack>
           
          ) : (
            <Link to="/auth/signin">
              <Button
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
          </>
      )
  }
  export default GetStartedBtn; 