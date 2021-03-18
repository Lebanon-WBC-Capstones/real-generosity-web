import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import React from 'react';
import { Plus, Search } from 'react-feather';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const CATEGORIES = [
  'All',
  'Books',
  'Appliances',
  'Toys',
  'Clothes',
  'Medics',
  'Furniture',
];

const Filters = ({ setSearch }) => {
  const renders = React.useRef(0);
  console.log('Filters.jsx renders', renders.current++);
  return (
    <Box py="10" width={1080} fontSize={15} fontWeight={400}>
      <Flex justifyContent="space-between" mb="10" color="black">
        <Flex>
          {CATEGORIES.map((cat, index) =>
            cat === 'All' ? (
              <Link key={index} to={`/items`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button ml={4}>{cat}</Button>
                </motion.button>
              </Link>
            ) : (
              <Link key={index} to={`/items/${cat.toLowerCase()}`}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button ml={4}>{cat}</Button>
                </motion.button>
              </Link>
            )
          )}
        </Flex>

        <HStack pl={100}>
          <Link to="/add-item">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button colorScheme="green">
                <Plus />
                Submit Donation
              </Button>
            </motion.button>
          </Link>
        </HStack>
      </Flex>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearch(e.target.search.value);
          e.target.reset();
        }}
      >
        <InputGroup>
          <InputLeftElement children={<Search color="black" />} />
          <Input
            name="search"
            width="400px"
            bg="whiteAlpha.800"
            placeholder={'search...'}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default Filters;
