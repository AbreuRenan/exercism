//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dnaString) => {
    return dnaString.split('').map(e => {
        const dict = { 'A': 'U', 'G': 'C', 'C': 'G', 'T': 'A' }
        return e.replace(e, dict[e])
    }).join('')
}