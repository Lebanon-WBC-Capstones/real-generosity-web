import React, { useState } from 'react';
import { Box, HStack, Text, Input, Button, Image } from '@chakra-ui/react';
import Dropzone from '../../components/Dropzone';
import proto from '../../assets/images/proto.png';
import { useTranslation } from 'react-i18next';

function EditProfile() {
  const { t } = useTranslation();

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
    <HStack fontFamily="Monteserrat">
      <Image fit="contain" src={proto} alt="Edit Profile photo" maxH="4xl" />

      <Box w="100%" maxW="2xl" alignContent="center">
        <Box fontSize="lg" maxW={72} mx="auto">
          <Text mb={2}>{t('editProfile.fullname')}</Text>
          <Input
            value={fullName}
            onChange={handleFullNameChange}
            size="sm"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
          />
        </Box>

        <Box mt={8} fontSize="lg" maxW={72} mx="auto">
          <Text mb={2}>{t('editProfile.address')}</Text>
          <Input
            value={address}
            onChange={handleAddressChange}
            size="sm"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
          />
        </Box>

        <Box mt={8} fontSize="lg" maxW={72} mx="auto">
          <Text mb={2}>{t('editProfile.email')}</Text>
          <Input
            value={emailAddress}
            onChange={handleEmailAddressChange}
            type="email"
            size="sm"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
          />
        </Box>
        <Box mt={8} fontSize="lg" maxW={72} mx="auto">
          <Text mb={2}>{t('editProfile.phone')}</Text>
          <Input
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            type="tel"
            size="sm"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
          />
        </Box>

        <Box mt={8} fontSize="lg" maxW={72} mx="auto">
          <Text mb={2}>ID card</Text>
          <Dropzone onChange={selectIdCard} />
        </Box>

        <Box mt={8} maxW={72} mx="auto">
          <Button colorScheme="green" w={72}>
            {t('editProfile.updateInfo')}
          </Button>
        </Box>
      </Box>
    </HStack>
  );
}

export default EditProfile;
