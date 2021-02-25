import React from 'react';
import {
  Box,
  Image,
  Flex,
  HStack,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { MapPin } from 'react-feather';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import data from "../../assets/data/items.json";
import moment from 'moment';

const Card = () => {
  const { t } = useTranslation();
  return (
    <Box bg="white" maxW="2xs" borderRadius="lg">
      <Box p="4">
        <Image
          borderRadius="lg"
          boxShadow="lg"
          src="https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg"
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
               { moment(`${data.items[0].date}`).startOf('day').fromNow()}
            </Text>
          </VStack>
          <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        </Flex>
        <Flex align="center" justify="space-between">
          <HStack color="gray.500">
            <MapPin />
            <Box fontSize="sm">Location</Box>
          </HStack>
          <Box fonts="Montserrat" color="blue.500" fontSize="sm">
           <Link to={`/item/${data.items[0].id}`}>
              {t("card.more")}
           </Link>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
