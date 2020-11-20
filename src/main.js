import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { exchange } from './exchange.js';

async function newRates(newCurrency) {
  let jsonCurrency = await exchange(newCurrency);
  if (jsonCurrency === false) {
    $("#result").text("Sorry, this currency isn't available")
  } else {
    $("#result").text(`You have ${jsonCurrency}`)
  }
}


$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    let newCurrency = $("#currency").val();
    newRates(newCurrency);
  });
});
