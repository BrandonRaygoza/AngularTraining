"use strict";
var PersonalAccount = /** @class */ (function () {
    function PersonalAccount(accountNumber, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
    PersonalAccount.prototype.deposit = function (ammount) {
        this.accountBalance += ammount;
    };
    PersonalAccount.prototype.withdrawal = function (ammount) {
        this.accountBalance -= ammount;
    };
    PersonalAccount.prototype.checkBalance = function () {
        return this.accountBalance;
    };
    return PersonalAccount;
}());
var BusinessAccount = /** @class */ (function () {
    function BusinessAccount(accountNumber, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
    BusinessAccount.prototype.deposit = function (ammount) {
        this.accountBalance += ammount;
    };
    BusinessAccount.prototype.withdrawal = function (ammount) {
        this.accountBalance -= ammount;
    };
    BusinessAccount.prototype.checkBalance = function () {
        return this.accountBalance;
    };
    return BusinessAccount;
}());
var CreditCard = /** @class */ (function () {
    function CreditCard(accountNumber, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountBalance = accountBalance;
    }
    CreditCard.prototype.deposit = function (ammount) {
        this.accountBalance += ammount;
    };
    CreditCard.prototype.withdrawal = function (ammount) {
        this.accountBalance -= ammount;
    };
    CreditCard.prototype.checkBalance = function () {
        return this.accountBalance;
    };
    CreditCard.prototype.calculateInterest = function () {
        return 0.15;
    };
    return CreditCard;
}());
var regularClient = new PersonalAccount(1234, 5000);
console.log("Balance inicial: " + regularClient.checkBalance());
regularClient.deposit(500);
console.log("Balance actua: " + regularClient.checkBalance());
regularClient.withdrawal(600);
console.log("Balance actua: " + regularClient.checkBalance());
var businessClient = new PersonalAccount(1235, 10000);
console.log("Balance inicial: " + businessClient.checkBalance());
businessClient.deposit(500);
console.log("Balance actua: " + businessClient.checkBalance());
businessClient.withdrawal(600);
console.log("Balance actua: " + businessClient.checkBalance());
var creditClient = new CreditCard(1236, 1000);
console.log("Balance inicial: " + creditClient.checkBalance());
creditClient.deposit(500);
console.log("Balance actua: " + creditClient.checkBalance());
creditClient.withdrawal(600);
console.log("Balance actua: " + creditClient.checkBalance());
console.log("Interes: " + creditClient.calculateInterest());
