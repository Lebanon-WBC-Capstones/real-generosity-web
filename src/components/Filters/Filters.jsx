import { Button, Grid, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
const CATEGORIES = [
  'All',
  'Books',
  'Appliances',
  'Toys',
  'Clothes',
  'Medics',
  'Furniture',
];

const Filters = () => {
  const { category } = useParams();
  const renders = React.useRef(0);
  console.log('Filters.jsx renders', renders.current++);
  return (
    <Grid gap={4} fontSize={15} mb="20px">
      <HStack spacing={8}>
        {CATEGORIES.map((cat, index) =>
          cat === 'All' ? (
            <Link key={index} to={`/items`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button colorScheme={category === undefined ? 'green' : null}>
                  {cat}
                </Button>
              </motion.button>
            </Link>
          ) : (
            <Link key={index} to={`/items/${cat.toLowerCase()}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  colorScheme={cat.toLowerCase() === category ? 'green' : null}
                >
                  {cat}
                </Button>
              </motion.button>
            </Link>
          )
        )}
      </HStack>
    </Grid>
  );
};

export default Filters;
