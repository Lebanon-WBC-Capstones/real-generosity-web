import React from 'react';
import AdminTaskbars from '../../components/AdminTaskbars/AdminTaskbars';
import { SimpleGrid,Heading, Container} from '@chakra-ui/react';
import { firestore } from '../../services/firebase';
import { useCollectionData, useCollection } from 'react-firebase-hooks/firestore';
import { useAuth } from '../../contexts/AuthContext';
import { useTranslation } from 'react-i18next';

function AdminPage() {
  const currentUser = useAuth();
  const { t } = useTranslation();
  
  //query all users
  const usersRef=firestore.collection('users').where('role','==','user')
  const [allUsers,allUsersLoading]=useCollectionData(usersRef)
  console.log('usersss',allUsers)

  //guery items
  const itemsCollection=firestore.collection('items')
  const [allItems,allItemsLoading]=useCollectionData(itemsCollection)
  console.log('allitems',allItems)
  //query all requests
  const requestsCollection=firestore.collection('requests')
  const [allRequests,allRequestsLoading]=useCollectionData(requestsCollection)
   console.log('allRequests',allRequests)

  if (allUsersLoading) return <>loading ...</>
  return (
    <SimpleGrid>
      <Container maxWidth="891px">
      <Heading size="lg" marginBottom="30px">
        {t('adminPage.admin')}
      </Heading>
      {/* {currentUser && allUsers?
      <AdminTaskbars allUsers={allUsers} 
                     allItems={allItems} 
                     allItemsLoading={allItemsLoading}
                     allRequests={allRequests} llRequestsLoading={allRequestsLoading}/>: ""} */}
        </Container>
    </SimpleGrid>
  );
}

export default AdminPage;
