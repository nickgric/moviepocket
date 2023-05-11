import { Flex } from "@chakra-ui/react";

export const PopularMoviesBox = ({ children }) => {
  return (
    <Flex
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"start"}
      gap={{ base: "20px", desk: "24px" }}
      w={"100%"}
    >
      {children}
    </Flex>
  );
};
