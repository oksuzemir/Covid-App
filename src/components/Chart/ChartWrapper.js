import { Box } from "@mui/material";
import React from "react";
import ModeTabs from "./ModeTabs";

const ChartWrapper = (props) => {

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <ModeTabs {...props} />
    </Box>
  );
};

export default ChartWrapper;
