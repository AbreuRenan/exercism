//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (d) => {
    const date = new Date(d)
    const finalDate = Date.parse(date) + (Math.pow(10, 9) * 1000)
    return new Date(finalDate)
};