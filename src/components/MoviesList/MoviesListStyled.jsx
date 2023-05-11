import { Flex } from "@chakra-ui/react";

export const MoviesListBox = ({ children, backdrop }) => {
  return (
    <Flex
      as={"div"}
      backgroundImage={`linear-gradient(90deg, #191919 20%, rgba(21, 17, 17, 0.5) 50%), url(${backdrop}), #141414;`}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      position={"fixed"}
      zIndex={"80"}
      w={"100%"}
      h={"100vh"}
    >
      {children}
    </Flex>
  );
};

export const MoviesListTrendMoviesBox = ({ children }) => {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-between"} gap={"20px"}>
      {children}
    </Flex>
  );
};
