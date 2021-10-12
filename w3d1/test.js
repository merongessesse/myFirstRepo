describe("getNumber", function() {
    it("gets account number of account", function() {
        let acc = new Account(123);
        assert.equal(acc.getNumber(), 123);
    })
});

describe("toString", function() {
    it("string representation of an account", function() {
        let acc = new Account(123);
        assert.equal(acc.toString(), "Account " + acc.getNumber() + ": balance " + acc.getBalance());
    })
});

describe("deposit", function() {
    it("deposits money and update balance from account", function() {
        let acc = new Account(123);
        acc.deposit(100);
        acc.deposit(100);
        assert.equal(acc.getBalance(), 200);
        assert.throws(() => acc.deposit(-1), Error);
    })
});

describe("withdraw", function() {
    it("withdraw money and update balance from account", function() {
        let acc = new Account(123);
        acc.deposit(100);
        acc.deposit(100);
        acc.withdraw(50);
        assert.equal(acc.getBalance(), 150);
        assert.throws(function() { acc.withdraw(200) }, Error);
    })
});

describe("getInterest", function() {
    it("returns the interest of a saving account", function() {
        let sa = new SavingsAccount(123);
        sa.setInterest(10);
        assert.equal(sa.getInterest(), 10);
    });
});

describe("toString", function() {
    it("string representation of a Saving account", function() {
        let acc = new SavingsAccount(123, 10);
        assert.equal(acc.toString(), "Account " + acc.getNumber() + ": balance " + acc.getBalance() + `interest: ${acc.getInterest()}`);
    })
});

describe("addInterest", function() {
    it("returns the interest of a saving account", function() {
        let sa = new SavingsAccount(123, 10);
        sa.deposit(100);
        sa.addInterest();
        assert.equal(sa.getBalance(), 110);
    });
});

describe("withdraw", function() {
    it("withdraw money from a checking account", function() {
        let ca = new CheckingAccount(123, 100);
        ca.deposit(100);
        ca.withdraw(50);
        assert.equal(ca.getBalance(), 50);
    });
});

describe("withdraw", function() {
    it("withdraw money from a checking account below balance", function() {
        let ca = new CheckingAccount(123, 100);
        ca.deposit(100);
        ca.withdraw(150);
        assert.equal(ca.getBalance(), -50);
        assert.throws(function() { withdraw(100) }, Error);

    });
});

describe("toString", function() {
    it("string representation of a Checking account", function() {
        let acc = new CheckingAccount(123, 100);
        assert.equal(acc.toString(), "Account " + acc.getNumber() + ": balance " + acc.getBalance() + `overdraft: ${acc.getOverdraft()}`);
    })
});

describe("addAccount", function() {
    it("adds account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addAccount(), 1);
        assert.equal(bank.addAccount(), 2);

    })
});

describe("addSavingAccount", function() {
    it("adds saving account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addSavingsAccount(10), 1);
        assert.equal(bank.addSavingsAccount(10), 2);

    })
});

describe("addCheckingAccount", function() {
    it("adds checking account to bank and return count of accounts", function() {
        let bank = new Bank();
        assert.equal(bank.addCheckingAccount(10), 1);
        assert.equal(bank.addCheckingAccount(10), 2);

    })
});

describe("closeAccount", function() {
    it("removed an account from list", function() {
        let bank = new Bank();
        bank.addCheckingAccount(10);
        bank.addCheckingAccount(10);
        bank.closeAccount(bank.accounts[0].getNumber());

        assert.equal(bank.accounts.length, 1);
        bank.closeAccount(10);

        assert.equal(bank.accounts.length, 1);
        bank.closeAccount(bank.accounts[0].getNumber());
        assert.equal(bank.accounts.length, 0);
    })
});

describe("accountReport", function() {
    it("returns a String with each account on its own line", function() {
        let bank = new Bank();
        bank.addAccount();
        assert.equal(bank.accountReport(), 'Account 1: balance 0\n');

    })
});


describe("endOfMonth", function() {
    it("return empty endOfMonth report for account", function() {
        let acc = new Account(10);
        assert.equal(acc.endOfMonth(), '');
    })
});

describe("endOfMonth", function() {
    it("return formatted endOfMonth report for saving account", function() {
        let acc = new SavingsAccount(1, 10);
        acc.deposit(100);
        assert.equal(acc.endOfMonth(), 'Interest added SavingsAccount 1: balance: 110 interest: 10');
    })
});

describe("endOfMonth", function() {
    it("return formatted endOfMonth report for checking account", function() {
        let acc = new CheckingAccount(1, 100);
        acc.deposit(50);
        acc.withdraw(100);
        assert.equal(acc.endOfMonth(), 'Warning, low balance CheckingAccount 1: balance: -50 overdraft limit: 100');
    })
});