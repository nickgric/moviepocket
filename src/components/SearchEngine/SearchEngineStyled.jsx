import { Flex, Box, Input, Text } from "@chakra-ui/react";

import {
  accentFont,
  accentFontColor,
  mainFont,
  mainFontColor,
} from "../../styles/variables";

export const SearchEngineBox = ({ children, backdrop }) => {
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

export const SearchEngineTitle = ({ title }) => {
  return (
    <Text
      as={"h2"}
      fontFamily={accentFont}
      fontSize={{ base: "30px", mobMax: "90px" }}
      lineHeight={"0.9"}
      letterSpacing={"-0.02em"}
      color={accentFontColor}
      mb={"30px"}
      id={"top"}
    >
      {title}
    </Text>
  );
};

export const SearchEngineInput = ({ submitHandler, inputHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <Input placeholder="Search" name={"input"} />
    </form>
  );
};

export const SearchEngineResultsBox = ({ children }) => {
  return <Box>{children}</Box>;
};
