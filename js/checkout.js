import { cart, removeFromCart } from '../data/cart.js';
import { products, getProduct } from '../data/products.js';
import { getDeliveryOption } from '../data/deliveryOption.js';

let cartSummaryHTML = '';


cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });

  cartSummaryHTML +=`
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
          Delivery date: Friday, January 3
      </div>

      <div class="cart-item-details-grid">
          <img class="product-images" src="${matchingProduct.image}">

          <div class="cart-items-details">
              <div class="product-name">
                  ${matchingProduct.brand} ${matchingProduct.name}
              </div>
              <div class="product-price">
                  $78
              </div>
              <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                  </span>
              </div>
          </div>

          <div class="delivery-options">
              <div class="delivery-options-title">
                  Choose a delivery option:
              </div>
              <div class="delivery-option">
                  <input type="radio" checked
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Tuesday, June 21
                    </div>
                    <div class="delivery-option-price">
                      FREE Shipping
                    </div>
                  </div>
              </div>

              <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Wednesday, June 15
                    </div>
                    <div class="delivery-option-price">
                      $4.99 - Shipping
                    </div>
                  </div>
              </div>

              <div class="delivery-option">
                  <input type="radio"
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      Monday, June 13
                    </div>
                    <div class="delivery-option-price">
                      $9.99 - Shipping
                    </div>
                  </div>
              </div>
          </div>
      </div>


    </div>
  `;
});

document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
    });
});


let productPrice = 0;
let shippingPrice = 0;

cart.forEach((cartItem) => {
  const product = getProduct(cartItem.productId);

  productPrice += product.price * cartItem.quantity;

  const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
  shippingPrice += deliveryOption.price;
});

const totalBeforeTax = productPrice + shippingPrice;
const taxAmount = Math.round(totalBeforeTax * 0.1);
const totalAmount = totalBeforeTax + taxAmount;

const paymentSummaryHTML = `
  <div class="payment-summary-title">
      Order Summary
  </div>

  <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money">$${productPrice}</div>
  </div>

  <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${shippingPrice}</div>
  </div>

  <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${totalBeforeTax}</div>
  </div>
  
  <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${taxAmount}</div>
  </div>

  <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${totalAmount}</div>
  </div>

  <button class="place-order-button button-primary">
      Place your order
  </button>
`

document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;




// function deliveryOptionsHTML(matchingProduct, cartItem){
//     let html = '';

//     deliveryOptions.forEach((deliveryOption) => {
//         const today = dayjs();
//             const deliveryDate = today.add(
//                 deliveryOption.deliveryDays,
//                 'days'
//             );
//             const dateString = deliveryDate.format(
//                 'dddd, MMMM D'
//             )

//             const priceString = deliveryOption.price === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} - `;

//             const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

//             html += `
//                 <div class="delivery-option js-delivery-option"
//                     data-product-id ="${matchingProduct.id}"
//                     data-delivery-option-id = "${deliveryOption.id}">
//                     <input type="radio" 
//                         ${isChecked ?  'checked' : ''}
//                         class="delivery-option-input"
//                         name="delivery-option-${matchingProduct.id}">
//                     <div>
//                         <div class="delivery-option-date">
//                             ${dateString}
//                         </div>
//                         <div class="delivery-option-price">
//                             ${priceString} - Shipping
//                         </div>
//                     </div>
//                 </div>
//             `
//     });

//     return html;
// }






























// let cartSummaryHTML = '';

// cart.forEach((cartItem) => {




//     cartSummaryHTML += `
//     <div class="cart-item-container
//       js-cart-item-container-${matchingProduct.id}">
//       <div class="delivery-date">
//         Delivery date: Tuesday, June 21
//       </div>

//       <div class="cart-item-details-grid">
//         <img class="product-image"
//           src="${matchingProduct.image}">

//         <div class="cart-item-details">
//           <div class="product-name">
//             ${matchingProduct.name}
//           </div>
//           <div class="product-price">
//             $${formatCurrency(matchingProduct.priceCents)}
//           </div>
//           <div class="product-quantity">
//             <span>
//               Quantity: <span class="quantity-label">${cartItem.quantity}</span>
//             </span>
//             <span class="update-quantity-link link-primary">
//               Update
//             </span>
//             <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
//               Delete
//             </span>
//           </div>
//         </div>

//         <div class="delivery-options">
//           <div class="delivery-options-title">
//             Choose a delivery option:
//           </div>
//           <div class="delivery-option">
//             <input type="radio" checked
//               class="delivery-option-input"
//               name="delivery-option-${matchingProduct.id}">
//             <div>
//               <div class="delivery-option-date">
//                 Tuesday, June 21
//               </div>
//               <div class="delivery-option-price">
//                 FREE Shipping
//               </div>
//             </div>
//           </div>
//           <div class="delivery-option">
//             <input type="radio"
//               class="delivery-option-input"
//               name="delivery-option-${matchingProduct.id}">
//             <div>
//               <div class="delivery-option-date">
//                 Wednesday, June 15
//               </div>
//               <div class="delivery-option-price">
//                 $4.99 - Shipping
//               </div>
//             </div>
//           </div>
//           <div class="delivery-option">
//             <input type="radio"
//               class="delivery-option-input"
//               name="delivery-option-${matchingProduct.id}">
//             <div>
//               <div class="delivery-option-date">
//                 Monday, June 13
//               </div>
//               <div class="delivery-option-price">
//                 $9.99 - Shipping
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     `
// });





















// import { getProduct } from '../data/products.js';
// import { getDeliveryOption } from '../data/deliveryOption.js';
// import { cart } from '../data/cart.js';
// import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

// let cartSummaryHTML = '';

// cart.forEach((cartItem) => {
//     const productId = cartItem.productId;

//     const matchingProduct = getProduct(productId);

//     const deliveryOptionId = cartItem.deliveryOptionId;
//     const deliveryOption = getDeliveryOption(deliveryOptionId);

//     const today = dayjs();
//     const deliveryDate = today.add(
//       deliveryOption.deliveryDays,
//       'days'
//     );
//     const dateString = deliveryDate.format(
//       'dddd, MMMM D'
//     );

//     cartSummaryHTML +=`
//         <div class="cart-item-container
//         js-cart-item-container-${matchingProduct.id}">
//             <div class="delivery-date">
//                 Delivery date: ${dateString}
//             </div>

