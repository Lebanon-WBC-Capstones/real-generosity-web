import React, { useState } from 'react';
import { Container, Flex, Box, Button } from '@chakra-ui/react';
import AddForm from '../../components/AddForm';
import MapForm from '../../components/MapForm';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

function AddItemPage() {
  // const [title, setTitle] = useState('');
  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const [category, setCategory] = useState('');
  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value);
  // };

  // const [description, setDescription] = useState('');
  // const handleDescriptionChange = (e) => {
  //   setDescription(e.target.value);
  // };

  // const [picture, setPicture] = useState([]);
  // const handleUploadChange = (e) => {
  //   setPicture(e.target.files[0]);
  // };
  // console.log(picture);

  const [currentPosition, setCurrentPosition] = useState({});

  const [cityName, setCityName] = useState('');

  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const [image, setImage] = React.useState();
  const onSubmit = (data) => {
    data.image = image;
    console.log(data);
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
