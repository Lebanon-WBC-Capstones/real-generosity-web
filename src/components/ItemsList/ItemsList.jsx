import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';
import { motion } from 'framer-motion';
const ItemsList = ({ items }) => {
  return (
    <Box maxWidth="540px" bg="white" borderRadius="1px">
      <Grid templateColumns="repeat(2, 0.5fr)" gap={1} my="4px">
        {items.map((item) => (
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Card key={item.id} id={item.id} {...item.data()} />
          </motion.button>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsList;
