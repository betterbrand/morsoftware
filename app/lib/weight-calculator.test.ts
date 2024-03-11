import { calculateCumulativeWeights } from './weight-calculator';

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
    expect(cumulativeWeights).toBe(46875);
  });

  it('should halve the annual weights each year after the first year, example 3', () => {
    const date = new Date(2027, 9); // October 2027
    const cumulativeWeights = calculateCumulativeWeights(date);
    expect(cumulativeWeights - 47135).toBeLessThan(1);
  });
});
