const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownManue = document.querySelector('.dropdown_manue')

toggleBtn.onclick = function () {
    dropDownManue.classList.toggle('open')
    const isOpen = dropDownManue.classList.contains('open')

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}


// Declare storedOrders globally so it's accessible in renderOrderItems
let storedOrders = JSON.parse(localStorage.getItem('myOrders')) || [];

// Retrieve new order items from localStorage
const newOrderItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Check if there are new order items and if they haven't already been added
if (newOrderItems.length > 0) {
    // Assign a unique order ID (timestamp) for the new order
    const newOrder = {
        orderId: Date.now(),  // Use current timestamp as a unique ID
        items: newOrderItems,
    };

    // Add new order to the list of stored orders
    storedOrders.push(newOrder);

    // Save the updated orders back to localStorage
    localStorage.setItem('myOrders', JSON.stringify(storedOrders));

    // Clear the cart items from localStorage after placing the order
    localStorage.removeItem('cartItems');
}

// Function to render order items
function renderOrderItems() {
    const orderItemsContainer = document.getElementById('orderItemsContainer');
    orderItemsContainer.innerHTML = ''; // Clear the container before rendering

    const gctRate = 0.15; // Assuming GCT is 15%

    // Check if there are any orders
    if (storedOrders.length === 0) {
        // If no orders exist, display a message
        const emptyMessage = document.createElement('p');
        emptyMessage.innerText = "You haven't placed any orders yet.😔🥺";
        orderItemsContainer.appendChild(emptyMessage);
        return; // Stop further execution since there are no orders
    }

    // Iterate over each order
    storedOrders.forEach((order, orderIndex) => {
        const orderDiv = document.createElement('div');
        orderDiv.className = 'order';

        const orderHeader = document.createElement('h2');
        orderHeader.innerText = `Order ${orderIndex + 1} (ID: ${order.orderId})`;
        orderDiv.appendChild(orderHeader);

        let totalAmount = 0;

        // Iterate over the items in each order
        order.items.forEach((item, itemIndex) => {
            const orderItemDiv = document.createElement('div');
            orderItemDiv.className = 'order-item';

            orderItemDiv.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="order-details">
            <h3>${item.name}</h3>
            <p>Price: Rs.${item.price}</p>
            <p>Quantity: ${item.quantity || 1}</p>
            <p>Total: Rs.${(item.price * (item.quantity || 1)).toFixed(2)}</p>
        </div>
    `;

            // Append each item to the current order container
            orderDiv.appendChild(orderItemDiv);

            // Calculate the total amount for the current order
            totalAmount += item.price * (item.quantity || 1);
        });

        // Calculate GST and total amount with GST for the current order
        const gctAmount = totalAmount * gctRate;
        const totalWithGCT = totalAmount + gctAmount;

        // Display the total amount for the current order
        const orderTotal = document.createElement('p');
        orderTotal.innerText = `Total Amount (GsT included): Rs.${totalWithGCT.toFixed(2)}`;
        orderDiv.appendChild(orderTotal);

        // Append the current order to the container
        orderItemsContainer.appendChild(orderDiv);
    });
}

// Render the order items on page load
renderOrderItems();