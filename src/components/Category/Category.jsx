import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Text,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
  Button,
  ButtonGroup,
  IconButton,
} from '@chakra-ui/react';
import { Plus } from 'react-feather';

const Category = () => {
  return (
    <Box py="10" px="20" as="Category" fontSize={15} fontWeight={400}>
      <HStack mx="50px" spacing={10} mb="10" color="black">
        <Text>All</Text>
        <Text> Furniture</Text>
        <Text>Books</Text>
        <Text>Toys</Text>
        <Text>Medics</Text>
        <Text>Appliances</Text>
        <Text>Clothes</Text>

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
              <MenuItem></MenuItem>
            </MenuList>
          </Menu>
        </HStack>

        <HStack pl={350}>
          <Button color="white" bg="green.400">
            <Plus />
            Submit Donation
          </Button>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Category;
