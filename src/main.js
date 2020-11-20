import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { exchange } from './exchange.js';
async function newRates(amount, newCurrency, newCurrency2) {
  let jsonCurrency = await exchange();
  if (jsonCurrency === false) {
    $("#error").text(`<p>Sorry, this currency doesn't exist</p>${jsonCurrency.result}`);
  } else {
    
    let conversion = jsonCurrency.conversion_rates[newCurrency] / jsonCurrency.conversion_rates[newCurrency2];
    let currencyExchange = amount * conversion;
    $("#conversion").html(`Convert ${currencyExchange} ${newCurrency} from ${newCurrency2}`);
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


// $("#rates").text(`Your rate per 1 unit is  ${jsonCurrency.conversion_rates[newAmount]}`);
// $("#result").text(`Your total amout is ${jsonCurrency.conversion_rates[newAmount] * amount}`);
// $("#base").text(`Converting from ${jsonCurrency.base_code}`);
// $("#lastUpdate").text(`Last update ${jsonCurrency.time_last_update_utc}`);