import { calculateCumulativeWeights, fetch12MonthEarningsChartData } from './weight-calculator';

describe('calculateCumulativeWeights', () => {
  it('should return 0 when the date is before the start year', () => {
    const date = new Date(2022, 0); // January 1, 2022
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights).toBe(0);
  });

  it('should return the initial amount when we are at the first month and first year', () => {
    const date = new Date(2024, 1); // Feb 2024
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights).toBe(12500);
  });

  it('should return the correct amount of weights a few months after initial emissions', () => {
    const date = new Date(2024, 4); // May 2024
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights).toBe(18750);
  });

  it('should halve the annual weights each year after the first year', () => {
    const date = new Date(2025, 0); // January 2025
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights - 30208).toBeLessThan(1);
  });

  it('should halve the annual weights each year after the first year, example 2', () => {
    const date = new Date(2027, 8); // September 2027
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights - 47005).toBeLessThan(1);
  });

  it('should halve the annual weights each year after the first year, example 3', () => {
    const date = new Date(2027, 9); // October 2027
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights - 47135).toBeLessThan(1);
  });

  it('should return the correct amount for cumulative weights', () => {
    const date = new Date(2024, 7); // August 2024
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights).toBe(25000);
  });

  it('should return the correct amount for cumulative weights, example 2', () => {
    const date = new Date(2024, 8); // September 2024
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights - 26042).toBeLessThan(1);
  });

  it('should return the correct chart for the next 12 months', () => {
    const date = new Date(2024, 3); // April 2024
    const chart = fetch12MonthEarningsChartData(100, date, 10);
    expect(chart).toEqual({
      usdEarningsInDay: 207.36,
      usdEarningsInMonth: 6220.8,
      usdEarningsInYear: 50409.758655458,
      morEarningsOnDay: 20.736,
      morEarningsOnMonth: 622.08,
      morEarningsOnYear: 5040.9758655458,
      nextYearChart: [
        {
          month: 3,
          year: 2024,
          cumulativeWeights: 16666.666666666668,
          morEarningsOnMonth: 622.08,
          usdEarningsOnMonth: 6220.8
        },
        {
          month: 4,
          year: 2024,
          cumulativeWeights: 18750,
          morEarningsOnMonth: 552.9599999999999,
          usdEarningsOnMonth: 5529.599999999999
        },
        {
          month: 5,
          year: 2024,
          cumulativeWeights: 20833.333333333336,
          morEarningsOnMonth: 497.664,
          usdEarningsOnMonth: 4976.639999999999
        },
        {
          month: 6,
          year: 2024,
          cumulativeWeights: 22916.666666666668,
          morEarningsOnMonth: 452.4218181818182,
          usdEarningsOnMonth: 4524.218181818182
        },
        {
          month: 7,
          year: 2024,
          cumulativeWeights: 25000,
          morEarningsOnMonth: 414.71999999999997,
          usdEarningsOnMonth: 4147.2
        },
        {
          month: 8,
          year: 2024,
          cumulativeWeights: 26041.666666666668,
          morEarningsOnMonth: 398.1312,
          usdEarningsOnMonth: 3981.312
        },
        {
          month: 9,
          year: 2024,
          cumulativeWeights: 27083.333333333332,
          morEarningsOnMonth: 382.8184615384616,
          usdEarningsOnMonth: 3828.184615384616
        },
        {
          month: 10,
          year: 2024,
          cumulativeWeights: 28125,
          morEarningsOnMonth: 368.64,
          usdEarningsOnMonth: 3686.3999999999996
        },
        {
          month: 11,
          year: 2024,
          cumulativeWeights: 29166.666666666668,
          morEarningsOnMonth: 355.47428571428577,
          usdEarningsOnMonth: 3554.7428571428577
        },
        {
          month: 0,
          year: 2025,
          cumulativeWeights: 30208.333333333336,
          morEarningsOnMonth: 343.21655172413796,
          usdEarningsOnMonth: 3432.1655172413793
        },
        {
          month: 1,
          year: 2025,
          cumulativeWeights: 31250,
          morEarningsOnMonth: 331.776,
          usdEarningsOnMonth: 3317.76
        },
        {
          month: 2,
          year: 2025,
          cumulativeWeights: 32291.666666666668,
          morEarningsOnMonth: 321.0735483870968,
          usdEarningsOnMonth: 3210.735483870968
        }
      ]}
    )
  });
});
