import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export function ThemeProviderMaterial({ children }) {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#1976D2",
      },
      // secondary: {
      //   main: "#31e048",
      // },
      background: {
        default: "#eee",
        paper: "#eee",
      },
      text: {
        primary: "#333",
        // secondary: "#31e048",
        // disabled: "#31e048",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
