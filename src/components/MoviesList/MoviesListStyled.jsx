import { Flex, Progress } from "@chakra-ui/react";

export const MoviesListBox = ({ children, backdrop }) => {
  return (
    <Flex
      as={"div"}
      backgroundImage={`linear-gradient(90deg, #141414 0%, rgba(21, 17, 17, 0.49) 100%), url(${backdrop}), #2D2D2D;`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      position={"fixed"}
      zIndex={"99"}
      w={"100%"}
      h={"100vh"}
    >
      {children}
    </Flex>
  );
};

export const MoviesListTrendMoviesBox = ({ children }) => {
  return (
    <Flex flexWrap={"wrap"} justifyContent={"space-between"} gap={"40px"}>
      {children}
    </Flex>
  );
};

export const MoviesListTrendMoviesProgress = ({ value, max }) => {
  return (
    <Progress
      value={value}
      max={max}
      transform={"rotate(270deg)"}
      transformOrigin={"left top"}
      position={"fixed"}
      left={"70px"}
      top={"100vh"}
      h={"1px"}
      w={"100vh"}
      zIndex={"14000000"}
    />
  );
};
