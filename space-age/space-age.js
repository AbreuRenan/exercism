//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const EarhtYearInSeconds = 31557600
const ORBITAL_PERIODS = {
    'mercury': 0.2408467 * EarhtYearInSeconds,
    'venus': 0.61519726 * EarhtYearInSeconds,
    'earth': 1.0 * EarhtYearInSeconds,
    'mars': 1.8808158 * EarhtYearInSeconds,
    'jupiter': 11.862615 * EarhtYearInSeconds,
    'saturn': 29.447498 * EarhtYearInSeconds,
    'uranus': 84.016846 * EarhtYearInSeconds,
    'neptune': 164.79132 * EarhtYearInSeconds
}

export const age = (planet, seconds) => {
    return +(seconds / ORBITAL_PERIODS[planet.toLowerCase()]).toFixed(2)
};