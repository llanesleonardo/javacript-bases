/**
 * @return {} Boolean
 */
export const filterBetweenDates = (start, end) => date =>
  date >= start && date < end
