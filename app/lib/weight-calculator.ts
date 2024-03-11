/**
 * This file stores all of the logic to calculate the weight earnings for a code provider.
 * 
 * For context, code providers earn weights based on the amount of code they provide. Fundamentally, coders want to know
 * how much they are earning for the work they are putting in. Through this calculator, we hope to answer questions like:
 * 
 * - "I have X amount of weights. How much MOR am I earning per day? How much USD am I earning per day?"
 * - "I have X amount of weights. How will my MOR earnings change over time? What will I be earning next month? The following month? The following year?"
 * - "Why are my earnings changing? What is the cumulative amount of weights now?"
 * 
 * To help illustrate the answer to these questions for the user, we will be providing utility functions to help calculate these answers here.
 * 
 * For more information, see https://github.com/MorpheusAIs/Docs/blob/main/Guides/Code%20Contributor%20Weights%20Guide.md.
 * 
 */

const MOR_EMISSIONS_PER_DAY = 3456; // The amount of MOR emitted per day.

/**
 * fetchEarningsSummary is a function that fetches the earnings table of the next 12 months given a
 * target weight and date, as well as a high-level summary of the earnings for the given date.
 * 
 * @param weights The amount of weights specified.
 * @param date The date for which the earnings are to be calculated.
 * 
 * @returns {{
 *  summary: {
 *    usdEarningsInDay: number, // The amount of USD earned in that day
 *    usdEarningsInMonth: number, // The amount of USD earned in that month
 *    usdEarningsInYear: number, // The amount of USD earned in that year
 *    morEarningsOnDay: number, // The amount of MOR earned in that day
 *    morEarningsOnMonth: number, // The amount of MOR earned in that month
 *    morEarningsOnYear: number, // The amount of MOR earned in that year
 *  },
 *  nextYearTable: Array<{
 *    month: number,
 *    year: number,
 *    cumulativeWeights: number,
 *    morEarningsOnMonth: number,
 *    usdEarningsOnMonth: number
 *  }>
 * }}
 */
export function fetchEarningsSummary(weights: number, date: Date, usdTarget: number): {
  summary: {
    usdEarningsInDay: number,
    usdEarningsInMonth: number,
    usdEarningsInYear: number,
    morEarningsOnDay: number,
    morEarningsOnMonth: number,
    morEarningsOnYear: number,
  },
  nextYearTable: Array<{
    month: number,
    year: number,
    cumulativeWeights: number,
    morEarningsOnMonth: number,
    usdEarningsOnMonth: number
  }>
} {
  // Now generate the table for the next 12 months.
  const nextYearTable = [];
  let currentDate = new Date(date.getTime());
  for (let i = 0; i < 12; i++) {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const cumulativeWeights = calculateCumulativeWeights(currentDate);
    const morEarningsOnMonth = calculateMOREarningsOnDay(weights, currentDate) * 30;
    const usdEarningsOnMonth = morEarningsOnMonth * usdTarget;
    nextYearTable.push({ month, year, cumulativeWeights, morEarningsOnMonth, usdEarningsOnMonth });
    currentDate.setMonth((currentDate.getMonth() + 1) % 12);
    currentDate.setFullYear(currentDate.getMonth() === 0 ? currentDate.getFullYear() + 1 : currentDate.getFullYear());
  }

  const morEarningsOnDay = calculateMOREarningsOnDay(weights, date);
  const morEarningsOnMonth = morEarningsOnDay * 30;
  const morEarningsOnYear = nextYearTable.reduce((acc, curr) => acc + curr.morEarningsOnMonth, 0);

  const usdEarningsInDay = morEarningsOnDay * usdTarget;
  const usdEarningsInMonth = morEarningsOnMonth * usdTarget;
  const usdEarningsInYear = morEarningsOnYear * usdTarget;

  return {
    summary: {
      usdEarningsInDay,
      usdEarningsInMonth,
      usdEarningsInYear,
      morEarningsOnDay,
      morEarningsOnMonth,
      morEarningsOnYear,
    },
    nextYearTable,
  };
}

