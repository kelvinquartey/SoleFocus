// import {cart, addToCart} from '../data/cart.js';
// import {products} from '../data/products.js'


// let productsHTML = '';


// products.forEach((product, index) => {
//     if(index<=7){
//     productsHTML += `
//         <article class="pro js-product modalbtn" data-product-id ="${product.id}">
//             <img class="product-image" src="${product.image}" alt="product 1">
//             <div class="des">
//                 <span class="product-brand">${product.brand}</span>
//                 <h5 class="product-name">${product.name}</h5>
//                 <div class="star">
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                         <i class="fas fa-star"></i>
//                 </div>
//                 <h4 class="product-price">$${product.price}</h4>
//             </div>

//             <button class="add-to-cart-button js-add-to-cart"
//             data-product-id="${product.id}">
//                 Add to Cart
//             </button>
//         </article>
//     `;

//     return productsHTML}

// });





// document.querySelector('.js-products-container')
//     .innerHTML = productsHTML;


// document.querySelectorAll('.js-add-to-cart')
//     .forEach((button) => {
//         button.addEventListener('click', () =>{
//             const productId = button.dataset.productId;
//             addToCart(productId);
//             updateCartQuantity();

//         });
//     })

// function updateCartQuantity(){
//     let cartQuantity = 0;

//     cart.forEach((cartItem) => {
//         cartQuantity += cartItem.quantity;
//     })

//     document.querySelector('.js-cart-quantity')
//         .innerHTML = cartQuantity;
// }