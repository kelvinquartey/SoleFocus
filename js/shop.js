import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js'

let productsHTML = '';


products.forEach((product) => {
    
    productsHTML += `
        <article class="pro js-product modalbtn" data-product-id ="${product.id}">
            <img class="product-image" src="${product.image}" alt="product 1">
            <div class="des">
                <span class="product-brand">${product.brand}</span>
                <h5 class="product-name">${product.name}</h5>
                <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                </div>
                <h4 class="product-price">$${product.price}</h4>
            </div>

            <button class="add-to-cart-button js-add-to-cart"
            data-product-id="${product.id}">
                Add to Cart
            </button>
        </article>
    `;

});

document.querySelector('.js-products-container')
    .innerHTML = productsHTML;


document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
        button.addEventListener('click', () =>{
            const productId = button.dataset.productId;
            addToCart(productId);
            updateCartQuantity();
        });
    })

function updateCartQuantity(){
    let cartQuantity = 0;

    cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
    })

    document.querySelector('.js-cart-quantity')
        .innerHTML = cartQuantity;
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

