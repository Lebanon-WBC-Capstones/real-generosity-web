import React from "react";
import {
    Box,
    Image,
    SimpleGrid,
    Heading,
    Text,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
  } from '@chakra-ui/react';

const AboutUs = () => {
    return ( 
        <Box maxW="1080px" m="auto">
            <Box m="auto"><Heading></Heading></Box>
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
            <SimpleGrid columns={2} spacing={10}>
                <Box >
                <Heading as="h1" size="lg">Website that helps in </Heading>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi accusantium porro expedita omnis vel rerum in, maiores cum fugit illum. Facilis maxime inventore possimus tempora ullam dolores eos labore perferendis?</Text>
                </Box><Box>
                    <Image src="https://i.pinimg.com/474x/bc/f2/4f/bcf24f3af41a044065b7c676cf2cfc37.jpg"></Image>
                </Box>
            </SimpleGrid>
          </TabPanel>
        <TabPanel>
            <Box m="auto">
                <SimpleGrid columns={3} spacing={10}>
                    <Box>
                    <Image  boxSize="150px" src="https://i.pinimg.com/originals/42/65/95/42659539a84de9a8a6aeec22ba9dcafa.jpg"></Image>
                    </Box>
                    <Box>
                    <Image   boxSize="150px" src="https://i.pinimg.com/originals/42/65/95/42659539a84de9a8a6aeec22ba9dcafa.jpg"></Image>
                    </Box>
                    <Box>
                    <Image   boxSize="150px" src="https://i.pinimg.com/originals/42/65/95/42659539a84de9a8a6aeec22ba9dcafa.jpg"></Image>
                    </Box>
                </SimpleGrid>
              </Box>
            </TabPanel>
          <TabPanel>
              <Box m="auto">
          <SimpleGrid columns={3} spacing={10}>
                    <Box>
                    <Image  boxSize="150px" src="https://png.pngtree.com/png-vector/20190830/ourlarge/pngtree-continuous-line-drawing-of-hand-writing-with-a-pen-on-paper-png-image_1716651.jpg"></Image>
                    <Text>Step 1</Text>
                    <Text>sign up</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex alias voluptatum dolores veritatis itaque repudiandae perspiciatis quia possimus voluptate dolore, dicta aliquid distinctio cum harum laudantium voluptatibus eligendi quasi?</Text>
                    </Box>
                    <Box>
                    <Image   boxSize="150px" src="https://cdn3.vectorstock.com/i/1000x1000/70/42/one-continuous-line-drawing-id-card-vector-21357042.jpg"></Image>
                    <Text>Step 2</Text>
                    <Text>Get Verified</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex alias voluptatum dolores veritatis itaque repudiandae perspiciatis quia possimus voluptate dolore, dicta aliquid distinctio cum harum laudantium voluptatibus eligendi quasi?</Text>
                    </Box>
                    <Box>
                    <Image   boxSize="150px" src="https://i.pinimg.com/474x/63/98/89/63988930bde2ed562ac283a05d02053c.jpg"></Image>
                    <Text>Step 3</Text>
                    <Text>Donate or Request items safely</Text>
                    <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex alias voluptatum dolores veritatis itaque repudiandae perspiciatis quia possimus voluptate dolore, dicta aliquid distinctio cum harum laudantium voluptatibus eligendi quasi?</Text>
                    </Box>
                </SimpleGrid>
              </Box>
       </TabPanel>
       <TabPanel>
           <SimpleGrid columns={3} spacing={10}>
               <Box maxW="540px">
            <Box>
            
                <Heading font="Montserrat" size="md">A Question about security</Heading>
                <Text  fontSize="sx">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius aliquam soluta quas odit, similique ipsum, fugit, quam saepe repellat molestias exercitationem expedita aliquid esse mollitia quasi. At, numquam assumenda?</Text>
            </Box>
            <Box>
               
                <Heading size="md">A Question about security</Heading>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius aliquam soluta quas odit, similique ipsum, fugit, quam saepe repellat molestias exercitationem expedita aliquid esse mollitia quasi. At, numquam assumenda?</Text>
            </Box>
            <Box>
               
                <Heading size="md">A Question about security</Heading>
                <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eius aliquam soluta quas odit, similique ipsum, fugit, quam saepe repellat molestias exercitationem expedita aliquid esse mollitia quasi. At, numquam assumenda?</Text>
            </Box>
            </Box>
            <Box>
                <Image src="https://thumbs.dreamstime.com/b/hands-palms-together-growth-plant-continuous-line-drawing-hands-palms-together-growth-plant-vector-illustration-99375612.jpg"></Image>
            </Box>
            </SimpleGrid>
       </TabPanel>
  </TabPanels>
</Tabs>
</Box></Box>
     );
}
 
export default AboutUs;