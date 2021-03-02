import React from 'react';
import { Button } from '@chakra-ui/react';
import firebase, { auth, firestore } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

let db = firebase.firestore();
const writeData = () => {
  db.collection('us')
    .doc('LA')
    .set({
      name: 'usa',
      state: 'CA',
      country: 'USA',
    })
    .then(() => {
      console.log('Document successfully written!');
    })
    .catch((error) => {
      console.error('Error writing document: ', error);
    });
};

const DeployingData = () => {
  return <Button onClick={writeData}>export data</Button>;
};

export default DeployingData;
