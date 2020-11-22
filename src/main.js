import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { exchange } from './exchange.js';
async function newRates(amount, newCurrency, newCurrency2) {
  let jsonCurrency = await exchange();
  if (jsonCurrency === false) {
    $("#error").html(`<p>Sorry, this currency doesn't exist</p>${jsonCurrency.error}`);
  } else {
    let conversion = jsonCurrency.conversion_rates[newCurrency] / jsonCurrency.conversion_rates[newCurrency2];
    let currencyExchange = amount * conversion;
    $("#rates").text(`Your rate for 1 USD is ${jsonCurrency.conversion_rates[newCurrency]}`);
    $("#resultInUsd").text(`Your total in USD is ${jsonCurrency.conversion_rates[newCurrency] * amount}`);
    $("#conversion").html(`TOTAL: Converted ${currencyExchange} ${newCurrency} from ${newCurrency2}`);
    $("#lastUpdate").html(`Last update was on ${jsonCurrency.time_last_update_utc}`);
  }
}
$(document).ready(function() {
  $("#submit").click(function() {
    event.preventDefault();
    let amount = parseInt($("#amount").val());
    let newCurrency = $("#currency").val();
    let newCurrency2 = $("#currency2").val();
    $("#amount").val();
    $("#currency").val();
    $("#currency2").val();
    newRates(amount, newCurrency, newCurrency2);
  });
});