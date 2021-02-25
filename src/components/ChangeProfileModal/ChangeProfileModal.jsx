import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Flex,
    Avatar,
    Button,
    VStack,
    Text,
    Input,
    Box,
    useDisclosure
} from "@chakra-ui/react";

const ChangeProfileModal = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const finalRef = React.useRef();

    const [profilePicture, setProfilePicture] = useState(null);
    const selectProfilePicture = (e) => {
        setProfilePicture(e.target.files[0])
    };

    const fileUploadHandler = (e) => {
        
        onClose();
    };
    return (
        <>
            <Flex
                fontSize="xs"
                fontWeight="normal"
                my="4"
                align="center"

            >
                <VStack>

                    <Avatar
                        borderRadius="full"
                        typeof="Avatar"
                        minW="xs"
                        minH="xs"
                        size="2xl"
                        name="Dan Abrahmov"
                        bg="green.400"
                        fontSize="4xl"
                        textColor="white"
                        fontSize="6xl"
                        src={profilePicture} />

                    <Text
                        mt="4"
                        textAlign="center"
                        fontSize="sm"
                        color="blue.500"
                        _hover={{ cursor: "pointer" }}
                        ref={finalRef}
                        tabIndex={-1}
                        aria-label="Focus moved to this box"
                        onClick={onOpen}
                    >
                        Change Profile Photo
                         </Text>

                </VStack>
            </Flex>

            <Modal
                size="xl"
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                blockScrollOnMount={false}
                isCentered>
                <ModalOverlay />
                <ModalContent py="12" px="12" align="center" >
                    <ModalCloseButton />
                    <ModalBody >
                        <Text fontSize="large" textAlign="center" mb="4">Drag or Choose a File</Text>
                        <Flex justifyContent="center" mt="10">
                        <Input
                            type="file"
                            accept="image/*"
                            size="md"
                            isRequired
                            maxW="72"
                            border="transparent"
                            onClick={selectProfilePicture}
                            
                        />
                         </Flex>
                    </ModalBody>

                    <ModalFooter justifyContent="space-evenly" fontSize="medium">
                        <Button bg="#FF0000" textColor="white" px="12" py="4" >
                            Upload
                         </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
export default ChangeProfileModal;
