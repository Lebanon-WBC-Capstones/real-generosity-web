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


const ProfileHeader = () => {

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
              username
            </Text>
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
              Edit Profile
            </Button>
          </HStack>
          <VStack spacing="6px" align="right">
            <Text fontSize="11px" fontWeight="semibold">
              'N' Donations
            </Text>
            <HStack color="gray.500">
              <MapPin size="11" />
              <Box fontSize="11px">Location</Box>
            </HStack>
            <HStack color="black">
              <Phone size="11" />
              <Box fontSize="11px">Number</Box>
            </HStack>
          </VStack>
        </Grid>
      </HStack>
    </Box>
  );
};
export default ProfileHeader;
