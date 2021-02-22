import React from 'react';
import {
  Box,
  HStack,
  Text,
  MenuButton,
  MenuList,
  Menu,
  MenuItem,
  Button,
  Tabs, TabList, Tab,
} from '@chakra-ui/react';
import { Plus } from 'react-feather';

const Category = () => {
  return (
    <Box py="10"  width={1080} as="Category" fontSize={15} fontWeight={400}>
      <HStack spacing={10} mb="10" color="black">
      <Tabs  variant="soft-rounded" colorScheme="gray">
        <TabList>
          <Tab>All</Tab>
          <Tab>Furniture</Tab>
          <Tab>Books</Tab>
          <Tab>Toys</Tab>
          <Tab>Medics</Tab>
          <Tab>Appliances</Tab>
          <Tab>Clothes</Tab>
          </TabList>
          </Tabs>

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
