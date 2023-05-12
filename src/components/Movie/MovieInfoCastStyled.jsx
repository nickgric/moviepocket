import { Flex } from "@chakra-ui/react";

export const MovieInfoCastBox = ({ children }) => {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-between"} gap={"40px"}>
      {children}
    </Flex>
  );
};
