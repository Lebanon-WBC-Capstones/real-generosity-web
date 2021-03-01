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
import { useTranslation } from 'react-i18next';
import { users } from '../../assets/data/users';

const AdminTaskbars = () => {
  const { t } = useTranslation();
  return (
    <Container maxWidth="891px">
      <Heading size="lg" marginBottom="30px">
        {t('adminPage.admin')}
      </Heading>
      <Tabs>
        <TabList justifyContent="space-around">
          <Tab>{t('adminPage.users')}</Tab>
          <Tab>{t('adminPage.reports')}</Tab>
        </TabList>

        <TabPanels>
          {/* Users panel  */}
          <TabPanel>
            <HStack justifyContent="space-between" marginBottom="40px">
              <Text fontSize="md" fontWeight="bold">
                {users.length} {t('adminPage.users')}
              </Text>
              <Box size="100px">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<Search color="gray" />}
                  />
                  <Input type="text" placeholder={t('adminPage.search')} />
                </InputGroup>
              </Box>
            </HStack>
            <SimpleGrid rows={6} gap={4}>
              {users.map((user) => (
                <AdminUsers {...user} />
              ))}
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
