import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export function ThemeProviderMaterial({ children }) {
  const theme = createTheme({
    palette: {
      type: "light",
      primary: {
        main: "#1976D2",
      },
      background: {
        default: "#eee",
        paper: "#eee",
      },
      text: {
        primary: "#333",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
