import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { AlertCircle, Trash2 } from 'react-feather';

const GenericModal = ({ children, buttonText, type }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = useRef();

  return (
    <>
      {type === 'request' ? (
        <Button
          ref={finalRef}
          onClick={onOpen}
          colorScheme="green"
          w="full"
          size="lg"
        >
          Request
        </Button>
      ) : type === 'report' ? (
        <Button
          leftIcon={<AlertCircle />}
          onClick={onOpen}
          colorScheme="red"
          variant="ghost"
        >
          Report
        </Button>
      ) : type === 'delete' ? (
        <Button
          leftIcon={<Trash2 />}
          onClick={onOpen}
          colorScheme="gray"
          variant="ghost"
        >
          Delete
        </Button>
      ) : null}

      <Modal
        size="xl"
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent>
          {children}
          <ModalFooter fontSize="medium" justifyContent="space-evenly">
            <Button colorScheme="red" textColor="white" px="12" py="4">
              {buttonText}
            </Button>
            <Button variant="ghost" px="12" py="4" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GenericModal;
