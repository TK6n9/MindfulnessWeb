import { Box, Flex, Image, Text } from "@chakra-ui/react";

const CardList2 = () => {
  return (
    <Flex direction={"row"}>
      <Flex direction={"column"} m={"48px"} width={["100%", "30%"]}>
        <Text fontSize="5xl" mb={4}>
          Explore our collection
        </Text>
        <Text fontSize="md">
          The Soto collections have been designed to provide year-round interest
          to outside space. Each collection is available for borders, window
          boxes, patios, balconies, and front gardens.
        </Text>
      </Flex>

      <Flex direction={"row"} width={["100%", "calc(70% - 48px)"]} wrap="wrap">
        <Box borderRadius="lg" maxW="sm" m={4} p={4} flex="1">
          <Image
            src={"./1111.jpg"}
            borderRadius="lg"
            w={"200px"}
            h={"150px"}
            objectFit="cover"
          />
          <Text mt={2}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces, and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Box>
        <Box borderRadius="lg" maxW="sm" m={4} p={4} flex="1">
          <Image
            src={"./2222.jpg"}
            borderRadius="lg"
            w={"200px"}
            h={"150px"}
            objectFit="cover"
          />
          <Text mt={2}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces, and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Box>
        <Box borderRadius="lg" maxW="sm" m={4} p={4} flex="1">
          <Image
            src={"./3333.jpg"}
            borderRadius="lg"
            w={"200px"}
            h={"150px"}
            objectFit="cover"
          />
          <Text mt={2}>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces, and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardList2;
