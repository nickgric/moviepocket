import { Flex, Text, Button, Icon } from "@chakra-ui/react";

import {
  accentFont,
  accentFontColor,
  mainFont,
  mainFontColor,
} from "../../styles/variables";

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

export const MoviesListTrendMovieBox = ({ children }) => {
  return (
    <Flex as={"div"} flexDirection={"column"} w={"600px"} mb={"100px"}>
      {children}
    </Flex>
  );
};

export const MoviesListTrendMovieTitle = ({ title }) => {
  return (
    <Text
      as={"h2"}
      fontFamily={accentFont}
      fontSize={"90px"}
      lineHeight={"0.9"}
      letterSpacing={"-0.02em"}
      color={accentFontColor}
      mb={"30px"}
    >
      {title}
    </Text>
  );
};

export const MoviesListTrendMovieRatingYearBox = ({ children }) => {
  return (
    <Flex as={"div"} gap={"14px"} mb={"20px"}>
      {children}
    </Flex>
  );
};

export const MoviesListTrendMovieRating = ({ rating }) => {
  return (
    <Flex
      as={"div"}
      justifyContent={"center"}
      alignItems={"center"}
      background={"rgba(255, 255, 255, 0.31)"}
      borderRadius={"4px"}
      py={"3px"}
      px={"7px"}
      w={"50px"}
      h={"30px"}
    >
      <Text
        as={"p"}
        fontFamily={mainFont}
        fontWeight={"500"}
        fontSize={"18px"}
        lineHeight={"1.17"}
        letterSpacing={"-0.01em"}
        color={accentFontColor}
      >
        {rating}
      </Text>
    </Flex>
  );
};

export const MoviesListTrendMovieYear = ({ year }) => {
  return (
    <Flex as={"div"} justifyContent={"center"} alignItems={"center"}>
      <Text
        as={"p"}
        fontFamily={mainFont}
        fontSize={"20px"}
        lineHeight={"1.2"}
        letterSpacing={"-0.005em"}
        color={accentFontColor}
      >
        {year}
      </Text>
    </Flex>
  );
};

export const MoviesListTrendMovieOverview = ({ overview }) => {
  return (
    <Text
      as={"p"}
      fontFamily={mainFont}
      fontSize={"20px"}
      lineHeight={"1.32"}
      letterSpacing={"-0.01em"}
      color={mainFontColor}
      mb={"40px"}
    >
      {overview}
    </Text>
  );
};

export const MoviesListTrendMovieTrailerButton = () => {
  return (
    <Button variant={"colorButton"} w={"100px"}>
      <Flex justifyContent={"center"} alignItems={"center"} gap={"4px"}>
        <Icon width="22" height="22" viewBox="0 0 22 22">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20ZM11 18.6154C6.79414 18.6154 3.38462 15.2059 3.38462 11C3.38462 6.79414 6.79414 3.38462 11 3.38462C15.2059 3.38462 18.6154 6.79414 18.6154 11C18.6154 15.2059 15.2059 18.6154 11 18.6154ZM10.1694 8.29409C9.50305 7.9324 8.69231 8.4148 8.69231 9.17296V12.827C8.69231 13.5852 9.50305 14.0676 10.1694 13.7059L13.5352 11.8789C14.2324 11.5004 14.2324 10.4996 13.5352 10.1211L10.1694 8.29409Z"
            fill={accentFontColor}
          />
        </Icon>
        <Text color={accentFontColor}>Trailer</Text>
      </Flex>
    </Button>
  );
};

export const MoviesListTrendMovieInfoButton = () => {
  return (
    <Button variant={"translucentButton"} w={"60px"}>
      <Flex justifyContent={"center"} alignItems={"center"} gap={"4px"}>
        <Text>Info</Text>
      </Flex>
    </Button>
  );
};

export const MoviesListTrendMoviePocketButton = () => {
  return (
    <Button variant={"translucentButton"} w={"100px"}>
      <Flex justifyContent={"center"} alignItems={"center"} gap={"4px"}>
        <Icon width="22" height="22" viewBox="0 0 28 28">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.5 8.45831C3.5 7.00844 4.67512 5.83331 6.125 5.83331H21.875C23.3249 5.83331 24.5 7.00844 24.5 8.45831V18.9583C24.5 20.4082 23.3249 21.5833 21.875 21.5833H6.125C4.67512 21.5833 3.5 20.4082 3.5 18.9583V8.45831ZM6.125 7.58331C5.642 7.58331 5.25 7.97531 5.25 8.45831V9.33331H22.75V8.45831C22.75 7.97531 22.358 7.58331 21.875 7.58331H6.125ZM22.75 11.0833H5.25V18.9583C5.25 19.4413 5.642 19.8333 6.125 19.8333H21.875C22.358 19.8333 22.75 19.4413 22.75 18.9583V11.0833ZM7 17.2083C7 16.7253 7.392 16.3333 7.875 16.3333H13.125C13.608 16.3333 14 16.7253 14 17.2083C14 17.6913 13.608 18.0833 13.125 18.0833H7.875C7.392 18.0833 7 17.6913 7 17.2083Z"
            fill={accentFontColor}
          />
        </Icon>
        <Text>Pocket</Text>
      </Flex>
    </Button>
  );
};

export const MoviesListTrendMovieButtonsBox = ({ children }) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"}>
      {children}
    </Flex>
  );
};

export const MoviesListTrendMovieSideButtonsBox = ({ children }) => {
  return (
    <Flex justifyContent={"center"} gap={"12px"}>
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
