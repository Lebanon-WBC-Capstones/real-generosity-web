import React, { useState } from 'react';
import { Container, Flex, Box } from '@chakra-ui/react';
import ItemsMap from '../../components/ItemsMap/ItemsMap';
import Header from '../../components/Header';
import Category from '../../components/Category';
import ItemsList from '../../components/ItemsList';

const ItemsPage = () => {
  const [categoryName, setCategoryName] = useState('All');
  const [categoryPic, setCategoryPic] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsCounter, setItemsCounter] = useState(0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
          <ItemsList
            searchQuery={searchQuery}
            itemsCounter={itemsCounter}
            setItemsCounter={setItemsCounter}
          />
        </Box>
        <Box w="50%" ml={30}>
          <ItemsMap />
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
