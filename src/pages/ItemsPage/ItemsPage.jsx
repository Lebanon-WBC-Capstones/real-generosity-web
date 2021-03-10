import { Box, Container, Flex, Grid, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import Category from '../../components/Category';
import Header from '../../components/Header';
import ItemsList from '../../components/ItemsList';
import ItemsMap from '../../components/ItemsMap/ItemsMap';
import { firestore } from '../../services/firebase';


const ItemsPage = () => {
  const [categoryName, setCategoryName] = useState('All');
  const [categoryPic, setCategoryPic] = useState();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const query = firestore.collection('items').where('status','==',"active");
  const [items, loading, error] = useCollectionOnce(query);

  if (error) return 'an error has occured...';

  if (loading)
    return (
      <Grid minH="100vh" placeContent="center">
        <Text fontSize="6xl">Loading...</Text>
      </Grid>
    );

  return (
    <Container my="45px" maxW="1080px" fontFamily="Montserrat">
      <Box mb="45px">
        <Header
          categoryName={categoryName}
          categoryPic={categoryPic}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
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
          <ItemsList items={items.docs} />
        </Box>
        <Box w="50%" ml={30}>
          <ItemsMap items={items.docs} />
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
