import React, { useState } from 'react';
import {
    Box,
    Container,
    HStack,
    VStack,
    Avatar,
    Image,
    Text,
    Grid,
    Center,
    Input,
    Button,
} from '@chakra-ui/react';
// import proto from '../assets/proto.png';

function EditProfile() {
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

        <HStack justifyContent="space-evenly" my="10">

            <Box justifyContent="center" >

                <Image borderRadius="full" typeof="Avatar" size="2xl" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                {/* //src={profilePicture}// */}
                <Text
                    mt="4"
                    textAlign="center"
                    fontSize="sm"
                    color="blue.500"
                    _hover={{ cursor: "pointer" }}
                //  onClick={}
                >
                    Change Profile Photo
                        </Text>

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
                    <Text mb={2}>Address:</Text>
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

                <Box mt={8} fontSize="lg">
                    <Text mb={2}>ID card</Text>
                    <Input
                        type="file"
                        accept="image/*,.pdf"
                        size="sm"
                        isRequired
                        maxWidth={72}
                        focusBorderColor="green.200"
                    />
                </Box>

                <Box mt={8}>
                    <Button colorScheme="green" w={72}>
                        Update  you Info
                        </Button>
                </Box>
            </Box>
        </HStack>

    );
}

export default EditProfile;