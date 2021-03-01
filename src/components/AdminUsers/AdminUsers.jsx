import React from 'react';
import { HStack, Avatar, VStack, Heading, Box, Button } from '@chakra-ui/react';
import { MapPin, Heart, ShoppingCart } from 'react-feather';
import { useTranslation } from 'react-i18next';

const AdminUsers = ({ name, itemsDonated, requests, loaction }) => {
  const { t } = useTranslation();
  return (
    <Box maxWidth="1080px">
      <HStack mx="auto" spacing="125px" justifyContent="space-between">
        <HStack spacing="20px">
          <Avatar
            size="lg"
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          ></Avatar>
          <VStack>
            <Heading fontSize="sm">{name}</Heading>
            <HStack color="gray.500">
              <MapPin size="14" />
              <Box fontSize="12x">{loaction}</Box>
            </HStack>
          </VStack>
        </HStack>
        <VStack>
          <Heart size="14" />
          <Box fontSize="12px">
            {itemsDonated.length} {t('adminPage.donations')}
          </Box>
        </VStack>
        <VStack>
          <ShoppingCart size="14" />
          <Box fontSize="12px">
            {requests.length} {t('adminPage.requests')}
          </Box>
        </VStack>

        <Button colorScheme="red" variant="outline">
          {t('adminPage.delete')}
        </Button>
      </HStack>
    </Box>
  );
};

export default AdminUsers;
