import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  Flex,
  MenuList,
  Icon,
} from '@chakra-ui/react';
import { ChevronDown } from 'react-feather';
import React from 'react';
import { Plus } from 'react-feather';
import { Link } from 'react-router-dom';

const Category = ({
  setCategoryName,
  setCategoryPic,
  categories,
  toggleSort,
  oldest,
}) => {
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
            <MenuButton
              px={2}
              py={1}
              transition="all 0.2s"
              borderRadius="md"
              color="gray.400"
              _hover={{ bg: 'gray.100', color: 'green.400' }}
              _expanded={{ bg: 'gray.100' }}
            >
              <Flex>
                Sort <Icon mt={1} ml={1} as={ChevronDown} />
              </Flex>
            </MenuButton>
            <MenuList minW="max-content">
              <MenuItem onClick={oldest ? toggleSort : null}>
                <Box _hover={{ color: 'green.400' }}>By Newest</Box>
              </MenuItem>
              <MenuItem onClick={oldest ? null : toggleSort}>
                <Box _hover={{ color: 'green.400' }}>By Oldest</Box>
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
