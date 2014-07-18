/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Account = require('../../app/models/account');

describe('Account', function(){
  describe('constructor', function(){
    it('should create a new account', function(){
      var sara = new Account(3, 'Sara', 1500, 'Savings');
      expect(sara).to.be.instanceof(Account);
      expect(sara.number).to.equal(3);
      expect(sara.name).to.equal('Sara');
      expect(sara.type).to.equal('Savings');
      expect(sara.balance).to.equal(1500);
      expect(sara.deposits).to.have.length(0);
      expect(sara.withdraws).to.have.length(0);
    });
  });

  describe('#deposit', function(){
    it('should deposit money in account', function(){
      var sara = new Account(3, 'Sara', 1500, 'Savings');
      sara.deposit(5000);
      expect(sara.balance).to.equal(6500);
      expect(sara.deposits).to.have.length(1);
    });
  });
});

