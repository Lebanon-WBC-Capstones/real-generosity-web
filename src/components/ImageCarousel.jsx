import React, { useEffect,useState } from "react";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import {Box} from "@chakra-ui/react"
const ImageCarousel = () => {
  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  // const [images,setImages]=useState('')
  // const call=()=>{
  //    fetch("./assets/data.json") 
  //    .then(response => response.json())
  //    .then(res => setImages(res.item.imageURL.map(url => ({
  //     original: `${url}=w1024`,
  //     thumbnail: `${url}=w100`
  //    }))));

  //  }

  return (<Box maxW="430px" maxH="500px" px="4" pb="4" border="1px" margin="auto" borderRadius="lg" > <ImageGallery items={images} />  </Box>);
}
 
export default ImageCarousel;