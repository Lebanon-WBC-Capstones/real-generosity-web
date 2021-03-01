import React from 'react';
import AdminTaskbars from '../../components/AdminTaskbars/AdminTaskbars';
import { SimpleGrid } from '@chakra-ui/react';

function AdminPage() {
  return (
    <SimpleGrid>
      <AdminTaskbars />
    </SimpleGrid>
  );
}

export default AdminPage;
