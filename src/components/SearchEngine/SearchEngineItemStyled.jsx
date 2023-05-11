import slugify from "react-slugify";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  mainFont,
  mainFontColor,
  accentFontColor,
} from "../../styles/variables";

export const SearchEngineItemBox = ({ children, title, id }) => {
  return (
    <Flex
      as={Link}
      to={`/search/movie/${slugify(title)}/${id}`}
      w={"100%"}
      py={"22px"}
    >
      {children}
    </Flex>
  );
};

export const SearchEngineItemPicture = ({ children, poster }) => {
  return (
    <Box
      as={"div"}
      minW={"150px"}
      minH={"225px"}
      borderRadius={"15px"}
      filter={"drop-shadow(0px 0px 22px rgba(22, 22, 22, 0.16))"}
      backgroundImage={poster}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      {children}
    </Box>
  );
};

export const SearchEngineItemInfoBox = ({ children }) => {
  return (
    <Box px={"26px"} py={"22px"}>
      {children}
    </Box>
  );
};

export const SearchEngineItemTitleYearBox = ({ children }) => {
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      w={"100%"}
      mb={"23px"}
    >
      {children}
    </Flex>
  );
};

export const SearchEngineItemTitle = ({ title }) => {
  return (
    <Text
      color={accentFontColor}
      fontFamily={mainFont}
      fontWeight={"600"}
      fontSize={"22px"}
      lineHeight={"1.18"}
      letterSpacing={"-0.5%"}
    >
      {title}
    </Text>
  );
};

export const SearchEngineItemYear = ({ year }) => {
  return (
    <Text
      color={accentFontColor}
      fontFamily={mainFont}
      fontSize={"16px"}
      lineHeight={"1.18"}
      letterSpacing={"-0.5%"}
    >
      {year}
    </Text>
  );
};

export const SearchEngineItemOverview = ({ overview }) => {
  return (
    <Text
      color={mainFontColor}
      fontFamily={mainFont}
      fontSize={"20px"}
      lineHeight={"1.32"}
      letterSpacing={"-1%"}
    >
      {overview}
    </Text>
  );
};
