import React from 'react';
import AdminUsers from '../AdminUsers/AdminUsers';
import AdminUsersReports from '../AdminUsersReports';
import { Search } from 'react-feather';

import {
  Container,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

const AdminTaskbars = () => {
  return (
    <Container maxWidth="891px">
      <Heading size="lg" marginBottom="30px">
        Admin
      </Heading>
      <Tabs>
        <TabList justifyContent="space-around">
          <Tab>Users</Tab>
          <Tab>Reports</Tab>
        </TabList>

        <TabPanels>
          {/* Users panel  */}
          <TabPanel>
            <HStack justifyContent="space-between" marginBottom="40px">
              <Text fontSize="md" fontWeight="bold">
                Number of users
              </Text>
              <Box size="100px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Search color="gray" />}
                  />
                  <Input type="text" placeholder="Search" />
                </InputGroup>
              </Box>
            </HStack>
            <SimpleGrid rows={6} gap={4}>
              <AdminUsers />
              <AdminUsers />
              <AdminUsers />
              <AdminUsers />
              <AdminUsers />
            </SimpleGrid>
          </TabPanel>

          {/* Reports panel  */}
          <TabPanel>
            <SimpleGrid columns={4} gap={4}>
              <AdminUsersReports />
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default AdminTaskbars;
