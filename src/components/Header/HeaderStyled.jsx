import { Box, Flex } from "@chakra-ui/react";

export const HeaderStyledBox = ({ children }) => {
  return (
    <Flex
      as="header"
      position={"fixed"}
      zIndex={"100"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={"#262626"}
      border={"0px solid #636363"}
      borderRightWidth={"1px"}
      w={"70px"}
      h={"100vh"}
    >
      {children}
    </Flex>
  );
};
