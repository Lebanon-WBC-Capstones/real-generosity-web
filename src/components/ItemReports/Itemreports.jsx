import React from "react";
import {Flex,Box,Text} from "@chakra-ui/react";
import rep from "../../assets/data/reports.json";
import { useTranslation } from "react-i18next";

const ItemReports = () => {
    const { t } = useTranslation();
    return ( 
        <Flex d="column"  maxW="400px"  fontSize={18}>
         <Box py={5}>
          <Text fontWeight="bold" fontSize={12}>
             {rep.reports.length} {t("itemPage.reports")}
          </Text>

        </Box>
        </Flex>
     );
}
 
export default ItemReports;