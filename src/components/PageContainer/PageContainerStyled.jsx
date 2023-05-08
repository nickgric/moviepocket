import { Box } from "@chakra-ui/react";

export const PageContainerBox = ({ children }) => {
  return (
    <Box as={"div"} px={"150px"} py={"80px"} overflow={"auto"}>
      {children}
    </Box>
  );
};
