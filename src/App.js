import { useState } from "react";
import { ThemeProvider } from "@mui/material";
import "./App.css";
import getTheme from "./palette";
import { Provider } from "react-redux";
import { store } from "./store/store";
import MainLayout from "./components/MainLayout";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <Provider store={store}>
      <ThemeProvider theme={getTheme(themeMode)}>
        <MainLayout themeMode={themeMode} setThemeMode={setThemeMode} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
