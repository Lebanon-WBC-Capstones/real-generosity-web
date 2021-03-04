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
} from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { items } from '../../assets/data/items';
import ItemDetails from '../../components/ItemDetails';
import ItemRequests from '../../components/ItemRequests';
import ItemReports from '../../components/ItemReports/ItemReports'
const SingleItemPage = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  const { t } = useTranslation();
  return (
    <Container maxW="6xl" minH="600px" m="auto" my={3}>
      <Box>
        <SimpleGrid columns={2} spacingX={1}>
          <Box m={3} p={3}>
            {/* <ImageCarousel /> */}
            <Image boxSize="500px" src={`${item.imageURL[0]}`}></Image>
          </Box>
          <Box px={10}>
            <Tabs varientColor="unstyled" >
              <TabList justifyContent="space-around">
                <Tab  _selected={{
                                borderBottom: "2px solid",
                                borderBottomColor: "gray.500",
                                   }}>
                 {t('itemPage.details')}</Tab>
                <Tab _selected={{
                                borderBottom: "2px solid",
                                borderBottomColor: "gray.500"}}>
                                  {t('itemPage.requests')}</Tab>
                <Tab _selected={{
                                borderBottom: "2px solid",
                                borderBottomColor: "gray.500"}}>
                                  {t('itemPage.reports')}</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ItemDetails {...item} />
                </TabPanel>
                <TabPanel>
                  <ItemRequests {...item} /> 
                </TabPanel>
                <TabPanel>
                <ItemReports {...item} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default SingleItemPage;

