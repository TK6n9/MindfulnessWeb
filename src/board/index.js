import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"; // assuming you're using Chakra UI for the components
import React from "react";

function Board() {
  return (
    <>
      <Flex position="relative">
        <Image
          src={"./2222.jpg"}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "15vw",
            minHeight: "300px",
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: "50%",
            left: "20%",
            transform: "translate(-50%, -50%)",
          }}
          fontSize="5xl"
          color="white"
        >
          게시판
        </Text>
      </Flex>

      <Flex w={"100%"} minH={"1000px"} bg="RGB(248 247 243)" justify={"center"}>
        <Flex direction={"column"} w={"70%"}>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              style={{
                width: "90px",
                alignSelf: "end",
                backgroundColor: "transparent",
                boxShadow: "none",
                margin: "24px",
              }}
            >
              정렬 <ChevronDownIcon />
            </MenuButton>

            <MenuList>
              <MenuItem>최신순</MenuItem>
              <MenuItem>인기순</MenuItem>
              <MenuItem>댓글많은순</MenuItem>
              <MenuItem>오래된순</MenuItem>
            </MenuList>
          </Menu>
          {/* 게시글목록 */}
          <TableContainer style={{ background: "white" }}>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>글번호</Th>
                  <Th>제목</Th>
                  <Th>작성자</Th>
                  <Th>생성시간</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>01</Td>
                  <Td>썰푼다</Td>
                  <Td>하버드</Td>
                  <Td>2023.01.01</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Box
            as="button"
            px="24px"
            py="7px"
            border="1px"
            borderRadius="100px"
            bg="RGB(24 56 66)"
            onClick={""}
            color="white"
            m={"24px"}
            style={{
              width: "100px",
              alignSelf: "end",
            }}
          >
            글쓰기
          </Box>
        </Flex>
      </Flex>
    </>
  );
}

export default Board;
