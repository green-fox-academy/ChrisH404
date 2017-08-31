'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function getBalance(arr) {
  arr.forEach(function(item,index) {
    console.log("Client: " + item.client_name + " have balance of " + item.balance);
  });
}

function transfer (from, to, amount) {
  var fromindex  = -1;
  var toindex = -1;
  accounts.forEach(function(item,index) {
    if (from === item.account_number) {
      fromindex = index;
    } else if (to === item.account_number) {
      toindex = index;
    }
  });
  if (fromindex < 0 || toindex < 0) {
    console.log("404 - account not found");
  } else {
    accounts[fromindex].balance -= amount;
    accounts[toindex].balance += amount;
  }
}

getBalance(accounts);
transfer(11234543,43546731,1);