/**
 *  calculateUSDEarningsOnDay is a function that calculates the amount of USD a code provider
 * is earning on the specified day based on the amount of weights they have.
 * 
 * @param weights The amount of weights the code provider has.
 * @param date The date for which the earnings are to be calculated.
 * @param usdTarget The current estimate of the value of MOR in USD.
 */
export function calculateUSDEarningsOnDay(weights: number, date: Date, usdTarget: number): number {
    const morEarningsOnDay = calculateMOREarningsOnDay(weights, date);
    return morEarningsOnDay * usdTarget;
}

/**
 * calculateMOREarningsOnDay is a function that calculates the amount of MOR a code provider
 * is earning on the specified day based on the amount of weights they have.
 * 
 * @param weights The amount of weights the code provider has.
 * @param date The date for which the earnings are to be calculated.
 */
export function calculateMOREarningsOnDay(weights: number, date: Date): number {
    const percentage = calculatePercentageOfTotalWeights(weights, date);
    return percentage * 0.01 * MOR_EMISSIONS_PER_DAY;
}

/**
 * calculatePercentageOfTotalWeights is a function that calculates the percentage of total weights 
 * that a given amount of weights represents. 
 * 
 * @param weights The amount of weights to calculate the percentage of.
 * @param date The date up to which the cumulative weights are to be calculated.
 */
export function calculatePercentageOfTotalWeights(weights: number, date: Date): number {
    const cumulativeWeights = calculateCumulativeWeights(date);
    return (weights / cumulativeWeights) * 100;
}

/**
 * calculateCumulativeWeights is a function that calculates the cumulative weights total in for code providers up to a given date.
 * This is an estimate of the total weights with granulary of a month, and with a fixed weight emissions schedule (i.e. not pulling the
 * actual weights from the blockchain).
 * 
 * @param date The date up to which the cumulative weights are to be calculated.
 * @returns The cumulative weights total up to the given date.
 */
export function calculateCumulativeWeights(date: Date): number {
    // Define some constants to help with the calculations.
    const startYear = 2023;
    const startMonth = 8; // September (0-indexed month)
    const startDate = new Date(startYear, startMonth);
    const annualWeightsStart = 25000;
    const year = date.getFullYear();
    const month = date.getMonth();
    let cumulativeWeights = 0;

  // To make it simple, ignore all dates before Feb 2024.
  if (year < 2024 || (year === 2024 && month < 1)) {
    return 0;
  }

  // First, add up all of the weights of the years leading up to the given year.
  // Keep doing this until the difference between the given year and the start year is less than 12 months.
  let currentAnnualWeights = annualWeightsStart;
  let currentDate = new Date(date.getTime());
  while (monthDiff(startDate, currentDate) >= 12) {
    cumulativeWeights += currentAnnualWeights;
    currentAnnualWeights /= 2;
    currentDate.setFullYear(currentDate.getFullYear() - 1);
  }

  // Next, add up all of the weights of the months leading up to the given month.
  // If the difference between the given month and the start month is less than 1, then we don't need to add any weights.
  if (monthDiff(startDate, date) >= 1) {
    let months = monthDiff(startDate, currentDate) + 1;
    let monthWeights = currentAnnualWeights / 12;
    cumulativeWeights += months * monthWeights;
  }

  return cumulativeWeights;
}

/**
 * Given two dates, this function calculates the difference in months between the two dates.
 * 
 * @param dateFrom 
 * @param dateTo 
 * @returns 
 */
function monthDiff(dateFrom: Date, dateTo: Date): number {
  let months = (dateTo.getFullYear() - dateFrom.getFullYear()) * 12;
  months -= dateFrom.getMonth();
  months += dateTo.getMonth();

  // Ensure the end date is after the start date
  return months <= 0 ? 0 : months;
}