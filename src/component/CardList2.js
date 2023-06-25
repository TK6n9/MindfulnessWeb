import { Box, Flex, Image, Text } from "@chakra-ui/react";

const CardList2 = () => {
  return (
    <Flex direction="row" width="100%">
      <Flex direction="column" m={48}>
        <Text fontSize="5xl" mb={4}>
          {/* Explore our collection */}
        </Text>
      </Flex>

      <Flex direction="row" width="70%" wrap="wrap">
        <Box borderRadius="lg" maxW="sm" m={4} p={4} flex="1">
          <Image
            src={"./1111.jpg"}
            borderRadius="lg"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
        <Box borderRadius="lg" maxW="sm" m={4} p={4} flex="1">
          <Image
            src={"./2222.jpg"}
            borderRadius="lg"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
        <Box borderRadius="lg" maxW="sm" m={4} p={4} flex="1">
          <Image
            src={"./3333.jpg"}
            borderRadius="lg"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardList2;
