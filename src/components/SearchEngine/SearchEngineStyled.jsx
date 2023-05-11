import { Flex, Box, Input, Text } from "@chakra-ui/react";

import {
  accentFont,
  mainFont,
  accentFontColor,
  secondaryAccentColor,
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
      <Input
        borderColor={secondaryAccentColor}
        fontFamily={mainFont}
        fontSize={"22px"}
        color={accentFontColor}
        placeholder="Search"
        name={"input"}
        _placeholder={{
          color: secondaryAccentColor,
          fontSize: "26px",
        }}
      />
    </form>
  );
};

export const SearchEngineResultsBox = ({ children }) => {
  return <Box>{children}</Box>;
};
