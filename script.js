let cart = [];

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;

        cartItems.appendChild(li);

        if (item === 'Standard Pencil') {
            total += 1.00;
        } else if (item === 'Mechanical Pencil') {
            total += 2.50;
        } else if (item === 'Colored Pencil Set') {
            total += 5.00;
        }
    });

    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Thank you for your purchase!");
        cart = [];
        displayCart();
    }
}