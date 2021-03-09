import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  User,
  LogOut,
  Bell,
  AlertCircle,
} from 'react-feather';
import { auth } from '../../services/firebase';
import { useAuth } from '../../contexts/AuthContext';
import {Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Avatar,AvatarBadge,Badge,
  IconButton,
  HStack,CircleIcon
} from '@chakra-ui/react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import firebase, { firestore } from '../../services/firebase';

const GetStartedBtn = () => {
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

  // query notifications from firebase
//   const notifications=firestore.collection('notifications').where('targetId','==',user.uid);
//   const [notify, notifyloading, notifyerror] = useCollectionData(notifications)
//   console.log('notify',notify)

//  if (notifyerror) console.log('error')
//  if (notifyloading) return <>loading...</>
//

// React.useEffect(()=>{
//   firebase
//   .firestore
//   .collection("notifications")
//   .where('targetId','==',user.uid)
//   .get()
//   .then(function(doc) {
//     if (doc.exists) {
//         // setCurrentPost(doc.data());
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }})
//   .catch(function(error) {
//     console.log("Error getting document:", error);
//   }), [user]
// })

// { user && notify.length!==0? <AvatarBadge boxSize="1.25em" bg="red" />:""}

 
  return (
    <>
      {user ? (
         <HStack>
          <Menu border="1px">
            <MenuButton
              as={IconButton}
              color="black"
              aria-label="Options"
              icon={ <Avatar size="sm" bg="white" icon={<Bell fontSize="1.5rem" />} >
               
                     </Avatar> }
              size="md"
              variant="ghost"
            />
            
            <MenuList>
              <Link to={`profile/${user.uid}?q=notifications`}>
              <MenuItem>Notifications</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              as={IconButton}
              color="black"
              aria-label="Options"
              icon={<Avatar size="sm" bg="black" />}
              size="md"
              variant="ghost"
            />
            <MenuList>
           
              <Link to={`/profile/${user.uid}?q=donations`}>
                <MenuItem icon={<User />}>{t('navbar.profile')}</MenuItem>
              </Link>
            
              <MenuItem onClick={logOut} icon={<LogOut />}>
                {t('navbar.logout')}
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
  );
};
export default GetStartedBtn;
