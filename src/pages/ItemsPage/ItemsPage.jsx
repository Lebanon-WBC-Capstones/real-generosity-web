import React from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import ItemsMap from '../../components/ItemsMap/ItemsMap';
import Header from '../../components/Header';
import Category from '../../components/Category';
import ItemsList from '../../components/ItemsList';
import { items } from '../../assets/data/items';

const ItemsPage = () => {
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
    <Container my="45px" maxW="1080px">
      <Box mb="45px">
        <Header />
      </Box>
      <Box mb="45px">
        <Category />
      </Box>

      <Flex justify="space-between">
        <Box w="50%">
          <ItemsList />
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
