import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import { accentColor, basicColor } from "./variables";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
);

export const inputStyle = defineMultiStyleConfig({
  defaultProps: {
    variant: "flushed",
    focusBorderColor: basicColor,
    errorBorderColor: accentColor,
  },
});
