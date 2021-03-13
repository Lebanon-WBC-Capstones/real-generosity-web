import React from 'react';
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ShoppingBag, Heart } from 'react-feather';
import { convertTimestamp } from '../../helpers/convertTimestamp';
import { Link } from 'react-router-dom';
import { firestore } from '../../services/firebase';

const ProfileNotificationsTab = ({ notify, notifyloading }) => {
  const handleSeenClick = async (id) => {
    await firestore.collection('notifications').doc(id).set(
      {
        seen: true,
      },
      { merge: true }
    );
  };

  if (notifyloading) return <>loading...</>;
  return (
    <Container maxW="7xl" mx="auto">
      <Table variant="simple">
        <TableCaption></TableCaption>
        <Thead>
          <Tr>
            <Th>type</Th>
            <Th>date</Th>
            <Th>status</Th>
            <Th>link to it</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody overflow="auto">
          {notify ? (
            notify.docs.map((notification) => (
              <Tr key={notification.id}>
                <Td>
                  <HStack>
                    {notification.data().type === 'request' && <ShoppingBag />}
                    {notification.data().type === 'approve' && <Heart />}
                    <Text>{notification.data().type}</Text>
                  </HStack>
                </Td>
                <Td>{convertTimestamp(notification.data().createdAt)}</Td>
                <Td>{notification.data().seen ? 'seen' : 'unseen'}</Td>
                <Td>
                  <Link to={`/item/${notification.data().itemId}`}>
                    <Text>link to item </Text>
                  </Link>
                </Td>
                <Td>
                  <Button
                    fontSize="xs"
                    colorScheme="green"
                    variant="solid"
                    disabled={notification.data().seen}
                    onClick={() => handleSeenClick(notification.id)}
                  >
                    seen
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <>you don't have notifications</>
          )}
        </Tbody>
      </Table>
    </Container>
  );
};

export default ProfileNotificationsTab;
