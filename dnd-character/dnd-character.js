//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (ability) => {
    if ((ability > 18)) {
        throw new Error("Ability scores can be at most 18")
    }
    if (ability < 3) {
        throw new Error("Ability scores must be at least 3")
    }
    return Math.floor((ability - 10) / 2)

};

// console.log(abilityModifier(3))

export class Character {
    static rollAbility() {
        let roll = []
        roll.push(Math.floor(Math.random() * (6 - 1) + 1)) // 1st dice
        roll.push(Math.floor(Math.random() * (6 - 1) + 1)) // 2nd dice
        roll.push(Math.floor(Math.random() * (6 - 1) + 1)) // 3rd dice
        roll.push(Math.floor(Math.random() * (6 - 1) + 1)) // 4th dice
        roll.sort().reverse().pop() // put array in crescent order, then reverse it, then remove the last
        let finalScore = 0
        for (let i = 0; i < roll.length; i++) {
            finalScore += roll[i]
        }
        return finalScore
    }
    strength = Character.rollAbility()
    dexterity = Character.rollAbility()
    constitution = Character.rollAbility()
    intelligence = Character.rollAbility()
    wisdom = Character.rollAbility()
    charisma = Character.rollAbility()
    hitpoints = 10 + abilityModifier(this.constitution)

    get strength() {
        return this.strength
    }

    get dexterity() {
        return this.dexterity
    }

    get constitution() {
        return this.constitution
    }

    get intelligence() {
        return this.intelligence
    }

    get wisdom() {
        return this.wisdom
    }

    get charisma() {
        return this.charisma
    }

    get hitpoints() {
        return this.hitpoints
    }
}

console.log(Character.rollAbility())