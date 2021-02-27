import { Container, Flex,Box ,Button} from '@chakra-ui/react';
import AddForm from '../components/AddForm';
function AddItemPage() {
  return (
  
   
    <Container my="45px" maxW="1080px">

    <Flex justify="space-between">
    <Box w="50%" ml={80}>
       
       </Box>
      <Box  ml={50}> 
      <AddForm/>
      </Box>
     
    </Flex>
    <Flex mt={8} ml={200} >
          <Button  width={550}size="md"colorScheme="green">Add Item</Button>
        </Flex>
</Container>
  );
};

export default AddItemPage;