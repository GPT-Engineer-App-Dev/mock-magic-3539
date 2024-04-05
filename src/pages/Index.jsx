import { Box, Heading, Text, Image, Button } from "@chakra-ui/react";
import { FaTicketAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h1" size="2xl" mb={6}>
        The Rockers Tour 2024 ❤️
      </Heading>
      <Text fontSize="xl" mb={6}>
        Get ready to rock with The Rockers on their 2024 world tour!
      </Text>
      <Image src="https://picsum.photos/800/400?random=1" alt="The Rockers band" mb={8} mx="auto" borderRadius="lg" boxShadow="xl" />
      <Button leftIcon={<FaTicketAlt />} colorScheme="blue" size="lg">
        View Tour Dates
      </Button>
    </Box>
  );
};

export default Index;
