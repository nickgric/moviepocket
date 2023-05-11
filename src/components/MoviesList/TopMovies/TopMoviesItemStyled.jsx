import slugify from "react-slugify";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  mainFont,
  mainFontColor,
  accentFont,
  accentFontColor,
} from "../../../styles/variables";

export const TopMoviesItemBox = ({ children, title, id }) => {
  return (
    <Flex
      as={Link}
      to={`/search/movie/${slugify(title)}/${id}`}
      flexDirection={{ base: "column", mobMax: "row", tabMax: "column" }}
      gap={{ base: "20px", tabMax: "0px" }}
      mb={{ base: "20px", tabMax: "0px" }}
    >
      {children}
    </Flex>
  );
};

export const TopMoviesItemPicture = ({ children, poster }) => {
  return (
    <Box
      as={"div"}
      w={{ base: "100%", mobMax: "50%" }}
      aspectRatio={"2 / 3"}
      minW={{
        base: "auto",
        mobMax: "calc(50% - 10px)",
        tab: "176px",
        tabMax: "240px",
        desk: "340px",
      }}
      minH={{
        base: "auto",
        mobMax: "50%",
        tab: "264px",
        tabMax: "360px",
        desk: "510px",
      }}
      borderRadius={"5px"}
      backgroundImage={poster}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      mb={{ base: "5px", tabMax: "30px" }}
    >
      {children}
    </Box>
  );
};

export const TopMoviesItemInfoBox = ({ children }) => {
  return <Box>{children}</Box>;
};

export const TopMoviesItemTitleYearBox = ({ children }) => {
  return (
    <Flex
      alignItems={"baseline"}
      justifyContent={"space-between"}
      gap={"30px"}
      w={"100%"}
      mb={"30px"}
    >
      {children}
    </Flex>
  );
};

export const TopMoviesItemTitle = ({ title }) => {
  return (
    <Text
      color={accentFontColor}
      fontFamily={accentFont}
      fontWeight={"600"}
      fontSize={{ base: "20px", desk: "22px" }}
      lineHeight={"1.18"}
      letterSpacing={"-0.5%"}
    >
      {title}
    </Text>
  );
};

export const TopMoviesItemYear = ({ year }) => {
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

export const TopMoviesItemOverview = ({ overview }) => {
  return (
    <Text
      color={mainFontColor}
      fontFamily={mainFont}
      fontSize={{ base: "14px", tab: "18px", tabMax: "16px", desk: "20px" }}
      lineHeight={"1.32"}
      letterSpacing={"-1%"}
    >
      {overview}
    </Text>
  );
};
