// src/CardList.js
import { ChatIcon, SettingsIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";

const CardList = () => {
  return (
    <>
      <Flex align={"center"} justify={"center"} m={"48px"}>
        <Text fontSize="4xl">무엇을 하는가요?</Text>
      </Flex>
      <Flex
        mr={"24px"}
        ml={"24px"}
        mb={"86px"}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"} alignItems="center" w={"25%"}>
          <Icon as={SettingsIcon} boxSize={20} mb={"48px"} />
          <Text textAlign="center">
            Inspire Gain inspiration from our curated collections
          </Text>
        </Flex>
        <Flex direction={"column"} alignItems="center" w={"25%"}>
          <Icon as={ViewIcon} boxSize={20} mb={"48px"} />
          <Text textAlign="center">
            Personalise Customise according to your style and the aspect of your
            outside space
          </Text>
        </Flex>
        <Flex direction={"column"} alignItems="center" w={"25%"}>
          <Icon as={TimeIcon} boxSize={20} mb={"48px"} />
          <Text textAlign="center">
            Deliver Plants are selected from our award-winning nursery and
            delivered to your door
          </Text>
        </Flex>
        <Flex direction={"column"} alignItems="center" w={"25%"}>
          <Icon as={ChatIcon} boxSize={20} mb={"48px"} />
          <Text textAlign="center">
            Empower Receive step by step guidance including planting plans to
            help you care for your outside space
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default CardList;
