import React from "react";
import {Flex,Box,Text,Heading} from "@chakra-ui/react";
import {
   Accordion,
   AccordionItem,
   AccordionButton,
   AccordionPanel,
   AccordionIcon,
 } from "@chakra-ui/react"
import rep from "../../assets/data/reports.json";
import data from "../../assets/data/items.json";
import { useTranslation } from "react-i18next";
import moment from 'moment';
import DeleteModal from "../DeleteModal/DeleteModal";

const ItemReports = () => {
    const { t } = useTranslation();
    const reportoptions=[{"id":"01", "option":"False identity to decieve people"},
                         {"id":"02", "option":"Inappropriate content"},
                         {"id":"03", "option":"option 03"}]
    return ( 
        <Flex d="column"  maxW="400px"  fontSize={18}>
         <Box py={5}>
          <Text fontWeight="bold" fontSize={12}>
             {rep.reports.filter(repo=>repo.reportedId===data.items[0].id).length} {t("itemPage.reports")}
          </Text>
          </Box>

          {reportoptions.map(opt=>{return(
            <Box  >
            <Accordion allowToggle >
                <AccordionItem py={5}>
                    <Heading size="lg">
                   <AccordionButton>
                   <Text px="10px" py="6px"  bg="gray.100" borderRadius="100%" mr="5px">
                      {rep.reports.filter(repo=>repo.reportedId===data.items[0].id)
                                  .filter(r=>r.reasonId===opt.id)
                                  .length}
                   </Text>
                     
                     <Box flex="1" textAlign="left">
                     <Text   fonts="Montserrat"
                             fontSize="lg"
                             fontWeight="semibold"
                             as="h3">
                         {opt.option}
                       </Text>
                       </Box>
                      <AccordionIcon />
                  </AccordionButton>
                  </Heading>
             <AccordionPanel pb={4}>
                <Flex d="column" >
                   {rep.reports.filter(repo=>repo.reportedId===data.items[0].id)
                               .filter(r=>r.reasonId===opt.id)
                               .map(repor=>{return(
                         <Box mb={4}>
                         <Flex align="center" justify="space-between" px={7}>
                             <Text   fonts="Montserrat"
                                 fontSize="lg"
                                 fontWeight="semibold"
                                 as="h3">
                               {repor.reporterId}
                             </Text>
                             <Text fonts="Montserrat"
                                   color="gray.400"
                                   fontSize="xs"
                                   my="5px"
                                   textTransform="uppercase"> 
                                { moment(`${repor.dateOfReport}`).startOf('day').fromNow()}
                             </Text>
                             </Flex>
                          </Box>
                   )})}
               
                   </Flex>
      </AccordionPanel>
    </AccordionItem>
  </Accordion>
          </Box>
          )})}
       
         
        <Box ml={80}  my={5} alignItems="flex-end">
           <DeleteModal />
        </Box>
        </Flex>
     );
}
 
export default ItemReports;