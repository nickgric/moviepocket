import { Flex } from "@chakra-ui/react";

export const PopularMoviesBox = ({ children }) => {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-between"} gap={"20px"}>
      {children}
    </Flex>
  );
};
