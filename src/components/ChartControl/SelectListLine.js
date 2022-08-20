import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { UPDATE_LINE_DATA_TYPE } from "../../store/actionsName";
import { useDispatch } from "react-redux";

const SelectListLine = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event) => {
    setSelected(event.target.value);
    dispatch({ type: UPDATE_LINE_DATA_TYPE, payload: event.target.value });
  };

  return (
    <>
      <FormControl sx={{ width: matches ? "90%" : "25%", ml: 3 }}>
        <InputLabel id="select-data">Which data do you want to see?</InputLabel>
        <Select
          labelId="select-data"
          id="select-data"
          value={selected ? selected : "total_deaths"}
          label="What data would you like to examine?"
          onChange={handleChange}
        >
          <MenuItem value={"total_deaths"}>Death count</MenuItem>
          <MenuItem value={"total_cases"}>Confirmed cases</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SelectListLine;
