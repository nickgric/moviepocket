import { Box } from "@chakra-ui/react";

export const MoviesListItemBox = ({ children, poster }) => {
  return (
    <Box
      as={"div"}
      w={"180px"}
      h={"280px"}
      borderRadius={"15px"}
      filter={"drop-shadow(0px 0px 42px rgba(22, 22, 22, 0.16))"}
      backgroundImage={poster}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
    >
      {children}
    </Box>
  );
};
