import React from "react";
import {Info} from 'react-feather';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  HStack,
  Button,
  Text,
  Select,
  VStack,
  useDisclosure,

} from "@chakra-ui/react";

const ReportModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  let [value, setValue] = React.useState("")

  let handleRequest = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  }

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
       <Info color="red" />
        <Text fontSize="medium" textColor="red">Report</Text>
      </HStack>
        
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
              <Text fontSize="large">Reason for Reporting</Text>
               <Select 
                placeholder="Select option"
                size="sm" 
                maxW="96" 
                focusBorderColor="green.200">
                 <option value="option1">Option 1</option>
                 <option value="option2">Option 2</option>
                 <option value="option3">Option 3</option>
               </Select>
             </VStack>
          </ModalBody>

          <ModalFooter fontSize="medium" justifyContent="space-evenly">
          <Button bg="#FF0000" textColor="white" px="12" py="4" 
            onClick={handleRequest} >Report</Button>
            <Button variant="ghost" px="12" py="4" onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ReportModal;