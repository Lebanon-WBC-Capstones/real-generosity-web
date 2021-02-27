import React from 'react';
import { Box, Button, Flex, Text, Spacer } from '@chakra-ui/react';
import heroSectionImage from '../../assets/images/hero-section-image.jpg';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <Box width="100%">
      <Flex align="center" justify="space-between">
        <Box py="56" width="38%" height="5xl" textAlign="right" fontSize="7xl">
          <Text fontSize="7xl">Make som</Text>
          <Flex textAlign="right">
            <Spacer />
            <Text textAlign="right" pr="18px">
              by
            </Text>
            <Text
              color="green.400"
              fontWeight="bold"
              textAlign="right"
              pr="18px"
            >
              giving
            </Text>
          </Flex>

          <Box pr="7" pt="16" pb="10">
            {/* <Box pt="16" pb="10" width="60%" pl="251px"> */}
            <Text fontSize="20px" pl="251px">
              Help make lebanon a better place
            </Text>
            <Text fontSize="20px" pl="251px" textAlign="left">
              one donation at a time
            </Text>
          </Box>
          <Box pr="7">
            <Link to="/add-item">
              <Button
                bg="green.400"
                textColor="white"
                py="8"
                px="20"
                fontSize="2xl"
              >
                Donate Now
              </Button>
            </Link>
          </Box>
        </Box>

        {/* </Box> */}

        <Box
          pt="56"
          pb="80"
          width="62%"
          height="5xl"
          fontSize="7xl"
          backgroundImage={`url(${heroSectionImage})`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
        >
          <Flex textAlign="left">
            <Text pr="18px">eone's</Text>
            <Text color="green.400" fontWeight="bold" textAlign="right">
              Life
            </Text>
          </Flex>

          <Flex textAlign="right">
            <Text textAlign="right" color="white" pr="18px">
              of
            </Text>
            <Text color="green.400" fontWeight="bold" textAlign="right">
              yours
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default HeroSection;
