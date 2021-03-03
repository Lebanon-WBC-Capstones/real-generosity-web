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
        <HStack color="gray" fontSize={12}>
          <Button leftIcon={<Edit size={15} />} variant="ghost" onClick={handleEdit}>
            {t('itemPage.edit')}
          </Button>
        </HStack>
      </Flex>

      <Badge my="20px" bg="gray.100" fontSize="md" py="1" px="5">
        {category}
      </Badge>

      <Box color="black" fontWeight="bold" letterSpacing="wide" fontSize="3xl">
        {name}
      </Box>
      <Flex justify="space-between">
        <Box my="5px">
          <HStack color="gray.500">
            <MapPin />
            <Box fontSize="md" color="gray.500">
              Tripoli,mina
            </Box>
          </HStack>
        </Box>
        <Box>
          <Text
            fonts="Montserrat"
            color="gray.400"
            fontSize="xs"
            my={3}
            textTransform="uppercase"
          >
            {moment(`${date}`).startOf('day').fromNow()}
          </Text>
        </Box>
      </Flex>
      <Box mb={1} py={3} minH="100px">
        <Text fontSize="lg">{description}</Text>
      </Box>

      {/* <Button colorScheme="green" w="100%" size="lg">
        {t('itemPage.request')}
      </Button> */}
      <RequestModal />

      <Flex justify="space-between" pt={50}>
        <ReportModal />
        <DeleteModal />
      </Flex>
    </Flex>
  );
};

export default ItemDetails;
