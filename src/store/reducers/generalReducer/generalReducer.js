import {
  UPDATE_SELECTED_COUNTRY,
  UPDATE_LINE_DATA_TYPE,
  UPDATE_RANKED_DATA_TYPE,
  UPDATE_CURRENT_TAB,
  UPDATE_RANGE_LENGTH,
} from "../../actionsName";

const INITIAL_STATE = {
  selectedCountry: { code: "OWID_WRL" },
  currentLineChartType: "total_deaths",
  currentRankedChartType: "total_deaths",
  rangeTabLength: 10,
  currentTab: 1,
};

const generalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_COUNTRY:
      return { ...state, selectedCountry: action.payload };
    case UPDATE_LINE_DATA_TYPE:
      return { ...state, currentLineChartType: action.payload };
    case UPDATE_RANKED_DATA_TYPE:
      return { ...state, currentRankedChartType: action.payload };
    case UPDATE_CURRENT_TAB:
      return { ...state, currentTab: action.payload };
    case UPDATE_RANGE_LENGTH:
      return { ...state, rangeTabLength: action.payload };
    default:
      return state;
  }
};

export default generalReducer;
