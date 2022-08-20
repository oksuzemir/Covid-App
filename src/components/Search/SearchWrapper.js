import { Box } from "@mui/material";
import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import SearchCountry from "./Searchbar";

const SearchWrapper = (props) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <SearchCountry />
      <DarkModeToggle {...props} />
    </Box>
  );
};

export default SearchWrapper;
