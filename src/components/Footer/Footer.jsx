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
      // bg="gray.50"
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
          {' '}
          <Text>{t('navbar.home')}</Text>
        </Link>
        <Link to="/items">
          {' '}
          <Text>{t('navbar.items')}</Text>
        </Link>
        <Link to="/about">
          <Text>{t('navbar.about')}</Text>
        </Link>
        <Link to="/contactus">
          {' '}
          <Text>{t('navbar.contactUs')}</Text>
        </Link>
      </HStack>
      <HStack mb="2" justify="space-between" px={80} >
    
        <Box color="gray.500" fontSize="xs" >
          
          <a href="http://www.facebook.com">
            {' '}
            <Facebook />
          </a>
        </Box>
        <Box color="gray.500" fontSize="xs" >
       
          <a href="http://www.instagram.com">
            <Instagram />
          </a>
        </Box>
        <Box color="gray.500" fontSize="xl" >
        {/* mr={8} */}
          <a href="http://www.github.com">
            <GitHub />
          </a>
        </Box>
        <Box color="gray.500" fontSize="sm" >
       
          <a href="http://www.twitter.com">
            {' '}
            <Twitter />
          </a>
        </Box>
      </HStack>
      {/* <Flex mb={-8} mr="28" justify="flex-end" fontSize="xs" color="gray.500">
        &copy; {t('navbar.copy')}
      </Flex> */}
    </Flex>
  );
};

export default Footer;
