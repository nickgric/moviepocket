import { Progress } from "@chakra-ui/react";

export const ScrollProgressStyled = ({ value, max }) => {
  return (
    <Progress
      value={value}
      max={max}
      transform={{ base: "rotate(0deg)", tab: "rotate(270deg)" }}
      transformOrigin={"left top"}
      position={"fixed"}
      left={{ tab: "70px" }}
      top={{ tab: "100vh" }}
      bottom={{ base: "50px", tab: "0px" }}
      h={"2px"}
      w={"100vh"}
      zIndex={"120"}
      variant={"progressBarFilms"}
    />
  );
};
