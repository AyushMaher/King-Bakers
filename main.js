const products = [
    { name: 'Croissant', image: 'croissant.jpg', price: 2.5 },
    { name: 'Pain au Chocolat', image: 'pain-au-chocolat.jpg', price: 3.0 },
    { name: 'Baguette', image: 'baguette.jpg', price: 1.5 },
    // Add more products here
];

let cart = [];

function addToCart(product) {
    cart.push(product);
    console.log('Product added to cart:', product);
}