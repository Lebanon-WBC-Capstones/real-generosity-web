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
import ProfileNotificationsTab from "../ProfileNotificationsTab/ProfileNotificationsTab";
const ProfileTaskbars = ({ donations, donationsloading,notify,notifyloading }) => {
  const { t } = useTranslation();
  
  
  return (
    <Box>
      <Tabs>
        <TabList justifyContent="space-around">
          <Tab>{t('profilePage.donations')} </Tab>
          <Tab>{t('profilePage.notifications')} </Tab>
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
              {donationsloading && 'loading ...'}
              {donations &&
                donations.docs.map((item) => {
                  return <Card key={item.id} id={item.id} {...item.data()} />;
                })}
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
            <ProfileNotificationsTab  notify={notify} notifyloading={notifyloading}/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default ProfileTaskbars;
