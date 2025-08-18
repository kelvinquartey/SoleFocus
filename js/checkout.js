import { cart, removeFromCart } from '../data/cart.js';
import { products } from '../data/products.js';

import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
// import '../data/cart-class.js'

renderOrderSummary();
renderPaymentSummary();



// start of media queries

const bar = document.querySelector('#bar');
const nav = document.querySelector('.header__nav');
const close = document.querySelector('#close');


if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// end of media queries