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
  Tabs,
  TabList,
  Tab,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Plus } from 'react-feather';
import { categories } from '../../assets/data/categories';
import { useTranslation } from 'react-i18next';

const Category = () => {
  const { t } = useTranslation();
  return (
    <Box py="10" width={1080} as="Category" fontSize={15} fontWeight={400}>
      <HStack spacing={10} mb="10" color="black">
        <Tabs variant="soft-rounded" colorScheme="gray">
          <TabList>
            {categories.map((x) => (
              <Tab key={Date.now() + '' + Math.random()}>{x.name}</Tab>
            ))}
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
