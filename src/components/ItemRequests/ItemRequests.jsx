import React from 'react';
import { Flex, Box, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { requests } from '../../assets/data/requests';
import moment from 'moment';

const ItemRequests = ({requestsId,id}) => {
  const { t } = useTranslation();

  const handleDelivered = () => {
    console.log('delivered');
  };
  const handleApprove = () => {
    console.log('approve');
  };
  const handleDecline = () => {
    console.log('decline');
  };

  return (
    <Flex d="column" fontSize={18} >
      <Box py={5}>
        <Text fontWeight="bold" fontSize={12}>
          {requestsId.length} {t('itemPage.requests')}
        </Text>
      </Box>
      <Box
       maxH={300}
       style={requestsId.length >= 3 ? { overflow: 'auto' } : {}}
      >
        <SimpleGrid spacing={5}>
          {requests  &&
           requests
              .filter((r) => r.requestedId ===id)
              .map((request) => {
                return (
                  <Box bg="gray.50"  py={2} px={2}>
                      <Text
                        fonts="Montserrat"
                        fontSize="lg"
                        fontWeight="semibold"
                        as="h3"
                      >
                       {request.requestReason}
                      </Text>     
                    <Flex align="center" justify="space-between">
                    <Text
                      fonts="Montserrat"
                      color="gray.400"
                      fontSize="xs"
                      textTransform="uppercase"
                    >
                      {moment(`${request.dateOfRequest}`)
                        .startOf('day')
                        .fromNow()}
                    </Text>
                    <Box>
                        <Button
                          fontSize="xs"
                          variant="ghost"
                          onClick={handleApprove}
                        >
                          {t('itemPage.approve')}
                        </Button>
                        <Button
                          fontSize="xs"
                          color="red"
                          variant="ghost"
                          onClick={handleDecline}
                        >
                          {t('itemPage.decline')}
                        </Button>
                      </Box>
                    </Flex>
                  </Box>
                );
              })}
        </SimpleGrid>
      </Box>
      <Box py="30px">
        <Button variant="outline" w="100%" size="lg" onClick={handleDelivered}>
          {t('itemPage.delivered')}
        </Button>
      </Box>
    </Flex>
  );
};

export default ItemRequests;
