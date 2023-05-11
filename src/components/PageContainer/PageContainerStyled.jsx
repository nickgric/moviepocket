import { Box } from "@chakra-ui/react";

export const PageContainerBox = ({ children }) => {
  return (
    <Box
      as={"div"}
      w={{ base: "100%", tab: "768px", tabMax: "960px", desk: "1280px" }}
      mx={"auto"}
      px={{ base: "30px", mobMax: "100px" }}
      py={{ base: "30px", mobMax: "75px" }}
      overflow={"auto"}
    >
      {children}
    </Box>
  );
};
