import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { accentColor } from "./variables";

const progressBarFilms = defineStyle({
  track: {
    background: "#262626",
  },
  filledTrack: {
    background: `${accentColor}`,
  },
});

export const progressStyle = defineStyleConfig({
  variants: { progressBarFilms },
});
