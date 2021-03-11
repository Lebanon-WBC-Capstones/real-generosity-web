import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileTaskbars from '../../components/ProfileTaskbars';
import { useDocumentData, useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../../services/firebase';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const { uid, tab } = useParams();
  let tabIndex = 0;
  switch (tab) {
    case 'notifications':
      tabIndex = 1;
      break;
    case 'donations':
      tabIndex = 0;
      break;
    default:
      tabIndex = 0;
  }
  const handleTabsChange = () => {};

  //query header details from firebase
  const query = firestore.collection('users').doc(uid);
  const [data, loading, error] = useDocumentData(query);

  //query donations from firebase

  const items = firestore
    .collection('items')
    .where('uid', '==', uid)
    .where('status', '==', 'active')
    //.orderBy('createdAt', 'desc');
  const [donations, donationsLoading] = useCollection(items);
  console.log(donations)

  //query notifications from firebase
  const notifications = firestore
    .collection('notifications')
    .where('targetId', '==', uid)
   // .orderBy('createdAt', 'desc');
    
  const [notify, notifyLoading] = useCollection(notifications);
   console.log("notification",notify)

  if (error) console.error(error);

  if (loading) return <>loading...</>;

  const { fullname, email, phoneNumber } = data;

  return (
    <SimpleGrid maxW="1080px" mx="auto" gap={8} mt="20">
      <ProfileHeader
        fullname={fullname}
        email={email}
        phoneNumber={phoneNumber}
        uid={uid}
      />
      <ProfileTaskbars
        uid={uid}
        donations={donations}
        donationsLoading={donationsLoading}
        notify={notify}
        notifyLoading={notifyLoading}
        tabIndex={tabIndex}
        handleTabsChange={handleTabsChange}
      />
    </SimpleGrid>
  );
}

export default ProfilePage;
