import { Box, Flex, HStack, Text, VStack, Image } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { MapPin } from 'react-feather';
// import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Card = ({ title, id, createdAt, image_url }) => {
  // const { t } = useTranslation();
  return (
    <Link to={`/item/${id}`}>
      <Box bg="white" maxW="2xs" borderRadius="lg" boxShadow="md">
        <Box p="4">
          <Image
            objectFit="cover"
            width="250px"
            height="100px"
            borderRadius="lg"
            boxShadow="lg"
            src={image_url}
            alt="item image"
          />
        </Box>
        <Box px="4" pb="4">
          <Flex mb="4" align="center" justify="space-between">
            <VStack alignItems="flex-start">
              <Text
                fonts="Montserrat"
                fontSize="lg"
                fontWeight="semibold"
                as="h3"
              >
                {title}
              </Text>
              <Text
                fonts="Montserrat"
                color="gray.400"
                fontSize="xs"
                textTransform="uppercase"
              >
                {moment(``).startOf('day').fromNow()}
              </Text>
            </VStack>
          </Flex>
          <Flex align="center" justify="space-between">
            <HStack color="gray.500">
              <MapPin />
              <Box fontSize="sm">Location</Box>
            </HStack>
            <Box fonts="Montserrat" color="blue.500" fontSize="sm">
              {/* <Link to={`item/`}>{t('card.more')}</Link> */}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Link>
  );
};

export default Card;
