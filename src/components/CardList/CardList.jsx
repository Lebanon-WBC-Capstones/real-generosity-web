import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';
import { items } from '../../assets/data/items';
import { useTranslation } from 'react-i18next';

const CardList = () => {
  const { t } = useTranslation();
  return (
    <Box maxWidth="4xl" mx="auto">
      <Box d="flex" justifyContent="space-between" fontSize="md" mb="5px">
        <Box>
          <Heading size="md">{t('cardlist.heading')}</Heading>
        </Box>
        <Box>
          <Link to="/items">
            <Heading size="md" color="blue.400">
              {t('cardlist.heading1')}
            </Heading>
          </Link>
        </Box>
      </Box>
      <SimpleGrid spacing={2} bg="white" columns={[1, 2, 3, 4]}>
        {items.slice(0, 4).map((item) => (
          <Card {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CardList;
