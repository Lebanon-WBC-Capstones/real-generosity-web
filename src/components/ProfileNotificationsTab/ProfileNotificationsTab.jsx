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
    Text
  } from "@chakra-ui/react";
  import {
    Gift,
    ShoppingBag,
  } from 'react-feather';
  import { convertTimestamp } from '../../helpers/convertTimestamp';
  import { Link } from 'react-router-dom';
  import { firestore } from '../../services/firebase';
import ItemDetails from '../ItemDetails';
const ProfileNotificationsTab = ({notify,notifyloading}) => {

    const handleSeenClick=(notification)=>{
       console.log("seen")
//        firestore.collection("notifications")
//   .document(notification.id)
//   .update({
//     "seen": true,
   
  //})
    }

    if (notifyloading) return  <>loading...</>;
    return (  
        <Container maxW="7xl" mx="auto">
        <Table variant="simple" >
        <TableCaption>
        
          
        </TableCaption>
        <Thead>
          <Tr >
            <Th >type</Th>
            <Th>date</Th>
            <Th>seen</Th>
            <Th>link to it</Th>
           
          </Tr>
        </Thead>
        <Tbody  overflow="auto">
      { notify.docs ?
        notify.docs.map(notification=>(
          <Tr key={notification.id}>

              <Td>
              <HStack>
              {notification.data().type==="request" && <ShoppingBag />}
              <Text>{notification.data().type}</Text>
              </HStack>
              </Td>
            <Td>
              {convertTimestamp(notification.data().createdAt)}
            </Td>
            <Td> <Button
                  fontSize="xs"
                  color="red"
                  variant="ghost"
                  onClick={()=>handleSeenClick()}
                   >
                  unseen
                  </Button>
                </Td>
            <Td>
              <Link to={`/item/${notification.data().itemId}`}>
              <Text>link to item </Text>
              </Link>
            </Td>
          </Tr>
          )):<>you don't have notifications</>}
    
        </Tbody>
      </Table>
    </Container>
    );
}
 
export default ProfileNotificationsTab;