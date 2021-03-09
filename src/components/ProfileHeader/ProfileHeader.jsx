import {
  Heading,
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

const ProfileHeader = ({ fullname, email, phoneNumber, uid }) => {
  const { t } = useTranslation();

  return (
        <Grid>
          <HStack spacing="25px" marginBottom="10px">
            <Heading as="h1" size="xl">
              {fullname}
            </Heading>
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
          <VStack  align="right">
            <Text fontSize="lg" fontWeight="medium">
              {email}
            </Text>
            <HStack color="black">
              <Phone size="11" />
              <Box fontSize="xl">{phoneNumber}</Box>
            </HStack>
          </VStack>
      </Grid>
  );
};
export default ProfileHeader;
