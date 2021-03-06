import React, { useState } from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import ItemsMap from '../../components/ItemsMap/ItemsMap';
import Header from '../../components/Header';
import Category from '../../components/Category';
import ItemsList from '../../components/ItemsList';
import { firestore } from '../../services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { items } from '../../assets/data/items';

const ItemsPage = () => {
  const [categoryName, setCategoryName] = useState('All');
  const [categoryPic, setCategoryPic] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsCounter, setItemsCounter] = useState(0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const query = firestore.collection('items');
  const [items, loading, error] = useCollection(query);

  if (error) return 'an error has occured...';
  
  const initialCenter = {
    lat: 34.4346,
    lng: 35.8362,
  };

  const mapSize = {
    height: '80vh',
    width: '40vw',
  };

  const mapZoom = 10;

  const itemsCoords = items.map((item) => item.location.coords);


  return (
    <Container my="45px" maxW="1080px" fontFamily="Montserrat">
      <Box mb="45px">
        <Header
          categoryName={categoryName}
          categoryPic={categoryPic}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          itemsCounter={itemsCounter}
        />
      </Box>

      <Box mb="45px">
        <Category
          setCategoryName={setCategoryName}
          setCategoryPic={setCategoryPic}
        />
      </Box>

      <Flex justify="space-between">
        <Box w="50%">
          {loading && 'loading...'}
          {items && <ItemsList items={items.docs} />}
        </Box>
        <Box w="50%" ml={30}>
          <ItemsMap
            coords={itemsCoords}
            initialCenter={initialCenter}
            mapSize={mapSize}
            mapZoom={mapZoom}
          />
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
