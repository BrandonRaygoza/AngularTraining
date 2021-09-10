interface IAccount {
    
    accountNumber : number;     
    accountBalance : number;

    deposit(ammount: number) : void;
    withdrawal(ammount: number) : void;
    checkBalance(ammount: number) : number;
}

interface ICreditAccount extends IAccount {
    
   calculateInterest() : number;
}

class PersonalAccount implements IAccount{

    accountNumber : number;
    accountBalance : number;

    constructor(accountNumber : number, accountBalance: number){
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }

    deposit(ammount : number): void{
        this.accountBalance += ammount;
    }

    withdrawal(ammount : number): void{
        this.accountBalance -= ammount;
    }

    checkBalance() : number{
        return this.accountBalance;
    }
}

class BusinessAccount implements IAccount{
    accountNumber : number;
    accountBalance : number;

    constructor(accountNumber : number, accountBalance: number){
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }

    deposit(ammount : number): void{
        this.accountBalance += ammount;
    }

    withdrawal(ammount : number): void{
        this.accountBalance -= ammount;
    }

    checkBalance() : number{
        return this.accountBalance;
    }
}

class CreditCard implements ICreditAccount{
    accountNumber : number;
    accountBalance : number;

    constructor(accountNumber : number, accountBalance: number){
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }

    deposit(ammount : number): void{
        this.accountBalance += ammount;
    }

    withdrawal(ammount : number): void{
        this.accountBalance -= ammount;
    }

    checkBalance() : number{
        return this.accountBalance;
    }

    calculateInterest() : number{
        return 0.15;
    }
}

let regularClient = new PersonalAccount(1234,5000);
console.log("Balance inicial: "+regularClient.checkBalance());
regularClient.deposit(500);
console.log("Balance actua: "+regularClient.checkBalance());
regularClient.withdrawal(600);
console.log("Balance actua: "+regularClient.checkBalance());

let businessClient = new PersonalAccount(1235,10000);
console.log("Balance inicial: "+businessClient.checkBalance());
businessClient.deposit(500);
console.log("Balance actua: "+businessClient.checkBalance());
businessClient.withdrawal(600);
console.log("Balance actua: "+businessClient.checkBalance());

let creditClient = new CreditCard(1236, 1000);
console.log("Balance inicial: "+creditClient.checkBalance());
creditClient.deposit(500);
console.log("Balance actua: "+creditClient.checkBalance());
creditClient.withdrawal(600);
console.log("Balance actua: "+creditClient.checkBalance());
console.log("Interes: "+creditClient.calculateInterest());