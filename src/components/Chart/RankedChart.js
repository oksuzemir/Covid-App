import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { useTheme } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const RankedChart = (props) => {
  const { JsonData } = props;
  const [labels, setLabels] = useState([]);
  const [counts, setCounts] = useState([]);
  const { selectedCountry, currentRankedChartType, rangeTabLength } =
    useSelector((state) => state.generalReducer);
  const backgroundColors = labels.map((name) =>
    name === selectedCountry.label ? "#1976d2" : "#002134"
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
          currentRankedChartType === "total_deaths"
            ? "Total deaths"
            : "Total cases",
        data: counts,
        backgroundColor: backgroundColors,
      },
    ],
  };

  useEffect(() => {
    orderDatas(currentRankedChartType);
  }, [selectedCountry, currentRankedChartType, rangeTabLength]);

  const orderDatas = (type) => {
    let totalArray = [];
    const excludingList = [
      "OWID_AFR",
      "OWID_ASI",
      "OWID_CYN",
      "OWID_EUN",
      "OWID_HIC",
      "OWID_INT",
      "OWID_KOS",
      "OWID_LIC",
      "OWID_LMC",
      "OWID_NAM",
      "OWID_OCE",
      "OWID_SAM",
      "OWID_UMC",
      "OWID_WRL",
    ];
    for (const [key, value] of Object.entries(JsonData)) {
      const find = excludingList.some(
        (item) => item.continent === value.continent
      );
      if (value.data[value.data.length - 1][type] !== undefined && !find) {
        value.data[value.data.length - 1]["country"] = value.location;
        totalArray.push(value.data[value.data.length - 1]);
      }
    }
    totalArray = totalArray.sort((a, b) => b[type] - a[type]);
    totalArray.length = rangeTabLength;
    totalArray.reverse();
    let mostCountries = totalArray.map((total) => total.country);
    setLabels(mostCountries);
    let mostCounts = totalArray.map((total) => total[type]);
    setCounts(mostCounts);
  };

  return <Bar options={options} data={data} height={"450px"} />;
};

export default RankedChart;
