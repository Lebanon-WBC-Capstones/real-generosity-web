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

const SingleItemPage = () => {
  const { id } = useParams();
  const item = items.find((item) => item.id === id);

  const { t } = useTranslation();
  return (
    <Container maxW="1080px" minH="600px" m="auto" my="10px">
      <Box>
        <SimpleGrid columns={2} spacingX="5px">
          <Box m="10px" p="10px">
            {/* <ImageCarousel /> */}
            <Image boxSize="500px" src={`${item.imageURL[0]}`}></Image>
          </Box>

          <Box px={10}>
            <Tabs>
              <TabList justifyContent="space-around">
                <Tab>{t('itemPage.details')}</Tab>
                <Tab>{t('itemPage.requests')}</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <ItemDetails {...item} />
                </TabPanel>
                <TabPanel>
                  <ItemRequests />
                  {/* <ItemReports /> */}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </SimpleGrid>
        {/* <Box> */}
        {/* <ItemsMap /> */}
        {/* </Box>  */}
      </Box>
    </Container>
  );
};

export default SingleItemPage;
