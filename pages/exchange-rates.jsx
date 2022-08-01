import React from "react";

function exchangeRates() {
  /*======================================*/
  // Exchange Rates

  async function getCurrencies() {
    const url =
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";
    const response = await fetch(url);
    const data = await response.json();

    const usdRate = data[26].rate.toFixed(2);
    const eurRate = data[32].rate.toFixed(2);

    const usdElement = document.querySelector("#usd");
    const eurElement = document.querySelector("#eur");

    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
  }

  getCurrencies();

  return <div>exchange-rates</div>;
}

export default exchangeRates;
