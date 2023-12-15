const monthNames = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];

const dayNames = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

export function getDate(originalDate?: string) {
  const date = originalDate ? new Date(originalDate) : new Date();
  return {
    day: `${dayNames[date.getDay()]} ${date.getDate()}`,
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
  };
}

export function getDateProps(date: Date) {
  return {
    day: dayNames[date.getDate()],
    month: monthNames[date.getMonth()],
    year: date.getFullYear(),
  };
}
