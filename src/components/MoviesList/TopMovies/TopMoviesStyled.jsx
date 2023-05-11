import { Flex } from "@chakra-ui/react";

export const TopMoviesBox = ({ children }) => {
  return (
    <Flex gap={"30px"} mb={"85px"}>
      {children}
    </Flex>
  );
};
