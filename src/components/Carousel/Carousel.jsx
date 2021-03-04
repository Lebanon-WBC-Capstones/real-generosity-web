import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Box, Image } from '@chakra-ui/react';
import { items } from '../../assets/data/items';
import { useParams } from 'react-router-dom';
const Carouselimg = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);
  return (
    <Carousel autoPlay>
      <Box>
        <Image boxSize="500px" src={`${item.imageURL[0]}`}></Image>
      </Box>
      <Box>
        <Image boxSize="500px" src={`${item.imageURL[2]}`}></Image>
      </Box>
      <Box>
        <Image boxSize="500px" src={`${item.imageURL[2]}`}></Image>
      </Box>
    </Carousel>
  );
};
export default Carouselimg;
