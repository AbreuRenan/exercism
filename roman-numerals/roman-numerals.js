export const toRoman = (number) => {
    const ROMAN_MAP = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';

    for (const key in ROMAN_MAP) {
        while (number >= ROMAN_MAP[key]) {

            roman += key;
            number -= ROMAN_MAP[key];

        }
        if (number === 0) {
            break;
        }
    }
    return roman;
};