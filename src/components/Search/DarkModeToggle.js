import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkModeToggle = (props) => {
  const { themeMode, setThemeMode } = props;

  const changeColorMode = () => {
    setThemeMode(() => (themeMode === "light" ? "dark" : "light"));
  };

  return (
    <IconButton
      sx={{ mr: 2, alignSelf: "end" }}
      onClick={changeColorMode}
      color="inherit"
    >
      {themeMode === "dark" ? (
        <Brightness7Icon sx={{ color: "background.default" }} />
      ) : (
        <Brightness4Icon />
      )}
    </IconButton>
  );
};

export default DarkModeToggle;
