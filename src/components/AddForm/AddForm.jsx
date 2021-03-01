import React from 'react';
import { Box, Flex, Text, Input, Select } from '@chakra-ui/react';
import Dropzonecomp from '../Dropzone/Dropzonecomp';
import { categories } from '../../assets/data/categories';

const AddForm = ({
  title,
  category,
  description,
  picture,
  handleTitleChange,
  handleCategoryChange,
  handleDescriptionChange,
  handleUploadChange,
}) => {
  return (
    <Flex fontSize={15} fontWeight={400}>
      <Box width={250}>
        <Box mt={4} fontSize="lg">
          <Text mb={2}>Title</Text>
          <Input
            value={title}
            onChange={handleTitleChange}
            size="sm"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
            maxWidth={72}
          />
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>Category</Text>
          <Select
            value={category}
            onChange={handleCategoryChange}
            size="sm"
            variant="filled"
            isRequired
            maxWidth={72}
            focusBorderColor="green.200"
          >
            {categories.map((x) => (
              <option key={Date.now() + '' + Math.random()}>{x.name}</option>
            ))}
          </Select>
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>Description</Text>
          <Input
            value={description}
            onChange={handleDescriptionChange}
            size="sm"
            variant="filled"
            isRequired
            maxWidth={72}
            focusBorderColor="green.200"
          />
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>Upload image</Text>
          <Dropzonecomp
            value={picture}
            onChange={handleUploadChange}
            size="sm"
            variant="filled"
            isRequired
            maxWidth={72}
            focusBorderColor="green.200"
          />
        </Box>
        {/* <Box mt={8} mr={80} width={350}>
          <Button colorScheme="green">Add Item</Button>
        </Box> */}
      </Box>
    </Flex>
  );
};

export default AddForm;
