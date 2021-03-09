import React from 'react';
import { Flex } from '@chakra-ui/react';
import CategoryCard from '../CategoryCard';
import furniture from '../../assets/images/furniture.png';
import Clothes from '../../assets/images/Clothes.png';
import book from '../../assets/images/book.png';
import toys from '../../assets/images/toys.png';
import medicalkit from '../../assets/images/medicalkit.png';
import appliances from '../../assets/images/appliances.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CategoryCardsLayout = ({ setQuery }) => {
  const { t } = useTranslation();

  return (
    <Flex direction="row" align="center" justifyContent="space-between" maxW="4xl" m="auto" flexWrap="wrap">
      <Flex mr="3">

        <CategoryCard
          categoryPic={furniture}
          categoryName={t('categoryCards.furniture')}
          onClick={() => setQuery('furniture')}
          bgColor="#EAEAF1"
        ></CategoryCard>
      </Flex>

      <Flex mt="9" mx="3">
        <CategoryCard
          categoryPic={Clothes}
          categoryName={t('categoryCards.clothes')}
          onClick={() => setQuery('clothes')}
          bgColor="#F6E8CD"
        ></CategoryCard>
      </Flex>

      <Flex mx="3">
        <CategoryCard
          categoryPic={book}
          categoryName={t('categoryCards.books')}
          onClick={() => setQuery('books')}
          bgColor="#CBECE9"
        ></CategoryCard>
      </Flex>

      <Flex mx="3">
        <CategoryCard
          categoryPic={toys}
          categoryName={t('categoryCards.toys')}
          onClick={() => setQuery('toys')}
          bgColor="#E6D0EF"
        ></CategoryCard>
      </Flex>

      <Flex mx="3" mt="9">
        <CategoryCard
          categoryPic={medicalkit}
          categoryName={t('categoryCards.medics')}
          onClick={() => setQuery('medics')}
          bgColor="#F0D0D2"
        ></CategoryCard>
      </Flex>

      <Flex ml="3">
        <CategoryCard
          categoryPic={appliances}
          categoryName={t('categoryCards.appliances')}
          onClick={() => setQuery('appliances')}
          bgColor="#CFD6F2"
        ></CategoryCard>
      </Flex>
    </Flex>
  );
};

export default CategoryCardsLayout;