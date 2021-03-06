import React from 'react';
import {
  Box,
  Container,
  Text,
  Input,
  Select,
  Textarea,
} from '@chakra-ui/react';
import Dropzonecomp from '../Dropzone/Dropzonecomp';
import { useTranslation } from 'react-i18next';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestore } from '../../services/firebase';

const AddForm = ({ register, setImage }) => {
  const { t } = useTranslation();

  const categories = firestore.collection('categories');
  const [categorieslist, loading, error] = useCollectionData(categories);
  if (error) console.error(error);
  if (loading) return <>loading ...</>;

  return (
    <Container fontSize={15} fontWeight={400} width={400}>
      <Box>
        <Box mt={4} fontSize="lg">
          <Text mb={2}>{t('additem.title')}</Text>
          <Input
            name="title"
            ref={register}
            type="text"
            size="md"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
          />
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>{t('additem.category')}</Text>
          <Select
            name="category"
            ref={register}
            size="md"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
          >
            {categorieslist.slice(1, categorieslist.length).map((category) => (
              <option key={Date.now() + '' + Math.random()}>
                {category.name}
              </option>
            ))}
          </Select>
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>{t('additem.description')}</Text>
          <Textarea
            name="description"
            ref={register}
            size="md"
            variant="filled"
            isRequired
            focusBorderColor="green.200"
          />
        </Box>

        <Box mt={8} fontSize="lg">
          <Text mb={2}>{t('additem.uploadimages')}</Text>
          <Dropzonecomp dropzoneRef={register} setImage={setImage} />
        </Box>
      </Box>
    </Container>
  );
};

export default AddForm;
