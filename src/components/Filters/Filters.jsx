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
// import { useTranslation } from 'react-i18next';

const CATEGORIES = [
  'All',
  'Books',
  'Appliances',
  'Toys',
  'Clothes',
  'Medics',
  'Furniture',
];

const Filters = ({ setCategoryName }) => {
  // const { t } = useTranslation();
  return (
    <Box py="10" width={1080} fontSize={15} fontWeight={400}>
      <Flex justifyContent="space-between" mb="10" color="black">
        <Flex>
          <Link to={`/items`}>
            {CATEGORIES.map((cat, index) => (
              <Button key={index} onClick={() => setCategoryName(cat)} ml={4}>
                {cat}
              </Button>
            ))}
          </Link>
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
