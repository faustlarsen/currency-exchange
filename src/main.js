import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { exchange } from './exchange.js';
async function newRates(amount, newCurrency, newCurrency2) {
  let jsonCurrency = await exchange();
  if (!jsonCurrency) {
    $("#error").html(`Sorry, this currency doesn't exist`);
  } else {
    if (jsonCurrency.conversion_rates) {
      let conversion = jsonCurrency.conversion_rates[newCurrency] / jsonCurrency.conversion_rates[newCurrency2];
      let currencyExchange = (amount * conversion).toFixed(2);
      $("#rates").text(`Your rate for 1 ${jsonCurrency.base_code} is ${jsonCurrency.conversion_rates[newCurrency]} ${newCurrency}`);
      $("#resultInUsd").text(`Your total in ${jsonCurrency.base_code} is ${jsonCurrency.conversion_rates[newCurrency] * amount} ${newCurrency}`);
      $("#conversion").html(`TOTAL: Converted ${amount} ${newCurrency2} to ${currencyExchange} ${newCurrency}`);
      $("#lastUpdate").html(`Last update was on ${jsonCurrency.time_last_update_utc}`);
    } else {
      $('#wrongKey').text(`There is a wrong API: ${jsonCurrency["error-type"]}`);
    }
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



