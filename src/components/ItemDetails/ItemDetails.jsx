import { Badge, Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { AlertCircle, ArrowLeft, Edit, MapPin } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import DeleteModal from '../DeleteModal/DeleteModal';
import ReportModal from "../ReportModal/ReportModal";
import RequestModal from "../RequestModal/RequestModal"

const ItemDetails = ({ category, name, date, description }) => {
  const { t } = useTranslation();
  
  const handleEdit=()=>{
    console.log("edit")
  }

  return (
    <Flex d="column"  fontSize={18}>
      <Flex justify="space-between">
        <Link onClick={() => window.history.back()}>
          <Button leftIcon={<ArrowLeft size={15} />} variant="ghost">
            {t('itemPage.items')}
          </Button>
        </Link>
       
        
          <Button leftIcon={<Edit size={15} />} variant="ghost" onClick={handleEdit}>
            {t('itemPage.edit')}
          </Button>
          
      </Flex>

      <Badge my="20px" bg="gray.100" fontSize="md" py="1" px="5">
        {category}
      </Badge>

      <Box color="black" fontWeight="bold" letterSpacing="wide" fontSize="3xl">
        {name}
      </Box>
      <Flex justify="space-between">
          <HStack color="gray.500"> my={1}
            <MapPin />
            <Box fontSize="md" color="gray.500">
              Tripoli,mina
            </Box>
          </HStack>
         <Text
            fonts="Montserrat"
            color="gray.400"
            fontSize="xs"
            my={3}
            textTransform="uppercase"
          >
            {moment(`${date}`).startOf('day').fromNow()}
          </Text>
     
      </Flex>
      <Box mb={1} py={3} minH="100px">
        <Text fontSize="lg">{description}</Text>
      </Box>

      <RequestModal />

      <Flex justify="space-between" pt={50}>
        <ReportModal />
        <DeleteModal />
      </Flex>
    </Flex>
  );
};

export default ItemDetails;
