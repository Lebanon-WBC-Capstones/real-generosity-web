import React from 'react';
import { Heading, Button, Flex, Stack, Image } from '@chakra-ui/react';
import heroSectionImage_1 from '../../assets/images/heroSectionImage_1.png';
import heroSectionImage_2 from '../../assets/images/heroSectionImage_2.png';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Flex>
      <Stack
        spacing={['5', '8', '14', '20']}
        px={['2', '3', '14', '32']}
        w={{ base: '80%', md: '60%' }}
        align="flex-start"
        minH={{
          base: '30vh',
          md: '40vh',
          lg: '80vh',
          xl: '100vh',
        }}
      >
        <Heading
          color={['white', 'white', 'black', 'black']}
          fontSize={['xl', '3xl', '3xl', '4xl']}
          pt={['4', '4', '8', '24']}
          fontWeight="medium"
          textAlign="left"
        >
          {t('heroSection.heroText_1')}
          <font color="#38A169">
            <b>{t('heroSection.heroText_2')}</b>
          </font>
          <br />
          {t('heroSection.heroText_3')}
          <font color="#38A169">
            <b> {t('heroSection.heroText_4')} </b>
          </font>
          {t('heroSection.heroText_5')}
        </Heading>

        <Heading
          fontSize={['md', 'md', 'md', 'xl']}
          fontWeight="medium"
          textColor="gray.500"
          pt={['16', '16', '0', '0']}
        >
          {t('heroSection.paragraph_1')}
          <br />
          {t('heroSection.paragraph_2')}
        </Heading>

        <Link to="/auth//add-item">
          <Button
            colorScheme="green"
            py={['4', '4', '6', '8']}
            px={['10', '10', '16', '20']}
            fontSize={['md', 'md', 'xl', '2xl']}
          >
            {t('heroSection.donateButton')}
          </Button>
        </Link>
      </Stack>

      <Image
        src={heroSectionImage_1}
        display={{ base: 'none', md: 'block' }}
        position="absolute"
        zIndex="-1"
        top="0"
        right="0"
        w="56%"
        maxH="110vh"
      />
      <Image
        src={heroSectionImage_2}
        display={{ base: 'block', md: 'none' }}
        position="absolute"
        zIndex="-1"
        top="0"
        w="100%"
        maxH="110vh"
      />
    </Flex>
  );
};
export default HeroSection;
