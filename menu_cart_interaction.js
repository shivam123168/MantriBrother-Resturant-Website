
// Initialize menu items
const menuItems = [
    // Pizza
    { id: 1, image: 'images/Veg Cheese Pizza.png', name: 'Veg Cheese Pizza', price: '130', category: 'Pizza' },
    { id: 2, image: 'images/Corn Cheesse Pizza.png', name: 'Corn Cheesse Pizza', price: '140', category: 'Pizza' },
    { id: 3, image: 'images/Margherita Pizza.png', name: 'Margherita Pizza', price: '100', category: 'Pizza' },
    { id: 4, image: 'images/Paneer Cheese Pizza.png', name: 'Paneer Cheese Pizza', price: '170', category: 'Pizza' },
    { id: 5, image: 'images/Bbq Paneer Pizza.jpeg', name: 'Bbq Paneer Pizza', price: '190', category: 'Pizza' },
    { id: 6, image: 'images/Capsicum Pizza.jpg', name: 'Capsicum Pizza', price: '120', category: 'Pizza' },
    { id: 7, image: 'images/Tomato Pizza.jpg', name: 'Tomato Pizza', price: '120', category: 'Pizza' },
    { id: 8, image: 'images/Onion Pizza.jpg', name: 'Onion Pizza', price: '120', category: 'Pizza' },

    // Burger
    { id: 9, image: 'images/Aloo Tikki Burger.jpg', name: 'Aloo Tikki Burger', price: '60', category: 'Burger' },
    { id: 10, image: 'images/Veg Burger.jpg', name: 'Veg Burger', price: '60', category: 'Burger' },
    { id: 11, image: 'images/Veg Cheese Burger.jpg', name: 'Veg Cheese Burger', price: '80', category: 'Burger' },
    { id: 12, image: 'images/Paneer Burger.jpg', name: 'Paneer Burger', price: '90', category: 'Burger' },
    { id: 13, image: 'images/Paneer Cheese Burger.jpg', name: 'Paneer Cheese Burger', price: '99', category: 'Burger' },
    { id: 14, image: 'images/Peri Peri Paneer Burger.jpg', name: 'Peri Peri Paneer Burger', price: '99', category: 'Burger' },

    // Sandwich
    { id: 15, image: 'images/Veg Sandwich.jpg', name: 'Veg Sandwich', price: '70', category: 'Sandwich' },
    { id: 16, image: 'images/Corn Sandwich.jpg', name: 'Corn Sandwich', price: '70', category: 'Sandwich' },
    { id: 17, image: 'images/Veg Bbq Sandwich.jpg', name: 'Veg Bbq Sandwich', price: '70', category: 'Sandwich' },
    { id: 18, image: 'images/Veg pahadi Sandwich.jpg', name: 'Veg pahadi Sandwich', price: '70', category: 'Sandwich' },
    { id: 19, image: 'images/Paneer Sandwich.jpg', name: 'Paneer Sandwich', price: '90', category: 'Sandwich' },
    { id: 20, image: 'images/Pahadi Paneer Sandwich.jpg', name: 'Pahadi Paneer Sandwich', price: '100', category: 'Sandwich' },
    { id: 21, image: 'images/Tanduri Paneer Sandwich.jpg', name: 'Tanduri Paneer Sandwich', price: '100', category: 'Sandwich' },
    { id: 22, image: 'images/Chocolate Sandwich.jpg', name: 'Chocolate Sandwich', price: '90', category: 'Sandwich' },

    // Fries
    { id: 23, image: 'images/French Fries.jpg', name: 'French Fries', price: '80', category: 'Fries' },
    { id: 24, image: 'images/Cheese French Fries.jpg', name: 'Cheese French Fries', price: '80', category: 'Fries' },
    { id: 25, image: 'images/Peri Peri Fries.jpg', name: 'Peri Peri Fries', price: '90', category: 'Fries' },
    { id: 26, image: 'images/Crispy Masala Fries.jpg', name: 'Crispy Masala Fries', price: '80', category: 'Fries' },
    { id: 27, image: 'images/Potato Cheese Fries.jpg', name: 'Potato Cheese Fries', price: '80', category: 'Fries' },
    { id: 28, image: 'images/Veg Nugget.jpg', name: 'Veg Nugget', price: '80', category: 'Fries' },

    // Maggi
    { id: 29, image: 'images/Plain Maggi.jpg', name: 'Plain Maggi', price: '80', category: 'Maggie' },
    { id: 30, image: 'images/Veg Cheese Maggi.jpg', name: 'Veg Cheese Maggi', price: '80', category: 'Maggie' },
    { id: 31, image: 'images/Paneer Cheese Maggi.jpg', name: 'Paneer Cheese Maggi', price: '80', category: 'Maggie' },
    { id: 32, image: 'images/Corn Cheese Maggi.jpg', name: 'Corn Cheese Maggi', price: '80', category: 'Maggie' },
    { id: 33, image: 'images/Tandoor Maggi.jpg', name: 'Tandoor Maggi', price: '80', category: 'Maggie' },
    { id: 34, image: 'images/Schezwan Maggi.jpg', name: 'Schezwan Maggi', price: '80', category: 'Maggie' },

    // Toast
    { id: 35, image: 'images/Garlic Toast.jpg', name: 'Garlic Toast', price: '80', category: 'Toast' },
    { id: 36, image: 'images/Cheese Chill Toast.jpg', name: 'Cheese Chill Toast', price: '80', category: 'Toast' },
    { id: 37, image: 'images/Bread Butter.jpg', name: 'Bread Butter', price: '80', category: 'Toast' },
    { id: 38, image: 'images/Bread Butter Toast.jpg', name: 'Bread Butter Toast', price: '80', category: 'Toast' },

    // Shakes
    { id: 40, image: 'images/Oreo Shake.jpg', name: 'Oreo Shake', price: '80', category: 'Shake' },
    { id: 41, image: 'images/Kit Kat Shake.jpg', name: 'Kit Kat Shake', price: '80', category: 'Shake' },
    { id: 42, image: 'images/Vanila Milk Shake.jpg', name: 'Vanila Milk Shake', price: '80', category: 'Shake' },
    { id: 43, image: 'images/Strawberry Shake.jpg', name: 'Strawberry Shake', price: '80', category: 'Shake' },
    { id: 44, image: 'images/Mango Shake.jpg', name: 'Mango Shake', price: '80', category: 'Shake' },
    { id: 45, image: 'images/Pineapple Shake.jpg', name: 'Pineapple Shake', price: '80', category: 'Shake' },
    { id: 46, image: 'images/Paan Milk Shake.jpg', name: 'Paan Milk Shake', price: '80', category: 'Shake' },
    { id: 47, image: 'images/Blueberry Shake.jpg', name: 'Blueberry Shake', price: '80', category: 'Shake' },
    { id: 48, image: 'images/Chocolate Shake.jpg', name: 'Chocolate Shake', price: '80', category: 'Shake' },

    //tea
    { id: 49, image: 'images/coldcoffee.png', name: 'Cold Coffee', price: '70', category: 'Tea' },
    { id: 50, image: 'images/thickcoldcoffee.png', name: 'Thick Cold Coffee', price: '90', category: 'Tea' },
    { id: 51, image: 'images/hotcoffee.png', name: 'Hot Coffee', price: '30', category: 'Tea' },
    { id: 52, image: 'images/blackcoffee.png', name: 'Black Coffee', price: '90', category: 'Tea' },
    
    //baverage
    { id: 53, image: 'images/cocacola.jpg', name: 'Colcacola', price: '30', category: 'baverage' },
    { id: 54, image: 'images/sprite.jpg', name: 'Sprite', price: '30', category: 'baverage' },
    { id: 55, image: 'images/thumsup.jpg', name: 'Thums Up', price: '30', category: 'baverage' },
    { id: 56, image: 'images/redbull.jpg', name: 'Red Bull', price: '30', category: 'baverage' },
    { id: 57, image: 'images/fanta.jpg', name: 'Fanta', price: '30', category: 'baverage' }
    
];

