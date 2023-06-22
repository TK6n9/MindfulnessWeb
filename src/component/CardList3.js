import { Flex, Image, Text } from "@chakra-ui/react";

const CardList3 = () => {
  return (
    <Flex justify={"center"}>
      <Flex m={"48px"} direction={"column"}>
        <Text fontSize="5xl" mb={"48px"} mt={"48px"}>
          Frequently asked questions
        </Text>
        <Flex>
          <Flex direction={"column"}>
            <Text fontSize="xl" mb={"48px"}>
              What is Soto? At Soto
            </Text>

            <Text fontSize="sm" mb={"48px"}>
              we want everyone to have the outside space their home deserves.
              Our professionally designed planting collections are tailored to
              your garden conditions. Soto also provides a curated selection of
              plants and accessories at Garden Centre prices, alongside advice
              and inspiration.
            </Text>

            <Text fontSize="xl" mb={"48px"}>
              Can I ask Soto to do the planting for me?
            </Text>

            <Text fontSize="sm" mb={"48px"}>
              Soto delivers the ingredients for a stylish outside space, but we
              don’t do the planting. We provide the inspiration, plants, and
              guidance but we leave the final step to you. Think of us as a meal
              box delivery service or an interior look book. We show you what
              you could achieve with your outside space and, most significantly,
              how to put it together.
            </Text>

            <Text fontSize="xl" mb={"48px"}>
              How do I look after my plants?
            </Text>

            <Text fontSize="sm" mb={"48px"}>
              I am not green fingered Each plant arrives with a guide to how
              best to settle it into its new home. We also provide a series of
              videos and blogs as part of our Soto Masterclass. The journal
              contains a jargon- buster and further reading for those wanting to
              add to their plant knowledge.
            </Text>

            <Text fontSize="xl" mb={"48px"}>
              What is the cost of the design service?{" "}
            </Text>

            <Text fontSize="sm" mb={"48px"}>
              The designs of the collections are free, you just pay for the
              plants.
            </Text>
          </Flex>
          <Flex mb={"48px"} ml={"48px"} mr={"48px"}>
            <Image
              src="./3333.jpg"
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                maxWidth: "100%",
              }}
            ></Image>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardList3;
