import React from 'react';
import { Flex, Box, HStack, Text, Button, Badge,VStack } from '@chakra-ui/react';
import { MapPin, Edit2, ArrowLeft, AlertCircle} from 'react-feather';
import { useTranslation } from "react-i18next";
import moment from 'moment';
import data from "../../assets/data/items.json";
import DeleteModal from "../DeleteModal/DeleteModal";
import { Link } from 'react-router-dom';


const ItemDetails = () => {

  const { t } = useTranslation();

  return (
    <Flex d="column"  maxW="400px" fontSize={18}>
      <Flex justify="space-between">
        <Link to ="/items">
        <Button leftIcon={<ArrowLeft size={15} />} variant="ghost">
        {t("itemPage.items")}
        </Button>
        </Link>
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
      </Box>
      <Flex justify="space-between">
      <Box my="5px">
         <HStack color="gray.500">
            <MapPin />
            <Box fontSize="md"  color="gray.500" >Tripoli,mina</Box>
          </HStack>
       </Box> 
       <Box>
       <Text fonts="Montserrat"
              color="gray.400"
              fontSize="xs"
              my="5px"
              textTransform="uppercase"> 
              { moment(`${data.items[0].date}`).startOf('day').fromNow()}
            </Text>
        </Box>
     </Flex>
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
        <DeleteModal />
      </Flex>
    </Flex>
  );
};

export default ItemDetails;
