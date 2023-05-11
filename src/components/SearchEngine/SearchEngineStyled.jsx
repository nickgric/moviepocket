import { Flex, Box, Input } from "@chakra-ui/react";

import {
  mainFont,
  accentFontColor,
  secondaryAccentColor,
} from "../../styles/variables";

export const SearchEngineBox = ({ children, backdrop }) => {
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

export const SearchEngineInput = ({ submitHandler, inputHandler }) => {
  return (
    <Box as={"form"} onSubmit={submitHandler} mb={"40px"}>
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
    </Box>
  );
};

export const SearchEngineResultsBox = ({ children }) => {
  return <Box>{children}</Box>;
};
