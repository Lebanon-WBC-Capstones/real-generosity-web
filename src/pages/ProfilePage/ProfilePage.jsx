import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileTaskbars from '../../components/ProfileTaskbars';
import { useDocumentData,useCollection } from 'react-firebase-hooks/firestore';
import { firestore } from '../../services/firebase';
import { useParams } from 'react-router-dom';


function ProfilePage() {
  const { uid } = useParams();

  //query header details from firebase
  const query = firestore.collection('users').doc(uid);
  const [data, loading, error] = useDocumentData(query);

  //query donations from firebase
  const items = firestore.collection('items').where('uid','==',uid);
  const [donations, donationsloading, donationserror] = useCollection(items);
   
  //query requests from firebase
 
   if (error) console.error(error);

   if (loading) return <>loading...</>;

  const { fullname, email, phoneNumber } = data;

  return (
    <SimpleGrid maxW="1080px" mx="auto" gap={8} mt="20">
      <ProfileHeader  fullname={fullname} 
                      email={email}
                      phoneNumber={phoneNumber}
                      uid={uid} />
      <ProfileTaskbars  uid={uid} donations={donations} donationsloading={donationsloading} />
    </SimpleGrid>
  );
}

export default ProfilePage;
