import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Plus } from 'react-feather';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  'All',
  'Books',
  'Appliances',
  'Toys',
  'Clothes',
  'Medics',
  'Furniture',
];

const Filters = () => {
  const renders = React.useRef(0);
  console.log('Filters.jsx renders', renders.current++);
  return (
    <Box py="10" width={1080} fontSize={15} fontWeight={400}>
      <Flex justifyContent="space-between" mb="10" color="black">
        <Flex>
          {CATEGORIES.map((cat, index) =>
            cat === 'All' ? (
              <Link key={index} to={`/items`}>
                <Button ml={4}>{cat}</Button>
              </Link>
            ) : (
              <Link key={index} to={`/items/${cat.toLowerCase()}`}>
                <Button ml={4}>{cat}</Button>
              </Link>
            )
          )}
        </Flex>

        <HStack>
          <Menu>
            <Text color="gray.400">SortedBy:</Text>
            <MenuButton
              transition="all 0.2s"
              borderRadius="md"
              _hover={{ bg: 'gray.100', color: 'green.400' }}
              _expanded={{ bg: 'gray.100' }}
            >
              <Box>
                <Text>Newest</Text>
              </Box>
            </MenuButton>
            <MenuList minW="max-content">
              <MenuItem>
                <Box _hover={{ color: 'green.400' }}>Oldest</Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <HStack pl={100}>
          <Link to="/add-item">
            <Button color="white" bg="green.400">
              <Plus />
              Submit Donation
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Filters;
