import { Box, Button, Flex, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { convertTimestamp } from '../../helpers/convertTimestamp';

const ItemRequests = ({ requests }) => {
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
    <Flex d="column" maxW="400px" fontSize={18}>
      <Box py={5}>
        <Text fontWeight="bold" fontSize={12}></Text>
      </Box>
      <Box maxH="300px">
        <SimpleGrid spacing={5}>
          {requests.map((request, index) => (
            <Box key={index} bg="gray.50" height="80px" py="10px" px="5px">
              <Flex align="center" justify="space-between">
                <Text fontSize="lg" fontWeight="semibold" as="h3">
                  {request.reason}
                </Text>
                <Box>
                  <Button fontSize="xs" variant="ghost" onClick={handleApprove}>
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
              <Text color="gray.400" fontSize="xs" textTransform="uppercase">
                {convertTimestamp(request.createdAt)}
              </Text>
            </Box>
          ))}
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
