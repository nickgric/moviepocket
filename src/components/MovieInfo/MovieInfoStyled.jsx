import { Box, Flex, Text } from "@chakra-ui/react";

import {
  accentFont,
  accentFontColor,
  mainFontColor,
  mainFont,
} from "../../styles/variables";

export const MovieInfoBox = ({ children, backdrop }) => {
  return (
    <Flex
      as={"div"}
      backgroundImage={{
        base: `linear-gradient(360deg, #191919 20%, rgba(21, 17, 17, 0.5) 50%), url(${backdrop}), #141414;`,
        tab: `linear-gradient(90deg, #191919 20%, rgba(21, 17, 17, 0.5) 50%), url(${backdrop}), #141414;`,
      }}
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

export const MovieInfoInfoBox = ({ children }) => {
  return (
    <Flex as={"div"} flexDirection={"column"} w={"600px"} mb={"100px"}>
      {children}
    </Flex>
  );
};

export const MovieInfoTitle = ({ title }) => {
  return (
    <Text
      as={"h2"}
      fontFamily={accentFont}
      fontSize={"110px"}
      lineHeight={"0.84"}
      letterSpacing={"-0.03em"}
      color={accentFontColor}
      mb={"60px"}
    >
      {title}
    </Text>
  );
};

export const MovieInfoMainInfoBox = ({ children }) => {
  return (
    <Flex as={"div"} gap={"25px"} mb={"20px"}>
      {children}
    </Flex>
  );
};

export const MovieInfoYear = ({ year }) => {
  return (
    <Flex as={"div"} justifyContent={"start"} alignItems={"center"}>
      <Text
        as={"p"}
        fontFamily={mainFont}
        fontSize={"20px"}
        lineHeight={"1.2"}
        letterSpacing={"-0.01em"}
        color={accentFontColor}
      >
        {year}
      </Text>
    </Flex>
  );
};

export const MovieInfoRuntime = ({ runtime }) => {
  return (
    <Flex as={"div"} justifyContent={"start"} alignItems={"center"}>
      <Text
        as={"p"}
        fontFamily={mainFont}
        fontSize={"18px"}
        lineHeight={"1.2"}
        letterSpacing={"-0.01em"}
        color={mainFontColor}
      >
        {runtime}
      </Text>
    </Flex>
  );
};

export const MovieInfoOverview = ({ overview }) => {
  return (
    <Text
      as={"p"}
      fontFamily={mainFont}
      fontSize={"20px"}
      lineHeight={"1.32"}
      letterSpacing={"-0.01em"}
      color={mainFontColor}
      mb={"60px"}
    >
      {overview}
    </Text>
  );
};

export const MovieInfoCastNames = ({ cast, onClick }) => {
  let mainActors = cast[0].original_name;
  if (cast[1]) mainActors = `${mainActors}, ${cast[1].original_name}`;
  if (cast[2]) mainActors = `${mainActors}, ${cast[2].original_name}`;
  mainActors = `${mainActors}...`;

  return (
    <Flex as="button" justifyContent={"start"} onClick={onClick}>
      <Text
        as={"p"}
        fontFamily={mainFont}
        fontWeight={"500"}
        fontSize={"24px"}
        lineHeight={"1.17"}
        letterSpacing={"-0.01em"}
        color={accentFontColor}
        mb={"60px"}
      >
        {mainActors}
      </Text>
    </Flex>
  );
};
