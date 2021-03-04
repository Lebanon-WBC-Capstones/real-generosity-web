import React from 'react';
import { Grid, GridItem, Flex } from '@chakra-ui/react';
import CategoryCard from '../CategoryCard';
import sofa from '../../assets/images/sofa.png';
import Clothes from '../../assets/images/Clothes.png';
import book from '../../assets/images/book.png';
import toys from '../../assets/images/toys.png';
import medicalkit from '../../assets/images/medicalkit.png';
import appliances from '../../assets/images/appliances.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CategoryCardsLayout = () => {
  const { t } = useTranslation();

  return (
    <Flex justifyContent="center">
      <Grid
        maxH="72"
        maxW="4xl"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(25, 1fr)"
        gap={4}
      >
        <GridItem borderRadius="xl" colSpan={8} rowSpan={12} bg="#EAEAF1">
          <Link to="/items/furniture">
            <CategoryCard
              categoryPic={sofa}
              direction="column"
              categoryName={t('categoryCards.furniture')}
              ml="4"
            ></CategoryCard>
          </Link>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={5} rowSpan={6} bg="#F6E8CD">
          <Link to="/items/clothes">
            <CategoryCard
              categoryPic={Clothes}
              direction="column"
              categoryName={t('categoryCards.clothes')}
            ></CategoryCard>
          </Link>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={5} rowSpan={6} bg="#CBECE9">
          <Link to="/items/book">
            <CategoryCard
              categoryPic={book}
              direction="column"
              categoryName={t('categoryCards.books')}
            ></CategoryCard>
          </Link>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={7} rowSpan={6} bg="#E6D0EF">
          <Link to="/items/toys">
            <CategoryCard
              categoryPic={toys}
              direction="row-reverse"
              categoryName={t('categoryCards.toys')}
              mt="24"
            ></CategoryCard>
          </Link>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={7} rowSpan={6} bg="#F0D0D2">
          <Link to="/items/medics">
            <CategoryCard
              categoryPic={medicalkit}
              direction="row-reverse"
              categoryName={t('categoryCards.medics')}
              mt="24"
            ></CategoryCard>
          </Link>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={10} rowSpan={6} bg="#CFD6F2">
          <Link to="/items/appliances">
            <CategoryCard
              categoryPic={appliances}
              direction="row-reverse"
              categoryName={t('categoryCards.appliances')}
              mt="24"
            ></CategoryCard>
          </Link>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default CategoryCardsLayout;
