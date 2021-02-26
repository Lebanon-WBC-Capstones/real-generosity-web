import React, { useState } from 'react';
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Flex,
  Input,
  Button,
  Select
} from '@chakra-ui/react';
import Dropzonecomp from '../../components/Dropzone/Dropzonecomp';
import data from '../../assets/data/categories.json';

const AddForm = () => {


const [Title, setTitle] = useState('');
const handleTitleChange = (e) => {
  setTitle(e.target.value);
};

const [Category, setCategory] = useState('');
const handleCategoryChange = (e) => {
  setCategory(e.target.value);
};

const [Description, setDescription] = useState('');
const handleDescriptionChange = (e) => {
  setDescription(e.target.value);
};

const [Location, setLocation] = useState('');
const handleLocationChange = (e) => {
  setLocation(e.target.value);
};
const [picture, setPicture] = useState('');
const handleUploadChange = (e) => {
    console.log('picture: ', picture);
    setPicture(...picture, e.target.files[0]);
};
return (
    
    <Flex fontSize={15} fontWeight={400}>
     <Box mx={300} my="auto" fontSize="lg" >
              <Text mb={2}>Upload image</Text>
              <Dropzonecomp width="20rem" />
            </Box>
<Box >
            <Box mt={4} fontSize="lg">
              <Text mb={2}>Title</Text>
              <Input
                value={Title}
                onChange={handleTitleChange}
                size="sm"
                variant="filled"
                isRequired
                focusBorderColor="green.200"
               
              />
            </Box>
          
            <Box mt={8} fontSize="lg">
            <Text mb={2}>Category</Text>
              <Select placeholder="choose a category" value={Category}
                onChange={handleCategoryChange}
                size="sm"
                variant="filled"
                isRequired
                focusBorderColor="green.200">
              {data.categories.map(x=><option>{x.name}</option>)}

              </Select>
            </Box>

            <Box mt={8} fontSize="lg">
              <Text mb={2}>Description</Text>
              <Input
                value={Description}
                onChange={handleDescriptionChange}
                size="sm"
                variant="filled"
                isRequired
               
                focusBorderColor="green.200"
              />
            </Box>
            <Box mt={8} fontSize="lg">
              <Text mb={2}>Location</Text>
              <Input
                value={Location}
                onChange={handleLocationChange}
                size="sm"
                variant="filled"
                isRequired
                maxWidth={72}
                focusBorderColor="green.200"
              />
            </Box>
            
            </Box>
           
          
            <Box mb={20}>
              <Button colorScheme="green" w={172}>
                Add Item
              </Button>
            </Box>
           
            
        </Flex>



  
        
    
     
     
  );
}

export default AddForm;
