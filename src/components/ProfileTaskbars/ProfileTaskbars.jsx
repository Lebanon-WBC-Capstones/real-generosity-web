import React from 'react';
import Card from '../Card';
import {
  Button,
  Box,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  HStack,
  TabPanels,
} from '@chakra-ui/react';
import { Search } from 'react-feather';

const ProfileTaskbars = () => {
  return (
    <Box maxW="700px" mx="auto">
      <Tabs>
        <TabList justifyContent="space-around">
          <Tab>Donations</Tab>
          <Tab>Requests</Tab>
        </TabList>

        <HStack justifyContent="space-between" marginTop="10px">
          <Search />
          <Button size="xs" color="white" background="green.300">
            + Submit Donation
          </Button>
        </HStack>

        <TabPanels>
          <TabPanel>
            <HStack spacing="15px">
              <Card />
              <Card />
              <Card />
            </HStack>
          </TabPanel>
          <TabPanel>
            <HStack spacing="15px">
              <Card />
              <Card />
              <Card />
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
export default ProfileTaskbars;
