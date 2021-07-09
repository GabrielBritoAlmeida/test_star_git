import { ThemeProviderMaterial } from "styles/globalMaterial";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import store from "./store";
import { Routes } from 'routers/routes'

export function App() {
  return (
    <ThemeProviderMaterial>
      <CssBaseline />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProviderMaterial>
  );
}
