import { AppBar, Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import LineChart from "./LineChart";
import RankedChart from "./RankedChart";
import { useDispatch } from "react-redux";
import {
  UPDATE_CURRENT_TAB,
  UPDATE_SELECTED_COUNTRY,
} from "../../store/actionsName";

const TabPanel = (TabPanelProps) => {
  const { children, value, index } = TabPanelProps;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const a11yProps = (index) => {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
};

const ModeTabs = (props) => {
  const { JsonData } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    dispatch({ type: UPDATE_CURRENT_TAB, payload: value });
    dispatch({ type: UPDATE_SELECTED_COUNTRY, payload: { code: "OWID_WRL" } });
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: 5,
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="tabs"
        >
          <Tab label="Reported cases" {...a11yProps(0)} />
          <Tab label="Ranked charts" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
        <TabPanel value={value} index={0}>
          <LineChart JsonData={JsonData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RankedChart JsonData={JsonData} />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default ModeTabs;
