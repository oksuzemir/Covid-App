import React, { useEffect, useRef, useState } from "react";
import { countries } from "../../Countries";
import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import { UPDATE_SELECTED_COUNTRY } from "../../store/actionsName";
import { useDispatch } from "react-redux";

const SearchCountry = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <Autocomplete
      id="country-select"
      sx={{ width: "50%", margin: "0 auto", position: "relative" }}
      options={countries}
      autoHighlight
      onChange={(e, selected) => {
        if (selected) {
          setSelectedCountry(selected);
          dispatch({
            type: UPDATE_SELECTED_COUNTRY,
            payload: selected,
          });
        } else {
          setSelectedCountry(null);
          dispatch({
            type: UPDATE_SELECTED_COUNTRY,
            payload: { code: "OWID_WRL" },
          });
        }
      }}
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.flag.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.flag.toLowerCase()}.png 2x`}
            alt="flag"
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => {
        return (
          <>
            {selectedCountry && (
              <InputAdornment
                position={"start"}
                sx={{ position: "absolute", bottom: "35%" }}
              >
                <Box
                  component={"img"}
                  src={`https://flagcdn.com/w20/${selectedCountry.flag.toLowerCase()}.png`}
                />
              </InputAdornment>
            )}
            <TextField
              {...params}
              variant={"standard"}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: "new-password", // disable autocomplete and autofill
                style: {
                  paddingLeft: selectedCountry ? "25px" : 0,
                },
              }}
            />
          </>
        );
      }}
    />
  );
};

export default SearchCountry;
