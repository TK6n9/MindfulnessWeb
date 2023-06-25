// src/CardList.js
import { ChatIcon, SettingsIcon, TimeIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, Icon, Text } from "@chakra-ui/react";

const CardList = () => {
  return (
    <>
      <Flex align={"center"} justify={"center"} m={"48px"}>
        <Text fontSize="4xl">무엇을 하는가?</Text>
      </Flex>
      <Flex
        mr={"24px"}
        ml={"24px"}
        mb={"86px"}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"} alignItems="center" w={"25%"}>
          <Icon as={SettingsIcon} boxSize={20} mb={"48px"} />
          {/* <Text textAlign="center">삶의 톱니바퀴</Text> */}
        </Flex>
        <Flex direction={"column"} alignItems="center" w={"25%"}>
          <Icon as={ViewIcon} boxSize={20} mb={"48px"} />
          {/* <Text textAlign="center">보이는 것과 보이지 않는 것은 무엇인가</Text> */}
        </Flex>
        <Flex direction={"column"} alignItems="center" w={"25%"}>
          <Icon as={TimeIcon} boxSize={20} mb={"48px"} />
          {/* <Text textAlign="center">
            씨앗을 심는 시기, 새싹이 자라는 시기, 성장하는 시기, 열매를 맺는
            시기 존재하는가
          </Text> */}
        </Flex>
        <Flex direction={"column"} alignItems="center" w={"25%"}>
          <Icon as={ChatIcon} boxSize={20} mb={"48px"} />
          {/* <Text textAlign="center">
            Empower Receive step by step guidance including planting plans to
            help you care for your outside space
          </Text> */}
        </Flex>
      </Flex>
    </>
  );
};

export default CardList;
