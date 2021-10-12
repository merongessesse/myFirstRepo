class CheckingAccount extends Account {
    constructor(number, overdraft) {
        super(number);
        this._overdraft = overdraft;
    }


    getOverdraft() {
        return this._overdraft;
    }

    setOverdraft(overdraft) {
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount < this._balance || amount <= 0) {
            return super.withdraw(amount);
        }

        if (amount > this._balance + this._overdraft) {
            throw Error(`cant withdrow ${this._overdraft}`)
        }

        this._balance -= amount;
    }

    toString() {
        return super.toString() + `overdraft: ${this._overdraft}`;
    }

    endOfMonth() {
        
        if (this._balance < 0) {
            return `Warning, low balance CheckingAccount ${this._number}: balance: ${this._balance} overdraft limit: ${this._overdraft}`;
        }

        return "";
    }
}