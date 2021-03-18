import React from 'react';
import {
  Flex,
  Text,
  Wrap,
  WrapItem,
  Stack,
  Center,
  Link,
  Box,
  Heading,
} from '@chakra-ui/react';
import CategoryCard from '../CategoryCard';
import furniture from '../../assets/images/furniture.png';
import Clothes from '../../assets/images/Clothes.png';
import book from '../../assets/images/book.png';
import medicalkit from '../../assets/images/medicalkit.png';
import appliances from '../../assets/images/appliances.png';
import toys from '../../assets/images/toys.png';
import all from '../../assets/images/all.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const CategoryCardsLayout = () => {
  const { t } = useTranslation();

  return (
    <Flex maxW="4xl" m="auto" align="center" justify="space-between">
      <Stack>
        <Box>
          <Heading size="lg" color="green.500" mb={5}>
            {' '}
            {t('categoryCards.header')}
          </Heading>
        </Box>
        {/* <Text fontSize="xl" fontWeight="medium">
          {t('categoryCards.header')}
        </Text> */}

        <Center direction="row" flexWrap="wrap" justifyContent="space-between">
          <Wrap spacing={['', '', '14', '16']} align="center">
            <WrapItem>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <CategoryCard
                  categoryPic={furniture}
                  categoryName={t('categoryCards.furniture')}
                  bgColor="#EAEAF1"
                  categoryLink="/items/furniture"
                ></CategoryCard>
              </motion.button>
            </WrapItem>
            <WrapItem>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <CategoryCard
                  categoryPic={Clothes}
                  categoryName={t('categoryCards.clothes')}
                  bgColor="#F6E8CD"
                  categoryLink="/items/clothes"
                ></CategoryCard>
              </motion.button>
            </WrapItem>

            <WrapItem>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <CategoryCard
                  categoryPic={book}
                  categoryName={t('categoryCards.books')}
                  bgColor="#CBECE9"
                  categoryLink="/items/books"
                ></CategoryCard>
              </motion.button>
            </WrapItem>

            <WrapItem>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <CategoryCard
                  categoryPic={toys}
                  categoryName={t('categoryCards.toys')}
                  bgColor="#E6D0EF"
                  categoryLink="/items/toys"
                ></CategoryCard>
              </motion.button>
            </WrapItem>

            <WrapItem>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <CategoryCard
                  categoryPic={medicalkit}
                  categoryName={t('categoryCards.medics')}
                  bgColor="#F0D0D2"
                  categoryLink="/items/medics"
                ></CategoryCard>
              </motion.button>
            </WrapItem>

            <WrapItem>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <CategoryCard
                  categoryPic={appliances}
                  categoryName={t('categoryCards.appliances')}
                  bgColor="#CFD6F2"
                  categoryLink="/items/appliances"
                ></CategoryCard>
              </motion.button>
            </WrapItem>

            <WrapItem display={{ base: 'none', md: 'block' }}>
              <Link to="/items">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CategoryCard
                    categoryPic={all}
                    categoryName="All"
                    bgColor="#EAEAF1"
                    categoryLink="/items"
                  ></CategoryCard>
                </motion.button>
              </Link>
            </WrapItem>
          </Wrap>
        </Center>
      </Stack>
    </Flex>
  );
};

export default CategoryCardsLayout;
