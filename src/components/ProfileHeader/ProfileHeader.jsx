import {
  Avatar,
  Box,
  Button,
  Grid,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { MapPin, Phone } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ProfileHeader = ({fullname,email,phoneNumber, uid}) => {
  const { t } = useTranslation();
  
  return (
    <Box>
      <HStack d="flex" justifyContent="center" spacing="40px">
        <Avatar
          size="2xl"
          name="Kent Dodds"
          src="https://bit.ly/kent-c-dodds"
        />
        <Grid>
          <HStack spacing="25px" marginBottom="10px">
            <Text fontSize="2xl" fontWeight="semibold" color="black.500">
              {fullname}
            </Text>
            <Link to={`/profile/${uid}/settings`}>
            <Button
              rounded="5px"
              size="xs"
              fontSize="xs"
              borderRadius="1px"
              background="white"
              color="black"
              borderColor="black"
              variant="outline"
            >
              {t('profilePage.editProfile')}
            </Button>
            </Link>
          </HStack>
          <VStack spacing="6px" align="right">
            <Text fontSize="11px" fontWeight="semibold">
              {email}
            </Text>
            <HStack color="gray.500">
              <MapPin size="11" />
              <Box fontSize="11px">Location</Box>
            </HStack>
            <HStack color="black">
              <Phone size="11" />
              <Box fontSize="11px">
                {phoneNumber}
              </Box>
            </HStack>
          </VStack>
        </Grid>
      </HStack>
    </Box>
  );
};
export default ProfileHeader;
