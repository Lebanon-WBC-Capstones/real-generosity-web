import React from 'react';
import { Flex, Text, Wrap, WrapItem, Stack, Center, Link } from '@chakra-ui/react';
import CategoryCard from '../CategoryCard';
import furniture from '../../assets/images/furniture.png';
import Clothes from '../../assets/images/Clothes.png';
import book from '../../assets/images/book.png';
import toys from '../../assets/images/toys.png';
import medicalkit from '../../assets/images/medicalkit.png';
import appliances from '../../assets/images/appliances.png';
import all from '../../assets/images/all.png';
import { useTranslation } from 'react-i18next';

const CategoryCardsLayout = ({ setQuery }) => {
  const { t } = useTranslation();

  return (
    <Flex maxW="4xl" m="auto" align="center" justify="space-between">
      <Stack>
      <Text fontSize="xl" fontWeight="medium">Categories</Text>

    <Center direction="row" flexWrap="wrap" justifyContent="space-between">
    <Wrap spacing={["","","14","16"]} align="center">
  <WrapItem>
        <CategoryCard
          categoryPic={furniture}
          categoryName={t('categoryCards.furniture')}
          onClick={() => setQuery('furniture')}
          bgColor="#EAEAF1"
        ></CategoryCard></WrapItem>
 <WrapItem>
        <CategoryCard
          categoryPic={Clothes}
          categoryName={t('categoryCards.clothes')}
          onClick={() => setQuery('clothes')}
          bgColor="#F6E8CD"
        ></CategoryCard>
        </WrapItem>

        <WrapItem>
        <CategoryCard
          categoryPic={book}
          categoryName={t('categoryCards.books')}
          onClick={() => setQuery('books')}
          bgColor="#CBECE9"
        ></CategoryCard>
        </WrapItem>

        <WrapItem>
        <CategoryCard
          categoryPic={toys}
          categoryName={t('categoryCards.toys')}
          onClick={() => setQuery('toys')}
          bgColor="#E6D0EF"
        ></CategoryCard>
        </WrapItem>

        <WrapItem>
        <CategoryCard
          categoryPic={medicalkit}
          categoryName={t('categoryCards.medics')}
          onClick={() => setQuery('medics')}
          bgColor="#F0D0D2"
        ></CategoryCard>
        </WrapItem>

        <WrapItem>
        <CategoryCard
          categoryPic={appliances}
          categoryName={t('categoryCards.appliances')}
          onClick={() => setQuery('appliances')}
          bgColor="#CFD6F2"
        ></CategoryCard>
          </WrapItem>

          <WrapItem display={{ base: "none", md: "block" }}>
            <Link to="/items">
        <CategoryCard
          categoryPic={all}
          categoryName="All"
          bgColor="#EAEAF1"
        ></CategoryCard>
        </Link>
          </WrapItem>
</Wrap>

    </Center>
    </Stack>
    </Flex>
  );
};

export default CategoryCardsLayout;