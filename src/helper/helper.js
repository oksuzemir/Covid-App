import moment from "moment";

const countryAndDateFilter = (
  start,
  end,
  JsonData,
  selectedCountry,
  dataName
) => {
  let startDate = moment(start);
  let endDate = moment(end);

  let dates = [];
  endDate.subtract(1, "month"); //Substract one month to exclude endDate itself

  let month = moment(startDate); //clone the startDate
  while (month < endDate) {
    month.add(1, "month");
    dates.push(month.format("YYYY-MM-DD"));
  }

  let results = JsonData[selectedCountry].data.filter((response) =>
    dates.some((value) => value === response.date)
  );

  results = results.map((result) => result[dataName]);

  dates = dates.map((date) => {
    let check = moment(date, "YYYY/MM/DD");
    let month = check.format("MMMM");
    let year = check.format("YYYY");
    return `${month}, ${year}`;
  });

  return {
    results,
    dates,
  };
};

const generateKey = (pre) => {
  return `${pre}_${new Date().getTime()}`;
};

export { countryAndDateFilter, generateKey };
