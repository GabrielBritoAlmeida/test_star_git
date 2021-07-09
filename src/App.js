import { ThemeProviderMaterial } from "styles/globalMaterial";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Repositories } from "pages/Repositories";
import { Provider } from "react-redux";
import store from "./store";

export function App() {
  return (
    <ThemeProviderMaterial>
      <CssBaseline />
      <Provider store={store}>
        <Repositories />
      </Provider>
    </ThemeProviderMaterial>
  );
}
