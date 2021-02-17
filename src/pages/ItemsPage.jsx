import React from "react";
import {Container,Box,Flex} from "@chakra-ui/react";
import ItemMap from "./components/ItemstemMap"


const ItemsPage = () => {
    return ( 
        <Container colorScheme="pink" maxW="1080px">
                 <Box></Box>
                 <Box></Box>

            <Flex justify="space-between">
               <Box w="50%">
               </Box>
               <Box w="50%">
                <ItemsMap />
               </Box>
            </Flex>
              
        </Container>
     );
}
 
export default ItemsPage;