// Save menu items to localStorage
localStorage.setItem('menuItems', JSON.stringify(menuItems));

function displayMenu() {
    const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    const containers = [
        { id: 'menuContainer1', category: 'Pizza' },
        { id: 'menuContainer2', category: 'Burger' },
        { id: 'menuContainer3', category: 'Sandwich' },
        { id: 'menuContainer4', category: 'Fries' },
        { id: 'menuContainer5', category: 'Maggie' },
        { id: 'menuContainer6', category: 'Toast' },
        { id: 'menuContainer7', category: 'Shake' },
        { id: 'menuContainer8', category: 'Tea' },
        { id: 'menuContainer9', category: 'baverage' }

    ];

    containers.forEach(container => {
        const menuContainer = document.getElementById(container.id);
        if (menuContainer) {
            menuContainer.innerHTML = '';
            const itemsToShow = menuItems.filter(item => item.category === container.category);

            itemsToShow.forEach(item => {
                const menuItemDiv = document.createElement('div');
                menuItemDiv.className = 'menu-item';
                menuItemDiv.innerHTML = `
                    <div class="formyorderonly" id="myordermargin">
                        <img src="${item.image}" alt="${item.name}">
                        <h2>${item.name}</h2>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <div class="price">
                            <h3>Rs.${item.price}</h3>
                            <button class="add-to-cart" href="cart.html"data-id="${item.id}">Add to Cart</button>
                            <button class="add-to-cart" href="cart.html" data-id="${item.id}">Order Now</button>
                        </div>
                    </div>
                `;
                menuContainer.appendChild(menuItemDiv);
            });
        }
    });

    // Attach event listeners using event delegation
    document.body.addEventListener('click', function (event) {
        if (event.target.classList.contains('add-to-cart')) {
            const itemId = event.target.getAttribute('data-id');
            addToCart(itemId);
        }
    });
}

function addToCart(itemId) {
    const menuItems = JSON.parse(localStorage.getItem('menuItems')) || [];
    const item = menuItems.find(i => i.id == itemId);

    if (item) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert(`${item.name} has been added to the cart.`);
    }
}

displayMenu();



