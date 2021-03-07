import {
  Box,
  Text,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import React from 'react';
import { Search } from 'react-feather';
import Card from '../Card';
import { useTranslation } from 'react-i18next';
import { firestore } from '../../services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useParams } from 'react-router-dom';

const ProfileTaskbars = () => {
  const { t } = useTranslation();
  const { uid } = useParams();
  const items = firestore.collection('items').where('uid','==',uid);
  const [itemslist, loading, error] = useCollection(items);
  console.log(loading);
  console.log('items', itemslist);
  if (error) console.error(error);
  if (loading) return <>loading ...</>;

  return (
    <Box>
      <Tabs>
        <TabList justifyContent="space-around">
          <Tab>{t('profilePage.donations')} </Tab>
          <Tab>{t('profilePage.requests')} </Tab>
        </TabList>

        <TabPanels>
          {/* Donations panel  */}
          <TabPanel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search color="gray" />}
              />
              <Input type="text" placeholder="Search" />
            </InputGroup>

            <SimpleGrid columns={4} gap={4}>
             {itemslist? 
             itemslist.docs
                      .map(item=>{return(<Card key={item.id} id={item.id} {...item.data()} />)})
                      :(<Text>no donations yet</Text>)}
            </SimpleGrid>
          </TabPanel>
          {/* Requests panel  */}
          <TabPanel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search color="gray" />}
              />
              <Input type="text" placeholder="Search" />
            </InputGroup>
            <SimpleGrid columns={4} gap={4}>
              <Card />
              <Card />
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default ProfileTaskbars;
