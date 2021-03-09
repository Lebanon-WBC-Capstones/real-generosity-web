import {
  Box,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Search } from 'react-feather';
// import sofa from '../../assets/images/sofa.png';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ filteredCategoryCount, items }) => {
  const { category } = useParams();
  const { t } = useTranslation();
  console.log('category', category);

  return (
    <Box
      py="10"
      px="10"
      my="50px"
      as="header"
      mx="auto"
      fontSize={30}
      fontWeight={600}
      height={200}
      width={1080}
      borderRadius="20px"
      bg="gray.200"
    >
      <Flex mb="10" color="black" fontWeight={800}>
        <Text>{category ? category : 'all'}</Text>

        <Flex mx="200px" py="1">
          <InputGroup>
            <InputLeftElement children={<Search color="black" />} />
            <Input
              // value={searchInput}
              // onChange={handleSearchChange}
              width="400px"
              bg="whiteAlpha.800"
              placeholder={t('header.search')}
            />
          </InputGroup>
        </Flex>
      </Flex>

      <Flex float="right" my="-180px">
        {/* <Image src={categoryPic} maxW="241px" maxH="233px"></Image> */}
      </Flex>
      <HStack>
        <Text mt="-50px" fontWeight={200} color="gray" fontSize="20px">
          {filteredCategoryCount ? filteredCategoryCount : items ? items : 0}{' '}
          items
        </Text>
      </HStack>
    </Box>
  );
};

export default Header;
