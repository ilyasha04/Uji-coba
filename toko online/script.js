let cart = [];

function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    alert('Produk telah ditambahkan ke keranjang!');
}

function displayCart() {
    let cartItems = '';
    let totalPrice = 0;

    for (let item of cart) {
        cartItems += `${item.name} - Rp${item.price}<br>`;
        totalPrice += item.price;
    }

    cartItems += `<strong>Total: Rp${totalPrice}</strong>`;

    document.getElementById('cart').innerHTML = cartItems;
}
