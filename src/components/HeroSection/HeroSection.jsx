import React from 'react';
import { Box, Button, Flex, Text, Image } from '@chakra-ui/react';
import heroSectionImage from '../../assets/images/hero-section-image.png';
import './HeroSection.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Flex>
     
      <Box      
     zIndex="1"
     mx="52"
     mb="24"
>

      <Text 
      fontSize="7xl" 
      fontWeight="medium" 
      pt="36" 
      textColor="black">
        {t('heroSection.heroText_1')}<font color="#38A169"> <b>{t('heroSection.heroText_2')}</b></font><br/> {t('heroSection.heroText_3')}<font color="#38A169"><b> {t('heroSection.heroText_4')} </b></font><font color="white">{t('heroSection.heroText_5')}</font>
      </Text>
      <Text 
       fontSize="xl" 
       fontWeight="medium" 
       py="16" 
       textColor="gray.500">{t('heroSection.paragraph_1')}<br/>{t('heroSection.paragraph_2')}
      </Text>
      <Link to="/auth//add-item">
      <Button
              colorScheme="green"
              py="8"
              px="20"
              fontSize="2xl"
            >
              {t('heroSection.donateButton')}
            </Button>
            </Link>
          </Box>
        <Image src={heroSectionImage} position="absolute" zIndex="-1" top="0" right="0"/>

    </Flex>
  );
};
export default HeroSection;
