import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import palette from "./palette";

const getTheme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: palette(mode),
      layout: {
        contentWidth: 1236,
      },
      typography: {
        fontFamily: '"Roboto", sans-serif',
        button: {
          textTransform: "none",
          fontWeight: "medium",
        },
      },
      zIndex: {
        appBar: 1100,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            label: {
              fontWeight: 600,
            },
          },
        },
      },
    })
  );

export default getTheme;
