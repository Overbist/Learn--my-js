'use strict';

const buttonsWrapper = document.querySelector('.tabs__btns');
const contentWrapper  = document.querySelector('.tabs__content');

buttonsWrapper.addEventListener('click', event => {
    let clickedBtn = event.target.closest('.tabs__btn');
    let index = clickedBtn.dataset.value;

    buttonsWrapper.querySelector('.tabs__btn--active').classList.remove('tabs__btn--active');
    clickedBtn.classList.add('tabs__btn--active');
  
    contentWrapper.querySelector('.tabs__item--show').classList.remove('tabs__item--show');
    contentWrapper.querySelector(`.tabs__item[data-tab="${index}"]`).classList.add('tabs__item--show');
    //contentWrapper.querySelector(`.tab--${index}`).classList.add('tabs__item--active');
});





/*======================================*/
    // Toggle Tabs
    // btnWrapper.find('.js-tabs-btn a').on('click', function (event) {
    //     event.preventDefault();
    //     var nav = navigator.userAgent;

    //     if ($(this).parent().hasClass('active')) {
    //         return;
    //     }

    //     var tab = $(this).attr('href');
    //     btnWrapper.find('.js-tabs-btn').removeClass('active');
    //     $(this).parent().addClass('active');

    //     $('.js-tabs-section').addClass('hide');
    //     $('.js-tabs-section').removeClass('show');
    //     $(tab).removeClass('hide');
    //     $(tab).addClass('show');

    // });