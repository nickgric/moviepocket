import { Box } from "@chakra-ui/react";

export const PageContainerBox = ({ children }) => {
  return (
    <Box as={"div"} px={"150px"} py={"50px"} overflow={"auto"}>
      {children}
    </Box>
  );
};
