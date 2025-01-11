import { cart, removeFromCart } from '../data/cart.js';
import { products } from '../data/products.js';

import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderOrderSummary } from './checkout/orderSummary.js';

renderOrderSummary();
renderPaymentSummary();

