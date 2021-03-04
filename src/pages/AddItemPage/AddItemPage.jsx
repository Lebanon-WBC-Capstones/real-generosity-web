import React, { useState } from 'react';
import { Container, Flex, Box, Button } from '@chakra-ui/react';
import AddForm from '../../components/AddForm';
import MapForm from '../../components/MapForm';
import { items } from '../../assets/data/items';
import { useTranslation } from 'react-i18next';

function AddItemPage() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [picture, setPicture] = useState([]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
 const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
 const handleUploadChange = (e) => {
    setPicture(e.target.files[0]);
  };
  console.log(picture);

  const [currentPosition, setCurrentPosition] = useState({});

  const [cityName, setCityName] = useState('');

  const storeItemsData = () => {
    items.push({
      id: '',
      name: title,
      date: 'Wed May 27 2020 09:59:56 GMT+0530',
      location: {
        name: cityName,
        coords: { lat: currentPosition.lat, Ing: currentPosition.lng },
      },
      category: category,
      imageURL: [],
      description: description,
      ownerId: ' ',
      Active: true,
      isDelivered: false,
      reports: [],
      requests: [],
    });
    setTitle('');
    setCategory('');
    setDescription('');
    setPicture([]);
    setCurrentPosition({});
    setCityName('');
    // console.log(items);
  };

  const { t } = useTranslation();
  return (
    <Container my={6} maxW="6xl">
      <Flex align="center" justify="space-between">
        <Box mt={8}>
          <MapForm
            currentPosition={currentPosition}
            setCurrentPosition={setCurrentPosition}
            cityName={cityName}
            setCityName={setCityName}
          />
        </Box>
        <Box>
          <AddForm
            title={title}
            category={category}
            description={description}
            picture={picture}
            handleTitleChange={handleTitleChange}
            handleCategoryChange={handleCategoryChange}
            handleDescriptionChange={handleDescriptionChange}
            handleUploadChange={handleUploadChange}
          />
        </Box>
      </Flex>
      
        <Box mt={8} ml={300}>
        <Button
          width={500}
          size="md"
          colorScheme="green"
          onClick={storeItemsData}
        >
          {t('additem.addbutton')}
        </Button>
        </Box>
     
    </Container>
  );
}

export default AddItemPage;
