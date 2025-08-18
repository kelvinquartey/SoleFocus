import {calculateCartQuantity } from "../data/cart.js";
updateCartQuantityAtTop()


document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form refresh

  const name = document.getElementById("contactName").value.trim();
  const email = document.getElementById("contactEmail").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return; // Stop execution if any field is empty
  }

  const successMessage = document.getElementById('successMessage');

  // Show success message
  successMessage.style.display = 'block';

  // Wait 2 seconds, then hide message and reset form
  setTimeout(() => {
    successMessage.style.display = 'none';
    document.getElementById('contactForm').reset();
  }, 2000);
});

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
