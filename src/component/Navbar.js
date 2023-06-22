// src/Navbar.js
import { Divider, Flex, Link, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

import "./Navbar.css";

const Navbar = () => {
  const [showText, setShowText] = useState(false);
  const [index, setIndex] = useState(0);

  const texts = [
    "시간이 지나도 변하지 않는 가치",
    "아자아자 화이팅",
    "아자아자 화3팅",
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 2000);
    const interval = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowText(true);
      }, 2000);
    }, 4000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [texts.length]);

  return (
    <>
      <Flex
        w={"100%"}
        bg="RGB(24 56 55)"
        height={"24px"}
        align={"center"}
        justify={"center"}
        as={"nav"}
        position="sticky"
        top="0"
        zIndex="1"
      >
        <CSSTransition
          classNames={{
            enter: "slide-enter",
            enterActive: "slide-enter-active",
            exit: "slide-exit",
            exitActive: "slide-exit-active",
          }}
          in={showText}
          timeout={2000}
          unmountOnExit
        >
          <Text fontSize="xs" color={"white"}>
            {texts[index]}
          </Text>
        </CSSTransition>
      </Flex>
      <Flex
        as={"nav"}
        align={"center"}
        height={"62px"}
        justify="space-between"
        wrap="wrap"
        bg="white"
        color="RGB(24 56 66)"
        position="sticky"
        top="0"
        zIndex="1"
      >
        <Flex align="center" ml={"24px"}>
          <Link href="/">
            <Text fontSize="xl">폐관 수련원</Text>
          </Link>
        </Flex>

        <Flex align="center">
          <Link href="/board" mr={"48px"}>
            <Text>게시판</Text>
          </Link>
          <Link href="/join" mr={"48px"}>
            <Text>계정</Text>
          </Link>
          <Link href="" mr={"48px"}>
            <FaSearch />
          </Link>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
};

export default Navbar;
