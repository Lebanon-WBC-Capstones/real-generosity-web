import React from 'react';
import { Flex, Box, HStack, Text, Button, Badge } from '@chakra-ui/react';
import { MapPin, Edit2, ArrowLeft, AlertCircle, Trash2 } from 'react-feather';
import { useTranslation } from "react-i18next";

import data from "../../assets/data/items.json";

const ItemDetails = () => {
  const { t } = useTranslation();
  return (
    <Flex d="column"  maxW="400px" fontSize={18}>
      <Flex justify="space-between">
        <Button leftIcon={<ArrowLeft size={15} />} variant="ghost">
        {t("itemPage.items")}
        </Button>
        <HStack color="gray" fontSize={12}>
          <Button leftIcon={<Edit2 size={15} />} variant="ghost">
          {t("itemPage.edit")}
          </Button>
        </HStack>
      </Flex>

      <Badge my="40px" bg="gray.100" fontSize="1em" py="1" px="5">
        {data.items[0].category}
      </Badge>

      <Box color="black" fontWeight="bold" letterSpacing="wide" fontSize="3xl">
        {data.items[0].name}
        <HStack>
          <MapPin color="green" size={15} />
          <Text color="gray" fontSize="15px">
            Tripoli,Mina
          </Text>
        </HStack>
      </Box>
      <Box py="50px">{data.items[0].description}</Box>

      <Button colorScheme="green" w="100%" size="lg">
      {t("itemPage.request")}
      </Button>

      <Flex justify="space-between" pt={50}>
        <Button
          color="red"
          leftIcon={<AlertCircle size={15} color="red" />}
          variant="ghost"
        >
         {t("itemPage.report")}
        </Button>
        <Button leftIcon={<Trash2 size={15} />} variant="ghost">
         {t("itemPage.delete")}
        </Button>
      </Flex>
    </Flex>
  );
};

export default ItemDetails;
