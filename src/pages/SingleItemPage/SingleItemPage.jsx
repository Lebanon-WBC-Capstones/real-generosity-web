import {
  Box,
  Container,
  Image,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Skeleton,
  GridItem,
} from '@chakra-ui/react';
import React from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import ItemDetails from '../../components/ItemDetails';
import ItemRequests from '../../components/ItemRequests';
// import Carouselimg from '../../components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { firestore } from '../../services/firebase';
import { useAuth } from '../../contexts/AuthContext';

const SingleItemPage = () => {
  // delete item function
  const handleDelete = () => {
    console.log('item deleted');
  };
  // requestModal functions
  const [value, setValue] = React.useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleRequest = () => {
    console.log(value);
  };

  //query the item from firebase
  const { id } = useParams();
  const currentUser = useAuth();
  const query = firestore.collection('items').doc(id);
  const [item, loading, error] = useDocumentData(query);
  const { t } = useTranslation();

  const isOwner = item && item?.uid === currentUser?.uid;

  if (error) return 'an error has occured...';

  if (loading) {
    return (
      <Container maxW="1080px" minH="600px" mx="auto" my={24}>
        <SimpleGrid columns={2}>
          <Skeleton boxSize="500px" />
          <GridItem placeSelf={'center'}>loading details...</GridItem>
        </SimpleGrid>
      </Container>
    );
  }

  return (
    <Container maxW="1080px" minH="600px" mx="auto" my={24}>
      <SimpleGrid columns={2}>
        {/* <ImageCarousel /> */}
        <Image boxSize="500px" objectFit={'cover'} src={item.image_url}></Image>

        <Box px={10}>
          {isOwner ? (
            <Tabs>
              <TabList justifyContent="space-around">
                <Tab>{t('itemPage.details')}</Tab>
                <Tab>{t('itemPage.requests')}</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ItemDetails
                    isOwner={isOwner}
                    {...item}
                    handleDelete={handleDelete}
                    setValue={setValue}
                    handleChange={handleChange}
                    handleRequest={handleRequest}
                  />
                </TabPanel>
                <TabPanel>
                  <ItemRequests />
                  {/* <ItemReports handleDelete={handleDelete} /> */}
                </TabPanel>
              </TabPanels>
            </Tabs>
          ) : (
            <ItemDetails
              {...item}
              setValue={setValue}
              handleChange={handleChange}
              handleRequest={handleRequest}
              handleDelete={handleDelete}
            />
          )}
        </Box>
      </SimpleGrid>
      {/* <Box> */}
      {/* <ItemsMap /> */}
      {/* </Box>  */}
    </Container>
  );
};

export default SingleItemPage;
