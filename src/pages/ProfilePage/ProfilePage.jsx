import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileTaskbars from '../../components/ProfileTaskbars';

function ProfilePage() {
  return (
    <SimpleGrid maxW="1080px" mx="auto" gap={8} mt="20">
      <ProfileHeader />
      <ProfileTaskbars />
    </SimpleGrid>
  );
}

export default ProfilePage;
