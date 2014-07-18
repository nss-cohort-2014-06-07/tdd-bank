'use strict';

function Account(number, name, deposit, type){
  this.number = number;
  this.name = name;
  this.type = type;
  this.balance = deposit;
  this.isSuspended = false;
  this.deposits = [];
  this.withdraws = [];
  this.fees = [];
}

Account.prototype.deposit = function(amount){
  if(this.isSuspended){
    return;
  }

  this.balance += amount;
  this.deposits.push(amount);
};

Account.prototype.withdraw = function(amount){
  if(this.isSuspended){
    return;
  }

  this.balance -= amount;
  this.withdraws.push(amount);

  if(this.balance < 0){
    this.balance -= 50;
    this.fees.push(50);
    if(this.fees.length >= 3){
      this.isSuspended = true;
    }
  }
};

module.exports = Account;

