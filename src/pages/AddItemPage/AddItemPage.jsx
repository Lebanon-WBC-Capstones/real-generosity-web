import React, { useState } from 'react';
import { Container, Flex, Box, Button } from '@chakra-ui/react';
import AddForm from '../../components/AddForm';
import MapForm from '../../components/MapForm';
import { items } from '../../assets/data/items';

function AddItemPage() {
  const [title, setTitle] = useState('');
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const [category, setCategory] = useState('');
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const [description, setDescription] = useState('');
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const [picture, setPicture] = useState([]);
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

  return (
    <Container my="45px" maxW="1080px">
      <Flex justify="space-between">
        <Box maxW="60%" maxH="60vh" ml={10} mt={8}>
          <MapForm
            currentPosition={currentPosition}
            setCurrentPosition={setCurrentPosition}
            cityName={cityName}
            setCityName={setCityName}
          />
        </Box>
        <Box ml={50}>
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
      <Flex mt={8} ml={200}>
        <Button
          width={550}
          size="md"
          colorScheme="green"
          onClick={storeItemsData}
        >
          Add Item
        </Button>
      </Flex>
    </Container>
  );
}

export default AddItemPage;
