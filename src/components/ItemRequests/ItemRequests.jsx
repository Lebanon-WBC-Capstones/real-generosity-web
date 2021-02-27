import React from 'react';
import { Flex, Box, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import data from "../../assets/data/items.json";
import req from "../../assets/data/requests.json";
import moment from 'moment';


const ItemRequests = () => {
  const { t } = useTranslation();

  const handleDelivered=()=>{
    console.log("delivered")
  }
  const handleApprove=()=>{
    console.log("approve")
  }
  const handleDecline=()=>{
    console.log("decline")
  }

  return (

     <Flex d="column"  maxW="400px"  fontSize={18}>
         <Box py={5} >
          <Text fontWeight="bold" fontSize={12}>
             {data.items[0].requests.length} {t("itemPage.requests")}
          </Text>
          </Box>
          <Box maxH="300px" style={data.items[0].requests.length >= 3 ? { overflow:"auto" } : {} } >
          <SimpleGrid spacing={5} >
            {req.requests &&
             req.requests
             .filter((r)=>r.requestedId===data.items[0].id)
             .map(request=>{return(    
               <Box bg="gray.50"  height={20} py={3} px={1}>
                  <Flex align="center" justify="space-between">
                    <Text   fonts="Montserrat"
                            fontSize="lg"
                             fontWeight="semibold"
                              as="h3">
                     {t("itemPage.reason")}{" "}{request.requestReason}
                     </Text>
                  <Box>
                      <Button fontSize="xs" variant="ghost" onClick={handleApprove} >{t("itemPage.approve")}</Button>
                      <Button fontSize="xs" color="red" variant="ghost" onClick={handleDecline}>{t("itemPage.decline")}</Button>
                   </Box>
                 </Flex>
              <Text  fonts="Montserrat"
                     color="gray.400"
                     fontSize="xs"
                     textTransform="uppercase">
                 { moment(`${request.dateOfRequest}`).startOf('day').fromNow()}
               </Text>
           </Box>
           )})}
     
          </SimpleGrid>
          </Box>
         <Box py={8}>
             <Button  variant="outline" w="100%" size="lg" onClick={handleDelivered}>
                 {t("itemPage.delivered")}
             </Button>
         </Box>
    
        </Flex>
  );
};

export default ItemRequests;
