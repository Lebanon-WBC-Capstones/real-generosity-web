import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Textarea,
  VStack,
  useDisclosure,

} from "@chakra-ui/react";

const RequestModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  let [value, setValue] = React.useState("")

  let handleRequest = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  }

  return (
    <>
      <Button bg="#00D870" textColor="white" px="36" py="5"
        fontSize="md"
        fontWeight="semibold"
        mb="4"
        align="center"
        ref={finalRef}
        tabIndex={-1}
        aria-label="Focus moved to this box"
        onClick={onOpen}
        >
          Request 
        </Button>
       
        
      <Modal 
      size="xl"
      finalFocusRef={finalRef} 
      isOpen={isOpen} 
      onClose={onClose}
      blockScrollOnMount={false}>
        <ModalOverlay />
        <ModalContent >
           <ModalBody pt="14" pb="4">
             <VStack>
              <Text fontSize="large">Reason for Requesting</Text>
              <Textarea 
             value={value}
             size="sm" maxW="96" minH="24" focusBorderColor="green.200"
             onChange={handleRequest}
             />
             </VStack>
          </ModalBody>

          <ModalFooter fontSize="medium" justifyContent="space-evenly">
          <Button bg="#FF0000" textColor="white" px="12" py="4" 
            // onClick={Request}
            >Request</Button>
            <Button variant="ghost" px="12" py="4" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default RequestModal;
