import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import SelectListLine from "./SelectListLine";
import SelectListRanked from "./SelectListRanked";
import { useSelector } from "react-redux";

const ChartControlWrapper = () => {
  const { currentTab } = useSelector((state) => state.generalReducer);

  return <Box>{currentTab ? <SelectListLine /> : <SelectListRanked />}</Box>;
};

export default ChartControlWrapper;
