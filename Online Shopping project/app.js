let cartItems = [];
let totalCost = 0;

function addToCart(price) {
  const item = {
    price: price
  };
  cartItems.push(item);
  updateCart();
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartItemsList = document.getElementById('cart-items');
  cartItemsList.innerHTML = '';
  totalCost = 0;

  cartItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${index + 1}: $${item.price.toFixed(2)}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeFromCart(index);
    });
    listItem.appendChild(removeButton);
    cartItemsList.appendChild(listItem);
    totalCost += item.price;
  });

  const totalElement = document.getElementById('total');
  totalElement.textContent = totalCost.toFixed(2);
}
