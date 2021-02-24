import React from "react";
import { Grid, GridItem, Flex } from "@chakra-ui/react";
import CategoryCard from "../CategoryCard";
import sofa from '../../assets/images/sofa.png';
import Clothes from '../../assets/images/Clothes.png';
import book from '../../assets/images/book.png';
import toys from '../../assets/images/toys.png';
import medicalkit from '../../assets/images/medicalkit.png';
import appliances from '../../assets/images/appliances.png';

const CategoryCardsLayout = () => {

  return (
    <Flex>
      <Grid
        maxH="72"
        maxW="4xl"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(25, 1fr)"
        gap={4}
      >
        <GridItem borderRadius="xl" colSpan={8} rowSpan={12} bg="#EAEAF1">
          <CategoryCard categoryPic={sofa} direction="column" categoryName="Furniture" ml="4"></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={5} rowSpan={6} bg="#F6E8CD">
          <CategoryCard categoryPic={Clothes} direction="column" categoryName="Clothes"></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={5} rowSpan={6} bg="#CBECE9">
          <CategoryCard categoryPic={book} direction="column" categoryName="Books"></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={7} rowSpan={6} bg="#E6D0EF">
          <CategoryCard categoryPic={toys} direction="row-reverse" categoryName="Toys" mt="24"></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={7} rowSpan={6} bg="#F0D0D2">
          <CategoryCard categoryPic={medicalkit} direction="row-reverse" categoryName="Medics" mt="24"></CategoryCard>
        </GridItem>
        <GridItem borderRadius="xl" colSpan={10} rowSpan={6} bg="#CFD6F2">
          <CategoryCard categoryPic={appliances} direction="row-reverse" categoryName="Appliances" mt="24"></CategoryCard>
        </GridItem>
      </Grid>
    </Flex>
  );
}
export default CategoryCardsLayout;
