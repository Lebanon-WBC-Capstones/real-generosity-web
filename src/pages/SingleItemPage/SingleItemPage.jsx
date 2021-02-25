import React from "react";
import {Box,TabList,TabPanel,TabPanels,Tabs,Tab,SimpleGrid} from "@chakra-ui/react"
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ItemDetails from "../../components/ItemDetails";
import ItemRequests from "../../components/ItemRequests/ItemRequests";
import { useTranslation } from "react-i18next";

const SingleItemPage = () => {
  const { t } = useTranslation();
    return ( 
        <Box maxW="1080px" m="auto">
        <SimpleGrid  columns={2} spacingX="5px">
           <Box m="10px" p="10px">
               <ImageCarousel />
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
                   <ItemRequests />
                </TabPanel>
             </TabPanels>
            </Tabs>
           </Box>
        </SimpleGrid>
      </Box>

     );
}
 
export default SingleItemPage;