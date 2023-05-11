import { Flex } from "@chakra-ui/react";

export const HeaderStyledBox = ({ children }) => {
  return (
    <Flex
      as="header"
      position={"fixed"}
      left={"0px"}
      bottom={"0px"}
      zIndex={"100"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"#191919"}
      w={{ base: "100%", mobMax: "70px" }}
      h={{ base: "50px", mobMax: "100vh" }}
    >
      {children}
    </Flex>
  );
};
