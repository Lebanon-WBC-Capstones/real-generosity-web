import React from 'react';
import { Button } from '@chakra-ui/react';
import firebase, { auth, firestore } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

let db = firebase.firestore();
const categoriesData = [
  {
    id: '0',
    name: 'All',
    imgURL:
      'https://purepng.com/public/uploads/thumbnail//purepng.com-chair-brown-greyobjectschair-brown-greychair-furniture-decoration-821523987859sgtve.png',
  },

  {
    id: '1',
    name: 'Furniture',
    imgURL:
      'https://purepng.com/public/uploads/thumbnail//purepng.com-chair-brown-greyobjectschair-brown-greychair-furniture-decoration-821523987859sgtve.png',
  },
  {
    id: '2',
    name: 'Clothes',
    imgURL:
      'https://www.netclipart.com/pp/m/102-1028101_clothes-on-rack-png-rack-of-clothes-png.png',
  },
  {
    id: '3',
    name: 'Books',
    imgURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4W0xeIx1mEQKd44juctdrihPGD6FQ3CnCw&usqp=CAU',
  },
  {
    id: '4',
    name: 'Toys',
    imgURL:
      'https://freepngimg.com/thumb/toy/33754-7-toy-transparent-background.png',
  },
  {
    id: '5',
    name: 'Medics',
    imgURL:
      'https://www.nicepng.com/png/detail/31-316523_medicine-clipart-medical-camp-cross-medical-transparent-background.png',
  },
  {
    id: '6',
    name: 'Appliances',
    imgURL:
      'data:image/jpeg;base64,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',
  },
];

const usersData = [
  {
    userName: 'Nour',
    email: 'hello@gmail.com',
    id: '600',
    uid: '37NCea1PBfeuYCRpNUiDiRhoer8232',
    status: 'normalUser',
    idCard: [
      'https://imcdn.org/uploads/2017/08/lebanese-id-card.jpg',
      'https://imcdn.org/uploads/2017/08/lebanese-id-card.jpg',
    ],
    avatar:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
    mobileNumber: '70123456',
    donatedItems: [{ id: 'item02' }],
    requestedItems: [],
    reportedItems: [],
  },
  {
    userName: 'Nour',
    email: 'hello@gmail.com',
    id: '500',
    uid: '37NCea1PBfeuYCRpNUiDiRho6BH2',
    status: 'normalUser',
    idCard: [
      'https://imcdn.org/uploads/2017/08/lebanese-id-card.jpg',
      'https://imcdn.org/uploads/2017/08/lebanese-id-card.jpg',
    ],
    avatar:
      'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg',
    mobileNumber: '70123456',
    donatedItems: [{ id: 'item01' }],
    requestedItems: [],
    reportedItems: [],
  },
];

// categoriesData.forEach((category)=>{
//    return db.collection("categories").doc(`${category.id}`).set({
//       id=category.id,
//       name=category.name,
//       imageUrl=category.imgURL
//    })
// })

const writeData = () => {
  // categoriesData.forEach((category)=>{
  //    return db.collection("categories").doc(`${category.id}`).set({
  //       id:category.id,
  //       name:category.name,
  //       imageUrl:category.imgURL
  //    })
  // })
  usersData.forEach((user) => {
    return db
      .collection('users')
      .doc(`${user.id}`)
      .set({
        userName: user.userName,
        email: user.email,
        id: user.id,
        uid: user.uid,
        avatar: user.avatar,
        status: user.status,
        idCard: user.idCard,
        mobileNumber: user.mobileNumber,
        donatedItems: user.donatedItems.map((item) =>
          db.doc('items/' + item.id)
        ),
        requestedItems: user.requestedItems,
        reportedItems: user.reportedItems,
      });
  });

  db.collection('items')
    .doc('Item02')
    .set({ category: db.doc('categories/1') })
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
