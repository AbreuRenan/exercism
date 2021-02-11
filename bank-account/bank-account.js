//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
    Balance = null;
    isOpen = false;
    open() {
        if (this.isOpen === true) throw new ValueError();
        this.Balance = 0;
        this.isOpen = true;
    }

    close() {
        if (this.isOpen === false) throw new ValueError();
        this.Balance = null;
        this.isOpen = false;
    }

    deposit(value) {
        if (this.isOpen === false || value < 0) throw new ValueError();
        this.Balance += value;
    }

    withdraw(value) {
        if (this.isOpen === false || value > this.Balance || value < 0) throw new ValueError()
        this.Balance -= value;

    }
    get balance() {
        if (this.isOpen === false) throw new ValueError()
        return this.Balance;
    }
}
export class ValueError extends Error {

    constructor() {
        super("Bank account error");
    }
}