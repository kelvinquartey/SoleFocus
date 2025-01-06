// import { getProduct } from "../../data/products";
// import { getDeliveryOption } from "../../data/deliveryOption";
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