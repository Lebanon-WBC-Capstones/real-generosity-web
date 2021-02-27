import React from "react";
import {Box,TabList,TabPanel,TabPanels,Tabs,Tab,SimpleGrid,Container,Image} from "@chakra-ui/react"
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ItemDetails from "../../components/ItemDetails";
import ItemRequests from "../../components/ItemRequests/ItemRequests";
import ItemReports from "../../components/ItemReports/ItemReports"
import ItemsMap from "../../components/ItemsMap/ItemsMap";
import { useTranslation } from "react-i18next";



const SingleItemPage = () => {
  const { t } = useTranslation();
    return ( 
      <Container maxW="5xl" minH="sm" m="auto" my={3}>
        <Box >
        <SimpleGrid  columns={2} spacingX={1}>
           <Box m={3} p={3}>
               {/* <ImageCarousel /> */}
               <Image boxSize="500px" src="https://www.marni.com/12/12386489MT_13_n_r.jpg"></Image>
           </Box>
        
            <Box px={10}>
             <Tabs >
               <TabList justifyContent="space-around">
                    <Tab>{t("itemPage.details")}</Tab>
                    <Tab>{t("itemPage.requests")}</Tab>
               </TabList>
             <TabPanels>
                <TabPanel>
                    <ItemDetails /> 
                </TabPanel>
                <TabPanel>
                   {/* <ItemRequests /> */}
                    <ItemReports />
                </TabPanel>
             </TabPanels>
            </Tabs>
           </Box> 
        </SimpleGrid> 
         {/* <Box maxW="1080px" maxH="20px"> */}
           {/* map will be tragged here */}
            {/* <ItemsMap />
        </Box>  */}
      </Box>
</Container>
     );
}
 
export default SingleItemPage;