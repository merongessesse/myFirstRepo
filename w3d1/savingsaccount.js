class SavingsAccount extends Account {
    constructor(number, interest) {
        super(number);
        this._interest = interest;
    }

    getInterest() {
        return this._interest;
    }

    setInterest(interest) {
        this._interest = interest;
    }

    addInterest() {
        let am = this._balance * this._interest / 100;
        this._balance += am;
    }

    toString() {
        return super.toString() + `interest: ${this._interest}`;
    }

    endOfMonth() {
        
        const oldB = this._balance;
        this.addInterest();

        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._balance - oldB}`;
    }
}