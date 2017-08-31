'use strict';

var button = document.querySelector('button');
var party = document.querySelector('div');
function partySwitch () {
  if (party.classList.contains('party')) {
    party.classList.remove('party');
  }else {
    party.classList.add('party');
  }
}
button.addEventListener('click', partySwitch);
