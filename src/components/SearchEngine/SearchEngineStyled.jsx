import { Box, Flex, Input } from "@chakra-ui/react";

export const SearchEngineBox = ({ children }) => {
  return (
    <Flex as={"div"} position={"fixed"} zIndex={"80"} w={"100%"} h={"100vh"}>
      {children}
    </Flex>
  );
};

export const SearchEngineInput = () => {
  return <Input placeholder="Test" />;
};
