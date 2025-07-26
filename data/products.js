export function getProduct(productId){
    let matchingProduct;
  
    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
  
    return matchingProduct;
}

class Product {
  id;
  image;
  brand;
  name;
  price;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.brand = productDetails.brand;
    this.name = productDetails.name;
    this.price = productDetails.price;
  }

  getPrice() {
    return `$${this.price}`;
  }
}

export const products = [
    {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: 'assets/images/sneakers/Nike-Dunk-Low.jpg',
    brand: 'nike',
    name: 'Dunk Low Retro SE',
    price: 120
    },
    {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: 'assets/images/sneakers/Adidas-Ultraboost.png',
    brand: 'adidas',
    name: 'Ultraboost 1.0',
    price: 135
    },
    {
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: 'assets/images/sneakers/Alexander-McQueen-Oversized.jpeg',
    brand: 'alexander mcqueen',
    name: 'Oversized Retro',
    price: 78
    },
    {
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image: 'assets/images/sneakers/Reebok-Classic-Leather.png',
    brand: 'reebok',
    name: 'Classic Leather',
    price: 44
    },
    {
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image: 'assets/images/sneakers/Nike-Air-Jordan-1.png',
    brand: 'nike',
    name: 'Air Jordan',
    price: 95
    },
    {
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image: 'assets/images/sneakers/Balenciaga-Triple-S.jpg',
    brand: 'balenciaga',
    name: 'Triple S',
    price: 900
    },
    {
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image: 'assets/images/sneakers/Nike-Air-Max-270.png',
    brand: 'nike',
    name: 'Air Max 270',
    price: 130
    },
    {
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image: 'assets/images/sneakers/New-Balance-574.png',
    brand: 'new balance',
    name: '574',
    price: 85
    },
    {
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image: 'assets/images/sneakers/Yeezy-Boost-350.jpg',
    brand: 'yeezy',
    name: 'Boost 350',
    price: 200
    },
    {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: 'assets/images/sneakers/Adidas-NMD-R1.jpg',
    brand: 'adidas',
    name: 'NM R1',
    price: 120
    },
    {
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: 'assets/images/sneakers/puma-rs-x.jpg',
    brand: 'puma',
    name: 'RS-X',
    price: 100
    },
    {
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image: 'assets/images/sneakers/vans-old-skool.png',
    brand: 'vans',
    name: 'Old Skool',
    price: 55
    },
].map((productDetails) => {
  return new Product(productDetails);
});


