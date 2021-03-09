import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Skeleton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import {
  useCollectionData,
  useDocumentData,
} from 'react-firebase-hooks/firestore';
import { useTranslation } from 'react-i18next';
// import Carouselimg from '../../components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';
import ItemDetails from '../../components/ItemDetails';
import ItemRequests from '../../components/ItemRequests';
import { useAuth } from '../../contexts/AuthContext';
import firebase, { firestore } from '../../services/firebase';

const SingleItemPage = () => {
  //query the item from firebase
  const { t } = useTranslation();
  const { id } = useParams();
  const currentUser = useAuth();

  //item details
  const query = firestore.collection('items').doc(id);
  const [item, loading, error] = useDocumentData(query);

 

  //item requests
  const requestsRef = firestore.collection('requests');
  const reqQuery = requestsRef.where('itemId', '==', id);
  const [requests, reqLoading] = useCollectionData(reqQuery);

  console.log('requests', requests);

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
    console.log("requestReason",value);
    firestore.collection('requests').add({
      requester: currentUser.uid,
      status:'pending',
      itemId:id,
      reason: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(docRef=>{
      firestore.collection('notifications').add({
        targetId:item.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        itemId:id,
        type:"request",
        actionId:docRef,
        seen:false
      })
    })
    
  };

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
    <Container maxW="6xl" minH="600px" mx="auto" my={20}>
      {/* <SimpleGrid columns={2}> */}
        {/* <ImageCarousel /> */}
        {/* <Image boxSize="500px" objectFit={'cover'} src={item.image_url}></Image> */}

        <Box px={10}>
          {isOwner ? (
            <Tabs variant="soft-rounded"  colorScheme="gray">
              <TabList >
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
                  {reqLoading && 'is loading...'}
                  {requests && <ItemRequests requests={requests} />}
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
      {/* </SimpleGrid> */}
      {/* <Box> */}
      {/* <ItemsMap /> */}
      {/* </Box>  */}
    </Container>
  );
};

export default SingleItemPage;
