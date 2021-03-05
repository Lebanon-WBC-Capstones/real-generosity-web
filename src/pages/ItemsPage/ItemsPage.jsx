import { Box, Container, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { items } from '../../assets/data/items';
import Category from '../../components/Category';
import Header from '../../components/Header';
import ItemsList from '../../components/ItemsList';
import { useParams } from 'react-router-dom';
import { categories } from '../../assets/data/categories';
// import ItemsMap from '../../components/ItemsMap';

const ItemsPage = () => {
  const [categoryName, setCategoryName] = useState('all');
  const [categoryPic, setCategoryPic] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsCounter, setItemsCounter] = useState(0);
  const [oldest, setOldest] = useState(false);

  const { category } = useParams();
  // console.log('category', category);

  const filteredSearch = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      oldest
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

  const filteredCategory = items
    .filter((item) =>
      item.category.toLowerCase().includes(`${category}`.toLowerCase())
    )
    .sort((a, b) =>
      oldest
        ? new Date(a.date) - new Date(b.date)
        : new Date(b.date) - new Date(a.date)
    );

  const allItems = items.sort((a, b) =>
    oldest
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date)
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSort = () => {
    setOldest(!oldest);
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
          categories={categories}
          toggleSort={toggleSort}
          oldest={oldest}
        />
      </Box>

      <Flex justify="space-between">
        <Box w="50%">
          {searchQuery ? (
            <ItemsList
              filtered={filteredSearch}
              setItemsCounter={setItemsCounter}
            />
          ) : `${category}` === 'undefined' || `${category}` === 'all' ? (
            <ItemsList filtered={allItems} setItemsCounter={setItemsCounter} />
          ) : (
            <ItemsList
              filtered={filteredCategory}
              setItemsCounter={setItemsCounter}
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
