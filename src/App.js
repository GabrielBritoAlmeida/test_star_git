import { ThemeProviderMaterial } from "styles/globalMaterial";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Repositories } from "pages/Repositories";

export function App() {
  return (
    <ThemeProviderMaterial>
      <CssBaseline />
      <Repositories />
    </ThemeProviderMaterial>
  );
}
