import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Card from '../Card';
import { motion } from 'framer-motion';
const ItemsList = ({ items }) => {
  return (
    <Box h={800} overflowX="auto">
      <Grid templateColumns="repeat(3, 1fr)" gap={4} p={4}>
        {items.map((item) => (
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
            <Card key={item.id} id={item.id} {...item.data()} />
          </motion.button>
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsList;
