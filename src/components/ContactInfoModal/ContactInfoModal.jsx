import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Phone, Mail, User } from 'react-feather';
import { firestore } from '../../services/firebase';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import { useAuth } from '../../contexts/AuthContext';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  ModalHeader,
  Grid,
  HStack,
} from '@chakra-ui/react';

const ContactInfoModal = ({ ownerInfo,ownerInfoLoading}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
  const currentUser = useAuth();
  //const { t } = useTranslation();
  //query approved requester info 
  // const requesterInfo=firestore.collection('users').where('uid','==',requester)
  // const [info,infoLoading,infoError]=useCollectionData(requesterInfo)

  // console.log("info",info)
  // if (infoError) return 'an error has occured...';

   if (ownerInfoLoading) return "loading..."

  return (
    <>
    
      <Button colorScheme="green"
              onClick={onOpen}>
        Contact Info
      </Button>

      <Modal
        size="xl"
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid>
              <HStack  my={3}>
                <User />
                <Text  fontSize="lg" fontWeight="medium">
                  Full Name:
                  </Text>
                  <Text fontSize="lg" fontWeight="medium" >
                  {currentUser && ownerInfo?  ownerInfo[0].fullname:''}
                </Text>
              </HStack>
              <HStack  my={3}>
                <Mail />
                <Text fontSize="lg" fontWeight="medium">
                  Email Address:
                </Text>
                  <Text fontSize="lg" fontWeight="medium">
                  {currentUser && ownerInfo ? ownerInfo[0].email:''}
                </Text>
              </HStack>
              <HStack  my={3}>
                <Phone />
                <Text fontSize="lg" fontWeight="medium">
                  phone number:
                  </Text>
                  <Text fontSize="lg" fontWeight="medium">
                  {currentUser && ownerInfo ? ownerInfo[0].phoneNumber:''}
                </Text>
              </HStack>
            </Grid>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
      </>
  );
};
export default ContactInfoModal;
