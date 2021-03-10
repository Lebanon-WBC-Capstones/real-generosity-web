import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Phone, Mail, User } from 'react-feather';
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

const UserInfoModal = () => {
  // const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();
  return (
    <>
      <Button fontSize="xs" variant="ghost" color="green" onClick={onOpen}>
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
          <ModalHeader>contact info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid>
              <HStack color="black" my={3}>
                <User />
                <Text fontSize="lg" fontWeight="medium">
                  Full Name:{' '}
                </Text>
              </HStack>
              <HStack color="black" my={3}>
                <Mail />
                <Text fontSize="lg" fontWeight="medium">
                  Email Address:{' '}
                </Text>
              </HStack>
              <HStack color="black" my={3}>
                <Phone />
                <Text fontSize="lg" fontWeight="medium">
                  phone number:{' '}
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
export default UserInfoModal;
