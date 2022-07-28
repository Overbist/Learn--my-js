'use strict';


/*======================================*/
// Toggle Tabs

const buttonsWrapper = document.querySelector('.tabs__btns');
const contentWrapper  = document.querySelector('.tabs__content');

buttonsWrapper.addEventListener('click', event => {
    let clickedBtn = event.target;
    let index = clickedBtn.dataset.value;

    buttonsWrapper.querySelector('.tabs__btn--active').classList.remove('tabs__btn--active');
    clickedBtn.classList.add('tabs__btn--active');
  
    contentWrapper.querySelector('.tabs__item--show').classList.remove('tabs__item--show');
    contentWrapper.querySelector(`.tabs__item[data-tab="${index}"]`).classList.add('tabs__item--show');
    //contentWrapper.querySelector(`.tab--${index}`).classList.add('tabs__item--active');
});




/*======================================*/
// Exchange Rates

async function getCurrencies() {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'; 
    const response = await fetch(url);
    const data = await response.json();

    const usdRate = data[26].rate.toFixed(2);
    const eurRate = data[32].rate.toFixed(2);
    
    const usdElement = document.querySelector('#usd');
    const eurElement = document.querySelector('#eur');

    usdElement.innerText = usdRate;
    eurElement.innerText = eurRate;
}

getCurrencies();

