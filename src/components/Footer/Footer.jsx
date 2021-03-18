import React from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { Facebook, Instagram, GitHub, Twitter } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
const Footer = (props) => {
  const { t } = useTranslation();

  return (
    <Flex
      py="10"
      as="footer"
      justify="space-between"
      fontSize={['xx-small', 'xs', 'sm', 'xl']}
      fontWeight={600}
      width="100%"
      direction="column"
      maxW="1200px"
      {...props}
      mx="auto"
    >
      <HStack
        mb="10"
        justify="space-between"
        color="gray.500"
        _hover={{ cursor: 'pointer' }}
        align="center"
        px={['10', '48', '52', '72']}
      >
        <Link to="/">
          <Text _hover={{ color: 'green.400' }}>{t('navbar.home')}</Text>
        </Link>
        <Link to="/items">
          <Text _hover={{ color: 'green.400' }}>{t('navbar.items')}</Text>
        </Link>
        <Link to="/about">
          <Text _hover={{ color: 'green.400' }}>{t('navbar.about')}</Text>
        </Link>
        <Link to="/contactus">
          <Text _hover={{ color: 'green.400' }}>{t('navbar.contactUs')}</Text>
        </Link>
      </HStack>
      <HStack mb="2" justify="space-between" px={80}>
        <Box color="gray.500" fontSize="xs" _hover={{ color: 'green.400' }}>
          <a href="http://www.facebook.com">
            <Facebook />
          </a>
        </Box>
        <Box color="gray.500" fontSize="xs" _hover={{ color: 'green.400' }}>
          <a href="http://www.instagram.com">
            <Instagram />
          </a>
        </Box>
        <Box color="gray.500" fontSize="xl" _hover={{ color: 'green.400' }}>
          <a href="http://www.github.com">
            <GitHub />
          </a>
        </Box>
        <Box color="gray.500" fontSize="sm" _hover={{ color: 'green.400' }}>
          <a href="http://www.twitter.com">
            <Twitter />
          </a>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Footer;
