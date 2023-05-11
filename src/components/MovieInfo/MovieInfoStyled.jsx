import { Box, Flex, Icon, Text } from "@chakra-ui/react";

import {
  accentFont,
  accentFontColor,
  secondaryAccentColor,
  mainFontColor,
  mainFont,
} from "../../styles/variables";

export const MovieInfoBox = ({ children, backdrop }) => {
  return (
    <Flex
      as={"div"}
      backgroundImage={`linear-gradient(90deg, #191919 20%, rgba(21, 17, 17, 0.5) 50%), url(${backdrop}), #141414;`}
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

export const MovieContainer = ({ children }) => {
  return (
    <Flex
      as={"div"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      h={"100%"}
    >
      {children}
    </Flex>
  );
};

export const MovieInfoInfoBox = ({ children }) => {
  return (
    <Flex as={"div"} flexDirection={"column"} w={"600px"}>
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
        background={"rgba(255, 255, 255, 0.31)"}
        borderRadius={"4px"}
        py={"3px"}
        px={"7px"}
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

export const MovieMoreInfoBox = ({ children }) => {
  return (
    <Flex as={"div"} w={"100%"} gap={"55%"} alignItems={"baseline"}>
      {children}
    </Flex>
  );
};

export const MovieMoreInfoTypeBox = ({ children }) => {
  return (
    <Flex as={"div"} flexDirection={"column"}>
      {children}
    </Flex>
  );
};

export const MovieType = () => {
  return (
    <Text
      as={"p"}
      fontFamily={accentFont}
      fontWeight={"400"}
      fontSize={"49px"}
      lineHeight={"1.24"}
      letterSpacing={"-0.035em"}
      color={accentFontColor}
    >
      Movie
    </Text>
  );
};

export const MovieGenre = () => {
  return (
    <Text
      as={"p"}
      fontFamily={accentFont}
      fontWeight={"400"}
      fontSize={"22px"}
      lineHeight={"1.24"}
      letterSpacing={"-0.015em"}
      color={secondaryAccentColor}
    >
      Melodrama
    </Text>
  );
};

export const MovieRating = ({ rating }) => {
  return (
    <Flex
      as={"div"}
      justifyContent={"center"}
      alignItems={"center"}
      py={"3px"}
      px={"7px"}
      gap={"7px"}
    >
      <Text
        as={"p"}
        fontFamily={accentFont}
        fontWeight={"400"}
        fontSize={"49px"}
        lineHeight={"1.24"}
        letterSpacing={"0.02em"}
        color={accentFontColor}
      >
        {rating}
      </Text>
      <Icon width="28px" height="28px" viewBox="0 0 28 28">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 5.26831L11.2963 10.7508L5.27002 11.65L9.62174 15.9478L8.6094 21.9909L14 19.1537L19.3906 21.9909L18.3782 15.9478L22.7299 11.65L16.7037 10.7508L14 5.26831Z"
          fill={accentFontColor}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4139 4.4867C13.0619 3.1711 14.9381 3.1711 15.5861 4.4867L17.8796 9.13902L22.9908 9.90115C24.4319 10.116 25.0093 11.8843 23.9722 12.9081L20.2738 16.5605L21.1341 21.6991C21.3763 23.142 19.8609 24.2374 18.5674 23.5557L14 21.1527L9.43255 23.5557C8.13906 24.2374 6.62365 23.142 6.8659 21.6991L7.72617 16.5605L4.02783 12.9081C2.99073 11.8843 3.56808 10.116 5.00922 9.90115L10.1195 9.13902L12.4139 4.4867ZM14 5.26828L11.2963 10.7508L5.27004 11.65L9.62176 15.9478L8.60942 21.9908L14 19.1536L19.3906 21.9908L18.3782 15.9478L22.73 11.65L16.7037 10.7508L14 5.26828Z"
          fill={accentFontColor}
        />
      </Icon>
    </Flex>
  );
};
