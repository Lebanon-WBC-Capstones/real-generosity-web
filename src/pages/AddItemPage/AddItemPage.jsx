import { Box, Button, Container, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import AddForm from '../../components/AddForm';
import MapForm from '../../components/MapForm';
import { useAuth } from '../../contexts/AuthContext';
import firebase, { firestore } from '../../services/firebase';
import { useHistory } from 'react-router-dom';

function AddItemPage() {
  const user = useAuth();
  const history = useHistory();
  const [currentPosition, setCurrentPosition] = useState({});
  const [cityName, setCityName] = useState('');
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = React.useState();

  console.log('image_url', image);

  const itemsRef = firestore.collection('items');

  const { t } = useTranslation();

  const onSubmit = async (data) => {
    const { title, category, description } = data;
    try {
      //insert a new document in firestore
      const doc = await itemsRef.add({
        title,
        category,
        description,
        image_url: image,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid: user.uid,
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
            <MapForm
              currentPosition={currentPosition}
              setCurrentPosition={setCurrentPosition}
              cityName={cityName}
              setCityName={setCityName}
              register={register}
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
