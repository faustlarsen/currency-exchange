import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { exchange } from './exchange.js';
async function newRates(newAmount) {
  let jsonCurrency = await exchange();
  if (jsonCurrency === false) {
    $("#error").text(`<p>Sorry, this currency doesn't exist</p>${jsonCurrency.result}`);
  } else {
    let amount = $("#amount").val();
    $("#rates").text(`Your rate per 1 unit is  ${jsonCurrency.conversion_rates[newAmount]}`);
    $("#result").text(`Your total amout is ${jsonCurrency.conversion_rates[newAmount] * amount}`);
    $("#base").text(`Converting from ${jsonCurrency.base_code}`);
  }
}
$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    let newAmount = $("#currency").val();
    newRates(newAmount);
  });
});
