import React from 'react';
import { Box, Image, Flex, HStack, VStack, Text } from '@chakra-ui/react';
import { MapPin } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import data from '../../assets/data/items.json';
import moment from 'moment';

const Card = () => {
  const { t } = useTranslation();
  return (
    <Box bg="white" maxW="2xs" borderRadius="lg" boxShadow="md">
      <Box p="4">
        <Image
          objectFit="cover"
          width="250px"
          height="100px"
          borderRadius="lg"
          boxShadow="lg"
          src={data.items[0].imageURL[0]}
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
              {data.items[0].name}
            </Text>
            <Text
              fonts="Montserrat"
              color="gray.400"
              fontSize="xs"
              textTransform="uppercase"
            >
              {moment(`${data.items[0].date}`).startOf('day').fromNow()}
            </Text>
          </VStack>
        </Flex>
        <Flex align="center" justify="space-between">
          <HStack color="gray.500">
            <MapPin />
            <Box fontSize="sm">Location</Box>
          </HStack>
          <Box fonts="Montserrat" color="blue.500" fontSize="sm">
            <Link to={`/item/${data.items[0].id}`}>{t('card.more')}</Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
