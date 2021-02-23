import {
  Box,
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

const ProfileTaskbars = () => {
  return (
    <Box>
      <Tabs>
        <TabList justifyContent="space-around">
          <Tab>Donations</Tab>
          <Tab>Requests</Tab>
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
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
