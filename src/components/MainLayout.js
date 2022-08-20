import React, { useEffect, useState } from "react";
import { Box, Fade, Paper } from "@mui/material";
import SearchWrapper from "./Search/SearchWrapper";
import ChartControlWrapper from "./ChartControl/ChartControlWrapper";
import ChartWrapper from "./Chart/ChartWrapper";
import LinearProgressbar from "./LinearProgessbar";

const MainLayout = (props) => {
  const { themeMode, setThemeMode } = props;
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://covid.ourworldindata.org/data/owid-covid-data.json")
      .then((response) => response.json())
      .then((data) => {
        setJsonData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Box
      className="App"
      bgcolor={"background.default"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LinearProgressbar loading={loading} />
      <Fade unmountOnExit in={!loading}>
        <Paper
          variant={"outlined"}
          sx={{
            padding: "10px",
            width: "90%",
            height: "95%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <SearchWrapper themeMode={themeMode} setThemeMode={setThemeMode} />
          <ChartWrapper JsonData={jsonData} />
          <ChartControlWrapper />
        </Paper>
      </Fade>
    </Box>
  );
};

export default MainLayout;
