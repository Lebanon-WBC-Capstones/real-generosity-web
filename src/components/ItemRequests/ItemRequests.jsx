import { Box, Button, Text, Container } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { convertTimestamp } from '../../helpers/convertTimestamp';
import UserInfoModal from '../UserInfoModal/UserInfoModal';
import firebase, { firestore } from '../../services/firebase';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

const ItemRequests = ({ requests,id}) => {
  const { t } = useTranslation();

  const handleDelivered = () => {
    console.log('delivered');
  };

  const notificationsRef = firestore.collection('notifications');

  const handleApprove = async(requester) => {
      //insert a new document in firestore
      const notification = await notificationsRef.add({
        createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        targetId:requester,
        itemId:id,
        seen: false,
        type:'approve',
      });
    console.log('hi')
  };

  return (
    <Container maxW="7xl" mx="auto">
      <Table variant="simple">
        <TableCaption>
          <Button
            colorScheme="green"
            w="100%"
            size="lg"
            onClick={handleDelivered}
          >
            {t('itemPage.delivered')}
          </Button>
        </TableCaption>
        <Thead>
          <Tr>
            <Th> {t('itemPage.reason')}</Th>
            <Th>{t('itemPage.createdAt')}</Th>
            <Th>{t('itemPage.approve')} </Th>
            <Th>{t('itemPage.requesterInfo')}</Th>
          </Tr>
        </Thead>
        <Tbody overflow="auto">
          {requests?
           requests.map((request, index) => (
            <Tr>
              <Td>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          flex="1"
                          textAlign="left"
                          overflow="hidden"
                          maxW="250px"
                        >
                          <Text isTruncated> {request.reason} </Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{request.reason}</AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Td>
              <Td>{convertTimestamp(request.createdAt)}</Td>
              <Td>
                <Button fontSize="xs" variant="ghost" onClick={()=>handleApprove(request.requester)}>
                  {t('itemPage.approve')}
                </Button>
              </Td>
              <Td>
                <UserInfoModal />
              </Td>
            </Tr>
          )):(<>no requests yet</>)}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ItemRequests;
