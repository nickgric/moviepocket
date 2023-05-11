import slugify from "react-slugify";
import { Flex, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  mainFont,
  mainFontColor,
  accentFontColor,
} from "../../../styles/variables";

export const TopMoviesItemBox = ({ children, title, id }) => {
  return (
    <Box as={Link} to={`/search/movie/${slugify(title)}/${id}`} w={"340px"}>
      {children}
    </Box>
  );
};

export const TopMoviesItemPicture = ({ children, poster }) => {
  return (
    <Box
      as={"div"}
      w={"340px"}
      h={"510px"}
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

export const TopMoviesItemInfoBox = ({ children }) => {
  return <Box py={"22px"}>{children}</Box>;
};

export const TopMoviesItemTitleYearBox = ({ children }) => {
  return (
    <Flex
      alignItems={"baseline"}
      justifyContent={"space-between"}
      w={"100%"}
      mb={"23px"}
    >
      {children}
    </Flex>
  );
};

export const TopMoviesItemTitle = ({ title }) => {
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
      fontSize={"20px"}
      lineHeight={"1.32"}
      letterSpacing={"-1%"}
    >
      {overview}
    </Text>
  );
};
