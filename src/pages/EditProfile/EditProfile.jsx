import React, { useState } from 'react';
import {
    Box,
    HStack,
    Text,
    Input,
    Button,
    Avatar,
    VStack,
} from '@chakra-ui/react';
import Dropzonecomp from '../../components/Dropzone/Dropzonecomp';

function EditProfile() {

    const [idCard, setIdCard] = useState(null);
    const selectIdCard = (e) => {
        setIdCard(e.target.value);
       };

    const [fullName, setFullName] = useState('');
    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const [address, setAddress] = useState('');
    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const [emailAddress, setEmailAddress] = useState('');
    const handleEmailAddressChange = (e) => {
        setEmailAddress(e.target.value);
    };

    const [phoneNumber, setPhoneNumber] = useState('');
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    return (

        <HStack spacing="16" my="16" justifyContent="center" fontFamily="Monteserrat">

            <Box justifyContent="center" mt="10">
           
                <VStack>

                    <Avatar
                        borderRadius="full"
                        typeof="Avatar"
                        minW="xs"
                        minH="xs"
                        size="2xl"
                        name="Dan Abrahmov"
                        bg="green.400"
                        textColor="white"
                        fontSize="6xl"
                        src={profilePicture} />
                    <Input
                            type="file"
                            accept="image/*"
                            size="md"
                            isRequired
                            maxW="72"
                            border="transparent"
                            style={{display: 'none'}}
                            onChange={selectProfilePicture}
                            ref={fileInput => Input.fileInput = fileInput}
                            
                        />

                    <Text
                        mt="4"
                        textAlign="center"
                        fontSize="sm"
                        color="blue.500"
                        _hover={{ cursor: "pointer" }}
                        tabIndex={-1}
                        aria-label="Focus moved to this box"
                        onClick={()=> Input.fileInput.click()}
                    >
                        Change Profile Photo
                         </Text>

                </VStack>

            </Box>

            <Box>
                <Box mt={16} fontSize="lg">
                    <Text mb={2}>Full Name</Text>
                    <Input
                        value={fullName}
                        onChange={handleFullNameChange}
                        size="sm"
                        variant="filled"
                        isRequired
                        focusBorderColor="green.200"
                        maxWidth={72}
                    />
                </Box>

                <Box mt={8} fontSize="lg">
                    <Text mb={2}>Address</Text>
                    <Input
                        value={address}
                        onChange={handleAddressChange}
                        size="sm"
                        variant="filled"
                        isRequired
                        maxWidth={72}
                        focusBorderColor="green.200"
                    />
                </Box>

                <Box mt={8} fontSize="lg">
                    <Text mb={2}>Email Address</Text>
                    <Input
                        value={emailAddress}
                        onChange={handleEmailAddressChange}
                        type="email"
                        size="sm"
                        variant="filled"
                        isRequired
                        maxWidth={72}
                        focusBorderColor="green.200"
                    />
                </Box>
                <Box mt={8} fontSize="lg">
                    <Text mb={2}>Phone Number</Text>
                    <Input
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        type="tel"
                        size="sm"
                        variant="filled"
                        isRequired
                        maxWidth={72}
                        focusBorderColor="green.200"

                    />
                </Box>

                <Box mt={8} fontSize="lg" >
                    <Text mb={2} >ID card</Text>
                   <Dropzonecomp onChange={selectIdCard}/>
                </Box>

                <Box mt={8}>
                    <Button colorScheme="green" w={72}>
                        Update  your Info
                        </Button>
                </Box>
            </Box>
        </HStack>

    );
};

export default EditProfile;
