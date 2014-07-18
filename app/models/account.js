'use strict';

function Account(number, name, deposit, type){
  this.number = number;
  this.name = name;
  this.type = type;
  this.balance = deposit;
  this.deposits = [];
  this.withdraws = [];
}

Account.prototype.deposit = function(amount){
  this.balance += amount;
  this.deposits.push(amount);
};

module.exports = Account;

