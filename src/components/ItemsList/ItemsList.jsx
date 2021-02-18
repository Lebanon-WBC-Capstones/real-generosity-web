import React from 'react';
import {
  Box,
  Grid,
  Image,
  Flex,
  HStack,
  VStack,
  Text,
  Avatar,
} from '@chakra-ui/react';
import { MapPin } from 'react-feather';

import Card from '../Card';

const ItemsList = () => {
  return (
    <Box maxWidth="540px" bg="white" borderRadius="1px">
      <Grid templateColumns="repeat(2, 0.5fr)" gap={1} mY="4px">
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Box>
  );
};

export default ItemsList;
