import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "tomato",
          fontWeight: "bold",
        },
      },

      focused: {},
    },
  },
});

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
