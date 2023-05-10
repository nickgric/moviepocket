import { Box } from "@chakra-ui/react";

export const PageContainerBox = ({ children }) => {
  return (
    <Box
      as={"div"}
      px={{ base: "30px", mobMax: "150px" }}
      py={{ base: "30px", mobMax: "50px" }}
      overflow={"auto"}
    >
      {children}
    </Box>
  );
};
