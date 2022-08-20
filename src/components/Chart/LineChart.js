import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { countryAndDateFilter } from "../../helper/helper";
import { useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = (props) => {
  const { JsonData } = props;
  const [labels, setLabels] = useState([]);
  const [counts, setCounts] = useState([]);
  const { selectedCountry, currentLineChartType } = useSelector(
    (state) => state.generalReducer
  );
  const theme = useTheme();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: theme.palette.secondary.contrastText,
        },
      },
    },
    scales: {
      yAxes: {
        ticks: {
          color: theme.palette.secondary.contrastText,
        },
      },
      xAxes: {
        ticks: {
          color: theme.palette.secondary.contrastText,
        },
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label:
          currentLineChartType === "total_deaths"
            ? "Total deaths"
            : "Total cases",
        data: counts,
        borderColor: "#413F42",
        backgroundColor: "#413F42",
      },
    ],
  };

  useEffect(() => {
    const returnedValues = countryAndDateFilter(
      JsonData[selectedCountry.code].data[0].date,
      JsonData[selectedCountry.code].data[
        JsonData[selectedCountry.code].data.length - 1
      ].date,
      JsonData,
      selectedCountry.code,
      currentLineChartType
    );

    setCounts(returnedValues.results);
    setLabels(returnedValues.dates);
  }, [selectedCountry, currentLineChartType]);

  return <Line options={options} data={data} height={"450px"} />;
};

export default LineChart;
