import React from "react";
import {
    Box,
    VStack,
    Image,
    SimpleGrid,
    Heading,
    Text,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Flex,
  } from '@chakra-ui/react';
  import idcard from '../../assets/images/idcard.jpg';
  import security from '../../assets/images/security.jpg';
  import laptophand from '../../assets/images/laptophand.jpg';

const AboutUs = () => {
    return ( 
        <Box maxW="1080px" m="auto">
            <Box m="auto">
              <Heading py="20px" size="lg" >About Us</Heading>
              </Box>
            <Box>
          <Tabs>
             <TabList justifyContent="space-around">
               <Tab>About Real Genersoity</Tab>
               <Tab>Values</Tab>
               <Tab>How It Works</Tab>
               <Tab>FAQ</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={2} spacing={10} m="auto" >
                <Box >
                <Heading as="h1" size="md" py="20px">Website that helps in </Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium porro expedita omnis vel rerum in, maiores cum fugit illum. Facilis maxime inventore possimus tempora ullam dolores eos labore perferendis?</Text>
                </Box>
                <Box m="auto">
                    <Image src="https://i.pinimg.com/474x/bc/f2/4f/bcf24f3af41a044065b7c676cf2cfc37.jpg"></Image>
                </Box>
            </SimpleGrid>
          </TabPanel>
        <TabPanel>
            <Box>
              <Heading size="md" py="30px">Our main Values</Heading>
                <SimpleGrid columns={3} spacing={10} m="auto">
                    <Box>
                      <VStack>
                      <Image  boxSize="100px" src="https://i.pinimg.com/originals/42/65/95/42659539a84de9a8a6aeec22ba9dcafa.jpg"></Image>
                      <Heading size="md">Trust</Heading>
                      </VStack>
                    </Box>
                    <Box>
                    <VStack>
                    <Image   boxSize="100px" src="https://i.pinimg.com/originals/42/65/95/42659539a84de9a8a6aeec22ba9dcafa.jpg"></Image>
                    <Heading size="md">Trust</Heading>
                    </VStack>
                    </Box>
                    <Box>
                    <VStack>
                    <Image   boxSize="100px" src="https://i.pinimg.com/originals/42/65/95/42659539a84de9a8a6aeec22ba9dcafa.jpg"></Image>
                    <Heading size="md">Trust</Heading>
                    </VStack>
                    </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
          <TabPanel>
              <Box m="auto">
                 <SimpleGrid columns={3} spacing={15}>
                    <VStack>
                    <Image  boxSize="200px" src={laptophand}></Image>
                    <Heading size="md" color="#00D285">Step 1</Heading>
                    <Heading size="md">sign up</Heading>
                    <Text px="15px" py="10px">Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex alias voluptatum dolores veritatis itaque repudiandae perspiciatis quia possimus voluptate dolore, dicta aliquid distinctio cum harum laudantium voluptatibus eligendi quasi?</Text>
                    </VStack>
                    <VStack>
                    <Image   boxSize="200px" src={idcard}></Image>
                    <Heading  size="md" color="#00D285">Step 2</Heading>
                    <Heading size="md">Get Verified</Heading>
                    <Text px="15px" py="10px">Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex alias voluptatum dolores veritatis itaque repudiandae perspiciatis quia possimus voluptate dolore, dicta aliquid distinctio cum harum laudantium voluptatibus eligendi quasi?</Text>
                    </VStack>
                    <VStack>
                    <Image   boxSize="200px" src="https://i.pinimg.com/474x/63/98/89/63988930bde2ed562ac283a05d02053c.jpg"></Image>
                    <Heading  size="md" color="#00D285">Step 3</Heading>
                    <Heading size="md">Donate or Request items safely</Heading>
                    <Text px="15px" py="10px">Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex alias voluptatum dolores veritatis itaque repudiandae perspiciatis quia possimus voluptate dolore, dicta aliquid distinctio cum harum laudantium voluptatibus eligendi quasi?</Text>
                    </VStack>
                </SimpleGrid>
              </Box>
       </TabPanel>
       <TabPanel>
           <Flex  justify="space-between">
               <Box>
               <Text pb="20px"> Bellow is some useful information people may ask questions about.</Text>
            <Box py="15px">
                <Heading font="Montserrat" size="md">A Question about security</Heading>
                <Text  fontSize="sx">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius aliquam soluta quas odit, similique ipsum, fugit, quam saepe repellat molestias exercitationem expedita aliquid esse mollitia quasi. At, numquam assumenda?</Text>
            </Box>
            <Box py="15px">
                <Heading size="md">A Question about security</Heading>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius aliquam soluta quas odit, similique ipsum, fugit, quam saepe repellat molestias exercitationem expedita aliquid esse mollitia quasi. At, numquam assumenda?</Text>
            </Box>
            <Box py="15px">
                <Heading size="md">A Question about security</Heading>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius aliquam soluta quas odit, similique ipsum, fugit, quam saepe repellat molestias exercitationem expedita aliquid esse mollitia quasi. At, numquam assumenda?</Text>
            </Box>
                 <Text pt="20px"> Any further question? you can get in contact with us here.</Text>
            </Box>
            <Box>
                <Image src={security}></Image>
            </Box>
            </Flex>
       </TabPanel>
  </TabPanels>
</Tabs>
</Box></Box>
     );
}
 
export default AboutUs;