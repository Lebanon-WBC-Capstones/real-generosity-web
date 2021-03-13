import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { User, LogOut, Bell } from 'react-feather';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  AvatarBadge,
  IconButton,
  HStack,
} from '@chakra-ui/react';

const GetStartedBtn = ({ logOut, user, notify }) => {
  const { t } = useTranslation();
  return (
    <HStack>
      <Menu border="1px">
        <MenuButton
          as={IconButton}
          color="black"
          aria-label="Options"
          icon={
            <Avatar size="sm" bg="white" icon={<Bell fontSize="1.5rem" />}>
              {notify?.length ? <AvatarBadge boxSize="1.25em" bg="red" /> : ''}
            </Avatar>
          }
          size="md"
          variant="white"
        />

        <MenuList>
          <Link to={`/profile/${user.uid}/notifications`}>
            <MenuItem>Notifications</MenuItem>
          </Link>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={IconButton}
          color="black"
          aria-label="Options"
          icon={<Avatar size="sm" bg="black" />}
          size="md"
          variant="white"
        />
        <MenuList>
          <Link to={`/profile/${user.uid}/donations`}>
            <MenuItem icon={<User />}>{t('navbar.profile')}</MenuItem>
          </Link>

          <MenuItem onClick={logOut} icon={<LogOut />}>
            {t('navbar.logout')}
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};
export default GetStartedBtn;
