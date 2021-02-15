import React from 'react';
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
        fonts="
            Montserrat"
        fontSize={16}
        fontWeight={600}
        bg="transparent"
      >
        <Box fontSize={24}>LOGO</Box>

        <HStack spacing={50} color="gray.400" _hover={{ cursor: 'pointer' }}>
          <Text _hover={{ color: 'green.400' }}>Home</Text>
          <Text _hover={{ color: 'green.400' }}>Items</Text>
          <Text _hover={{ color: 'green.400' }}>About</Text>
          <Text _hover={{ color: 'green.400' }}>Contact us</Text>
        </HStack>

        <Flex>
          <Menu>
            <MenuButton
              p={1}
              transition="all 0.2s"
              borderRadius="md"
              _hover={{ bg: 'gray.100', color: 'green.400' }}
              _expanded={{ bg: 'gray.100' }}
            >
              <Box color="gray.400">
                <Icon as={Globe} mr={0.5} /> EN
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  <Icon as={Globe} mr={2} /> FR
                </Box>
              </MenuItem>
              <MenuItem>
                <Box color="gray.400" _hover={{ color: 'green.400' }}>
                  <Icon as={Globe} mr={2} /> AR
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>

          <Button variant="outline" colorScheme="black" ml={2}>
            Get Started
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
