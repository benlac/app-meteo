/* eslint-disable import/prefer-default-export */
/**
 * Convert Kelvin to celcius
 * @param {Int} kelvin temperature in kelvin
 * @return {Int} temparature in celcius
 */
export const convertToCelcius = (kelvin) => Math.round(kelvin - 273.15);

/**
 * Convert Timestamp to time
 * @param {Int} timestamp timestamp
 * @return {Int} time in h:m
 */
export const convertTimestamp = (time) => {
  const date = new Date(time * 1000);
  const hours = `0${date.getHours()}`;
  const minutes = `0${date.getMinutes()}`;

  const formattedTime = `${hours.substr(-2)}:${minutes.substr(-2)}`;

  return formattedTime;
};

/**
 * Convert Timestamp to date
 * @param {Int} timestamp timestamp
 * @return {Int} time in d:m:y
 */
export const convertTimestampToDate = (time) => {
  const date = new Date(time * 1000);
  const years = date.getFullYear();
  const month = `0${date.getMonth() + 1}`;
  const days = `0${date.getDate()}`;

  const formattedTime = `${days.substr(-2)}/${month.substr(-2)}/${years}`;

  return formattedTime;
};
