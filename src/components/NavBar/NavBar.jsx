import React from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  Text,
  HStack,
  Button,
  Icon,
} from '@chakra-ui/react';
import { Globe } from 'react-feather';

function NavBar() {
  return (
    <Box>
      <Flex
        justify="space-between"
        align="center"
        mx={16}
        mt={3}
        fontSize="md"
        fontWeight="medium"
      >
        <Box fontSize="2xl">LOGO</Box>

        <HStack spacing={50} color="gray.400" _hover={{ cursor: 'pointer' }}>
          <Link to="/">
            <Text _hover={{ color: 'green.400' }}>Home</Text>
          </Link>
          <Link to="/items">
            <Text _hover={{ color: 'green.400' }}>Items</Text>
          </Link>
          <Link to="/about">
            <Text _hover={{ color: 'green.400' }}>About</Text>
          </Link>
          <Link to="/contactus">
            <Text _hover={{ color: 'green.400' }}>Contact us</Text>
          </Link>
        </HStack>

        <Flex>
          <Menu>
            <MenuButton
              p={2}
              transition="all 0.2s"
              borderRadius="md"
              _hover={{ bg: 'gray.100', color: 'green.400' }}
              _expanded={{ bg: 'gray.100' }}
            >
              <Box color="gray.400">
                <Icon as={Globe} mr={0.5} /> EN
              </Box>
            </MenuButton>
            <MenuList minW="max-content">
              <MenuItem>
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  FR
                </Box>
              </MenuItem>
              <MenuItem>
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  AR
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
          <Link to="/auth/signin">
            <Button
              variant="outline"
              _hover={{ bg: 'green.400', color: 'white' }}
              _focus={{ boxShadow: 'none' }}
              colorScheme="black"
              ml={2}
            >
              Get Started
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
