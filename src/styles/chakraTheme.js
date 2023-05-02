import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  breakpoints: {
    mob: "320px",
    mobMax: "480px",
    tab: "768px",
    tabMax: "960px",
    desk: "1280px",
  },

  styles: {
    global: {
      body: {
        h: "100vh",
      },
    },
  },
});
