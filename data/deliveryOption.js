import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    price: 0
},{
    id: '2',
    deliveryDays: 3,
    price: 4
},{
    id: '3',
    deliveryDays: 1,
    price: 9
}]


export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;

    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId){
        deliveryOption = option;
      }
    });
    return deliveryOption || deliveryOptions[0];
}


export function calculateDeliveryDate(deliveryOption){
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
    let dateString;

    if(deliveryDate.format('dddd') === 'Saturday'){
        dateString = deliveryDate.add(2, 'days').format('dddd, MMMM D');
    } else if(deliveryDate.format('dddd') === 'Sunday'){
        dateString = deliveryDate.add(1, 'days').format('dddd, MMMM D');
    }
    else{
        dateString = deliveryDate.format('dddd, MMMM D');
    }

    return dateString;
}