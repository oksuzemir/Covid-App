import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  UPDATE_RANGE_LENGTH,
  UPDATE_RANKED_DATA_TYPE,
} from "../../store/actionsName";
import { useDispatch } from "react-redux";
import { generateKey } from "../../helper/helper";

const SelectListRanked = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("");
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedLength, setSelectedLength] = useState(10);
  const [numbersForRankSelect] = useState([3, 5, 7, 10, 15, 20, 25]);

  const handleChange = (event) => {
    setSelected(event.target.value);
    dispatch({ type: UPDATE_RANKED_DATA_TYPE, payload: event.target.value });
  };

  const handleChangeLength = (event) => {
    setSelectedLength(event.target.value);
    dispatch({ type: UPDATE_RANGE_LENGTH, payload: event.target.value });
  };

  return (
    <>
      <FormControl
        sx={{ width: matches ? "90%" : "25%", ml: 3 }}
        fullWidth={matches}
      >
        <InputLabel id="select-data">Which data do you want to see?</InputLabel>
        <Select
          labelId="select-data"
          id="select-data-rank-options"
          value={selected ? selected : "total_deaths"}
          label="What data would you like to examine?"
          onChange={handleChange}
        >
          <MenuItem value={"total_deaths"}>Death count</MenuItem>
          <MenuItem value={"total_cases"}>Total cases</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{ width: matches ? "90%" : "25%", ml: 3, mt: matches ? 4 : 0 }}
        fullWidth={matches}
      >
        <InputLabel id="select-data">How many countries will be ranked?</InputLabel>
        <Select
          labelId="select-data"
          id="select-data-rank"
          value={selectedLength}
          label="How many countries would you like to rank?"
          onChange={handleChangeLength}
        >
          {numbersForRankSelect.map((number) => (
            <MenuItem value={number} key={generateKey(number)}>
              {number}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default SelectListRanked;
