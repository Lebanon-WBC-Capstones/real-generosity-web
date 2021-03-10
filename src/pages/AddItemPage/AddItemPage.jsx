import { Box, Button, Container, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import AddForm from '../../components/AddForm';
import Map from '../../components/Map';
import { useAuth } from '../../contexts/AuthContext';
import firebase, { firestore } from '../../services/firebase';

function AddItemPage() {
  const user = useAuth();
  const history = useHistory();
  const { t } = useTranslation();
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState();

  const [currentPosition, setCurrentPosition] = useState({
    lat: null,
    lng: null,
  });

  const { lat: latitude, lng: longitude } = currentPosition;
  const location = new firebase.firestore.GeoPoint(latitude, longitude);

  const itemsRef = firestore.collection('items');

  const onSubmit = async (data) => {
    console.log(data);
    const { title, category, description } = data;
    try {
      //insert a new document in firestore
      const doc = await itemsRef.add({
        title,
        category,
        description,
        location,
        image_url: image,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: user.uid,
        status: "active",
      });
      //grab the document id
      const docId = await doc.id;
      //redirect user to the relevant item page
      history.push(`/item/${docId}`);
    } catch (error) {
      console.log('an error has occured...', error);
    }
    reset();
  };
  return (
    <Container my="45px" maxW="5xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex justify="space-between">
          <Box maxW="50vw" maxH="60vh" ml={10} mt={8}>
            <Map
              currentPosition={currentPosition}
              setCurrentPosition={setCurrentPosition}
            />
          </Box>
          <Box maxW="50vw">
            <AddForm register={register} setImage={setImage} />
          </Box>
        </Flex>

        <Box mt={8} ml={200}>
          <Button width={550} size="md" colorScheme="green" type="submit">
            {t('additem.addbutton')}
          </Button>
        </Box>
      </form>
    </Container>
  );
}

export default AddItemPage;
