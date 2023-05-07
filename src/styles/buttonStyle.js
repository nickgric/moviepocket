import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  //   fontFamily: "inherit",

  h: "36px",
  borderRadius: "4px",
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "131%",
  letterSpacing: "-0.01em",
  textTransform: "capitals",
});

const yellowButton = defineStyle({
  border: "none",
  bgColor: "#FFE24B",
  color: "#000000",
  //   _hover: {
  //     boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  //   },
});

const translucentButton = defineStyle({
  border: "0.75px solid rgba(255, 255, 255, 0.52)",
  bgColor:
    "linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.0128) 100%)",
  color: "#FFFFFF",
  //   _hover: {
  //     boxShadow: "0px 6px 15px rgba(36, 204, 167, 0.5)",
  //   },
});

export const buttonStyle = defineStyleConfig({
  baseStyle,
  variants: { yellowButton, translucentButton },
});
