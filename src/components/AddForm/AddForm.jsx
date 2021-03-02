import React, { useState } from 'react';
import { Box, Flex, Text, Input, Select } from '@chakra-ui/react';
import Dropzonecomp from '../Dropzone/Dropzonecomp';
import { categories } from '../../assets/data/categories';
import { useTranslation } from 'react-i18next';

const AddForm = () => {
  const { t } = useTranslation();
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

  // const [picture, setPicture] = useState([]);
  // const handleUploadChange = (e) => {

  //   console.log('picture: ', picture);
  //   setPicture(...picture, e.target.files[0]);

  // };

  const [picture, setPicture] = useState('');
  function handleUploadChange(event) {
    setPicture(event.target.files[0]);
  }

  return (
    <Flex fontSize={15} fontWeight={400}>
      <Box width={250}>
        <Box mt={4} fontSize="lg">
          <Text mb={2}>{t('additem.title')}</Text>
          <Input
            value={Title}
            onChange={handleTitleChange}
            size="sm"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
            maxWidth={72}
          />
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>{t('additem.category')}</Text>
          <Select
            value={Category}
            onChange={handleCategoryChange}
            size="sm"
            variant="filled"
            isRequired
            maxWidth={72}
            focusBorderColor="green.200"
          >
            {categories.map((x) => (
              <option>{x.name}</option>
            ))}
          </Select>
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>{t('additem.description')}</Text>
          <Input
            value={Description}
            onChange={handleDescriptionChange}
            size="sm"
            variant="filled"
            isRequired
            maxWidth={72}
            focusBorderColor="green.200"
          />
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>{t('additem.uploadimages')}</Text>
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
