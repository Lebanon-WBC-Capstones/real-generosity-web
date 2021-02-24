import React from "react";
import { Flex, Stack, Text, Image } from "@chakra-ui/react";

const CategoryCard = ({ categoryPic, direction, categoryName, ml, mt }) => {

  return (
    <Flex
      mb="4"
      fontSize="md"
      Width="100%"
      height="100%"
      justifyContent="center"
      _hover={{ cursor: "pointer" }}
    >
      <Stack direction={direction} mb="4">

        <Image
          src={categoryPic}
          maxW="90%"
          maxH="90%"
          m="auto"

        />

        <Stack >
          <Flex mt={mt}
            justify="left"
          >
            <Text fontWeight={600} ml={ml} mr="2">{categoryName}</Text>
            <Text color="gray.400" >55</Text>
          </Flex>
        </Stack>

      </Stack>
    </Flex>
  );
};

export default CategoryCard;
