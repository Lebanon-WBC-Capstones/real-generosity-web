import React from 'react';
import { Flex, Box, Text, Button, SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import data from "../../assets/data/items.json";
import req from "../../assets/data/requests.json";
import moment from 'moment';


const ItemsRequest = () => {
  const { t } = useTranslation();

  const handleDeliverClick=()=>{
    console.log("hi")
  }

  return (

     <Flex d="column"  maxW="400px"  fontSize={18}>
         <Box py={5}>
          <Text fontWeight="bold" fontSize={12}>
             {data.items[0].requests.length} {t("itemPage.requests")}
          </Text>
          </Box>
          <SimpleGrid spacing={5} >
            {req.requests &&
             req.requests
             .filter((r)=>r.requestedId===data.items[0].id)
             .map(request=>{return(    
               <Box bg="gray.50"  height="80px" py="10px" px="5px">
                  <Flex align="center" justify="space-between">
                    <Text   fonts="Montserrat"
                            fontSize="lg"
                             fontWeight="semibold"
                              as="h3">
                     {t("itemPage.reason")}{" "}{request.requestReason}
                     </Text>
                  <Box>
                      <Button fontSize="xs" variant="ghost" >{t("itemPage.approve")}</Button>
                      <Button fontSize="xs" color="red" variant="ghost">{t("itemPage.decline")}</Button>
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
         <Box py="30px">
             <Button variant="outline" w="100%" size="lg" onClick={handleDeliverClick}>
                 {t("itemPage.delivered")}
             </Button>
         </Box>
    
        </Flex>
  );
};

export default ItemsRequest;
