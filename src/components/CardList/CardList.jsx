import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';

const CardList = ({ items }) => {
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
        {items.map((item) => {
          console.log(item.data());
          console.log(item.id);
          return <Card key={item.id} id={item.id} {...item.data()} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

export default CardList;
