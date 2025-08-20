import {calculateCartQuantity } from "../data/cart.js";
updateCartQuantityAtTop()

function updateCartQuantityAtTop(){
  const cartQuantity = calculateCartQuantity();

  document.querySelector('.js-cart-quantity')
    .innerHTML = `${cartQuantity}`;
}






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