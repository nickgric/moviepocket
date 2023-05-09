export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  hours.toString().length < 2 && (hours = "0" + hours.toString());
  let minutes = mins % 60;
  minutes.toString().length < 2 && (minutes = "0" + minutes.toString());
  return hours + ":" + minutes;
};
