import { Box, Container, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { items } from '../../assets/data/items';
import Category from '../../components/Category';
import Header from '../../components/Header';
import ItemsList from '../../components/ItemsList';
import { useParams } from 'react-router-dom';

const ItemsPage = () => {
  const [categoryName, setCategoryName] = useState('all');
  const [categoryPic, setCategoryPic] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsCounter, setItemsCounter] = useState(0);

  const { category } = useParams();
  console.log('category', category);

  // const filtered = items.filter((item) =>
  //   item.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredCategory = items.filter((item) =>
    item.category.toLowerCase().includes(categoryName.toLowerCase())
  );

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
          {categoryName === 'all' ? (
            <ItemsList filtered={items} />
          ) : (
            <ItemsList
              filtered={filteredCategory}
              searchQuery={searchQuery}
              itemsCounter={itemsCounter}
              setItemsCounter={setItemsCounter}
              categoryName={categoryName}
            />
          )}
        </Box>
        <Box w="50%" ml={30}>
          {/* <ItemsMap /> */}
        </Box>
      </Flex>
    </Container>
  );
};

export default ItemsPage;
