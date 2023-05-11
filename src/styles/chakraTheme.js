import { extendTheme } from "@chakra-ui/react";
import { buttonStyle } from "./buttonStyle";
import { progressStyle } from "./progressBar";

export const chakraTheme = extendTheme({
  breakpoints: {
    mob: "320px",
    mobMax: "480px",
    tab: "768px",
    tabMax: "960px",
    desk: "1280px",
  },

  components: { Button: buttonStyle, Progress: progressStyle },

  styles: {
    global: {
      body: {
        h: "100vh",
        position: "relative",
        backgroundColor: "#191919",
      },
    },
  },
});
