import {
  Box,
  Button,
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
import { categories } from '../../assets/data/categories';

const Category = ({ setCategoryName, setCategoryPic }) => {
  return (
    <Box py="10" width={1080} fontSize={15} fontWeight={400}>
      <HStack spacing={10} mb="10" color="black">
        {categories.map((cat) => (
          <Link to={`/items/${cat.name}`}>
            <Button
              key={Date.now() + '' + Math.random()}
              onClick={() => {
                setCategoryName(cat.name);
                setCategoryPic(cat.imgURL);
              }}
            >
              {cat.name}
            </Button>
          </Link>
        ))}

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
                <Text> Newest</Text>
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
      </HStack>
    </Box>
  );
};

export default Category;
