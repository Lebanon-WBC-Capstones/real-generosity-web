import { Box, Button , Text, Container } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { convertTimestamp } from '../../helpers/convertTimestamp';
import UserInfoModal from "../UserInfoModal/UserInfoModal"
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
} from "@chakra-ui/react"

const ItemRequests = ({ requests }) => {
  const { t } = useTranslation();

  const handleDelivered = () => {
    console.log('delivered');
  };
  const handleApprove = () => {
    console.log('approve');
  };
 

  return (
    <Container maxW="7xl" mx="auto">
    <Table variant="simple" >
    <TableCaption>
    <Button colorScheme="green"  w="100%" size="lg" onClick={handleDelivered}>
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
    <Tbody  overflow="auto">
      {requests.map((request, index) => (
      <Tr>
        <Td>
    <Accordion allowToggle >
        <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left" overflow="hidden" maxW="250px">
         <Text isTruncated> {request.reason} </Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    {request.reason}
    </AccordionPanel>
  </AccordionItem>
   </Accordion>
    </Td>
        <Td>{convertTimestamp(request.createdAt)}</Td>
        <Td>
          <Button fontSize="xs" variant="ghost" onClick={handleApprove}>
                      {t('itemPage.approve')}
          </Button>
         </Td>
        <Td><UserInfoModal /></Td>
      </Tr>
      ))}
    </Tbody>
  </Table>
</Container>
  );
};

export default ItemRequests;