//             <div class="cart-item-details-grid">
//                 <img class="product-images" 
//                 src="${matchingProduct.image}">

//                 <div class="cart-items-details">
//                     <div class="product-name">
//                         ${matchingProduct.name}
//                     </div>
//                     <div class="product-price">
//                         $${matchingProduct.price}
//                     </div>
//                     <div class="product-quantity">
//                         <span>
//                             Quantity: <span class="quantity-label">${cartItem.quantity}</span>
//                         </span>
//                         <span class="update-quantity-link link-primary">
//                             Update
//                         </span>
//                         <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}>
//                             Delete
//                         </span>
//                     </div>
//                 </div>

//                 <div class="delivery-options">
//                     <div class="delivery-options-title">
//                         Choose a delivery option:
//                     </div>
//                     ${deliveryOptionsHTML(matchingProduct, cartItem)}
//                 </div>
//             </div>


//         </div>
//     `;
// });

// function deliveryOptionsHTML(matchingProduct, cartItem){
//     let html = '';

//     deliveryOptions.forEach((deliveryOption) => {
//         const today = dayjs();
//             const deliveryDate = today.add(
//                 deliveryOption.deliveryDays,
//                 'days'
//             );
//             const dateString = deliveryDate.format(
//                 'dddd, MMMM D'
//             )

//             const priceString = deliveryOption.price === 0 ? 'FREE' : `$${formatCurrency(deliveryOption.priceCents)} - `;

//             const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

//             html += `
//                 <div class="delivery-option js-delivery-option"
//                     data-product-id ="${matchingProduct.id}"
//                     data-delivery-option-id = "${deliveryOption.id}">
//                     <input type="radio" 
//                         ${isChecked ?  'checked' : ''}
//                         class="delivery-option-input"
//                         name="delivery-option-${matchingProduct.id}">
//                     <div>
//                         <div class="delivery-option-date">
//                             ${dateString}
//                         </div>
//                         <div class="delivery-option-price">
//                             ${priceString} - Shipping
//                         </div>
//                     </div>
//                 </div>
//             `
//     });

//     return html;
// }






























// // let cartSummaryHTML = '';

// // cart.forEach((cartItem) => {




// //     cartSummaryHTML += `
// //     <div class="cart-item-container
// //       js-cart-item-container-${matchingProduct.id}">
// //       <div class="delivery-date">
// //         Delivery date: Tuesday, June 21
// //       </div>

// //       <div class="cart-item-details-grid">
// //         <img class="product-image"
// //           src="${matchingProduct.image}">

// //         <div class="cart-item-details">
// //           <div class="product-name">
// //             ${matchingProduct.name}
// //           </div>
// //           <div class="product-price">
// //             $${formatCurrency(matchingProduct.priceCents)}
// //           </div>
// //           <div class="product-quantity">
// //             <span>
// //               Quantity: <span class="quantity-label">${cartItem.quantity}</span>
// //             </span>
// //             <span class="update-quantity-link link-primary">
// //               Update
// //             </span>
// //             <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
// //               Delete
// //             </span>
// //           </div>
// //         </div>

// //         <div class="delivery-options">
// //           <div class="delivery-options-title">
// //             Choose a delivery option:
// //           </div>
// //           <div class="delivery-option">
// //             <input type="radio" checked
// //               class="delivery-option-input"
// //               name="delivery-option-${matchingProduct.id}">
// //             <div>
// //               <div class="delivery-option-date">
// //                 Tuesday, June 21
// //               </div>
// //               <div class="delivery-option-price">
// //                 FREE Shipping
// //               </div>
// //             </div>
// //           </div>
// //           <div class="delivery-option">
// //             <input type="radio"
// //               class="delivery-option-input"
// //               name="delivery-option-${matchingProduct.id}">
// //             <div>
// //               <div class="delivery-option-date">
// //                 Wednesday, June 15
// //               </div>
// //               <div class="delivery-option-price">
// //                 $4.99 - Shipping
// //               </div>
// //             </div>
// //           </div>
// //           <div class="delivery-option">
// //             <input type="radio"
// //               class="delivery-option-input"
// //               name="delivery-option-${matchingProduct.id}">
// //             <div>
// //               <div class="delivery-option-date">
// //                 Monday, June 13
// //               </div>
// //               <div class="delivery-option-price">
// //                 $9.99 - Shipping
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     `
// // });