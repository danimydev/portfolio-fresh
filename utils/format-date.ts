const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function getDate(originalDate?: string) {
  const date = originalDate ? new Date(originalDate) : new Date();
  return {
    day: `${dayNames[date.getDay()]} ${date.getDate()}`,
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
  };
}
