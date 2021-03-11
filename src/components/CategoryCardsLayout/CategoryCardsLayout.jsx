import { Flex, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import appliances from '../../assets/images/appliances.png';
import book from '../../assets/images/book.png';
import Clothes from '../../assets/images/Clothes.png';
import medicalkit from '../../assets/images/medicalkit.png';
import sofa from '../../assets/images/sofa.png';
import toys from '../../assets/images/toys.png';
import CategoryCard from '../CategoryCard';

const CategoryCardsLayout = () => {
  const { t } = useTranslation();

  return (
    <Flex justifyContent="center" maxWidth="4xl" mx="auto" mt={['0', '0', '24', '0']}>
      <Grid
        maxH="72"
        maxW="4xl"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(25, 1fr)"
        gap={4}
      >
        <GridItem borderRadius="xl" colSpan={8} rowSpan={12} bg="#EAEAF1">
          <CategoryCard
            categoryPic={sofa}
            direction="column"
            categoryName={t('categoryCards.furniture')}
            ml="4"
          ></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={5} rowSpan={6} bg="#F6E8CD">
          <CategoryCard
            categoryPic={Clothes}
            direction="column"
            categoryName={t('categoryCards.clothes')}
          ></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={5} rowSpan={6} bg="#CBECE9">
          <CategoryCard
            categoryPic={book}
            direction="column"
            categoryName={t('categoryCards.books')}
          ></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={7} rowSpan={6} bg="#E6D0EF">
          <CategoryCard
            categoryPic={toys}
            direction="row-reverse"
            categoryName={t('categoryCards.toys')}
            mt="24"
          ></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={7} rowSpan={6} bg="#F0D0D2">
          <CategoryCard
            categoryPic={medicalkit}
            direction="row-reverse"
            categoryName={t('categoryCards.medics')}
            mt="24"
          ></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={10} rowSpan={6} bg="#CFD6F2">
          <CategoryCard
            categoryPic={appliances}
            direction="row-reverse"
            categoryName={t('categoryCards.appliances')}
            mt="24"
          ></CategoryCard>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default CategoryCardsLayout;
