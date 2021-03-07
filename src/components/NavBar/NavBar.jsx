import {
  Box,
  Button,
  CloseButton,
  Flex,
  Icon, 
  Menu,
  MenuButton,
  MenuItem, 
  MenuList,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AlignLeft, Globe } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const MenuItems = ({ children, to = "/", ...rest }) => {

  return (
    <Text
      mb={{ base: 8, sm: 0 }}
      mx={{ base: 0, sm: 8 }}
      display="block"
      color={["white", "white", "gray.400", "gray.400"]}
      fontWeight="medium"
      {...rest}
    >
      <Link to={to} _hover={{ color: 'green.400' }}>{children}</Link>
    </Text>
  )
}


function NavBar(props) {

  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('EN');
  const [show, setShow] = useState(false);
  const toggleMenu = () => setShow(!show);

  return (

    <Flex
      mb={8}
      px={["2", "2", "10", "14"]}
      pt={2}
      pb={["0", "8", "0", "0"]}
      w="100%"
      wrap="wrap"
      justify="space-between"
      align="center"
      fontSize="md"
      fontWeight="medium"
      bgColor={{ base: show ? "green.400" : "transparent", md: "transparent" }}
      {...props}
    >

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseButton size="md" color="white" /> : <Button
          p={2}
          borderRadius="md"
        ><AlignLeft /></Button>}
      </Box>

      <Box fontSize="2xl" display={{ base: "none", md: "block" }} textColor="black">LOGO</Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        opacity={{base: show ? "1" : "0", md: "1"}}
        animateOpacity
        flexBasis={{ base: "100%", md: "auto" }}
        position="inherit"
        height={{base: show ? "100vh": "auto", sm: show ?"10vh": "auto", md:"auto"}}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "space-between", "space-between"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
          _hover={{ cursor: 'pointer' }}
          
        >
          <MenuItems to="/" _hover={{ color: 'green.400' }}>{t('navbar.home')}</MenuItems>
          <MenuItems to="/items" _hover={{ color: 'green.400' }}>{t('navbar.items')} </MenuItems>
          <MenuItems to="/about" _hover={{ color: 'green.400' }}>{t('navbar.about')} </MenuItems>
          <MenuItems to="/contactus" _hover={{ color: 'green.400' }}>{t('navbar.contactUs')} </MenuItems>
        </Flex>
      </Box>

      <Flex
        align={["center", "center", "center", "center"]}
        justify={["center", "space-between", "space-between", "space-between"]}
        direction="row"
        _hover={{ cursor: 'pointer' }}
        display={{ base: show ? "none" : "block", md: "block" }}
      >
        <Menu>
          <MenuButton
            p={2}
            transition="all 0.2s"
            borderRadius="md"
            _hover={{ bg: 'gray.100', color: 'green.400' }}
            _expanded={{ bg: 'gray.100' }}
          >
            <Box color="gray.400">
              <Icon as={Globe} mr={0.5} /> {lang}
            </Box>
          </MenuButton>
          <MenuList minW="max-content">
            <MenuItem
              onClick={() => {
                i18n.changeLanguage('en');
                document.body.dir = i18n.dir();
                setLang('EN');
              }}
            >
              <Box color="gray.400" _hover={{ color: 'green.400' }}>
                EN
                </Box>
            </MenuItem>

            <MenuItem
              onClick={() => {
                i18n.changeLanguage('fr');
                document.body.dir = i18n.dir();
                setLang('FR');
              }}
            >
              <Box color="gray.400" _hover={{ color: 'green.400' }}>
                FR
                </Box>
            </MenuItem>
            <MenuItem
              onClick={() => {
                i18n.changeLanguage('ar');
                document.body.dir = i18n.dir();
                setLang('ع');
              }}
            >
              <Box color="gray.400" _hover={{ color: 'green.400' }}>
                ع
                </Box>
            </MenuItem>
          </MenuList>
        </Menu>
        <Link to="/auth/signin">
          <Button
            variant="outline"
            _hover={{ bg: 'green.400', color: 'white' }}
            _focus={{ boxShadow: 'none' }}
            colorScheme="black"
            bg="white"
            ml={2}
          >
            {t('navbar.getStarted')}
          </Button>
        </Link>


      </Flex>


    </Flex>


  );
}

export default NavBar;
