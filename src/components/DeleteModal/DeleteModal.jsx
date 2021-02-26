import React from 'react';
import trash2 from 'react-feather';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
  Button,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const DeleteModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  return (
    <>
      <HStack
        fontSize="xs"
        fontWeight="normal"
        mb="4"
        align="center"
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
        onClick={onOpen}
      >
        <trash2 color="black" />
        <Text>Delete</Text>
      </HStack>

      <Modal
        size="xl"
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={false}
      >
        <ModalOverlay />
        <ModalContent py="12" px="12" align="center">
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="large" textAlign="center" mt="8" mb="4">
              Are you sure you want to delete?
            </Text>
          </ModalBody>

          <ModalFooter justifyContent="space-evenly" fontSize="medium">
            <Button colorScheme="red" px="12" py="4">
              Delete
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
export default DeleteModal;
