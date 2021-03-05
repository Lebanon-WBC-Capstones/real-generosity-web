import React from 'react';
import { Box, Grid } from '@chakra-ui/react';
import Card from '../Card';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../../services/firebase';

const ItemsList = () => {
   const items = firestore.collection('items')
   const [itemslist,loading,error]=useCollectionData(items)
     console.log(loading)
     console.log("items",itemslist)
     if (error) console.error(error)
     if (loading) return <>loading ...</>
  return (
    <Box maxWidth="540px" bg="white" borderRadius="1px">
      <Grid templateColumns="repeat(2, 0.5fr)" gap={1} my="4px">
        { 
        itemslist.map((item) => (
          <Card key={Date.now() + '' + Math.random()} {...item} />
        ))}
      </Grid>
    </Box>
  );
};

export default ItemsList;
