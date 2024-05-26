

function toggleDropdown() {
var dropdownContent = document.getElementById("dropdownContent");
if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
} else {
  dropdownContent.style.display = "block";
}
}

function scrollToSection(sectionId) {
var section = document.getElementById(sectionId);
if (section) {
  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
}


document.querySelectorAll('.dropdown-content a').forEach(item => {
item.addEventListener('click', function(event) {
  event.preventDefault(); 
  var sectionId = this.getAttribute('href').substring(1); 
  scrollToSection(sectionId); 
  toggleDropdown(); 
});
});

function toggleDropdown() {
var dropdownContent = document.getElementById("dropdownContent");
if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
} else {
  dropdownContent.style.display = "block";
}
}


    let cartCount = 0; 
    const cartCountSpan = document.getElementById('cartCount');
    const notification = document.getElementById('notification');
    const cartContainer = document.getElementById('cartContainer');
    const cartItemsList = document.getElementById('cartItems');
    const checkoutBtn = document.getElementById('checkoutBtn');

    
    const cartItems = {};

    
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');

    
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            
            const itemName = this.dataset.item;

            
            addToCart(itemName);
            showNotification(itemName);
        });
    });

    
    function addToCart(itemName) {
        
        cartItems[itemName] = (cartItems[itemName] || 0) + 1;

        
        cartCount++;

        
        updateCartUI();
    }

   
    function updateCartUI() {
        
        cartItemsList.innerHTML = '';

        
        Object.entries(cartItems).forEach(([itemName, itemCount]) => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${itemName} (${itemCount})`;
            cartItem.classList.add('cart-item'); 
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', function() {
                deleteItem(itemName);
            });
            cartItem.appendChild(deleteBtn);
            cartItemsList.appendChild(cartItem);
        });

        
        cartCountSpan.textContent = cartCount;
    }

    
function showNotification(message, success = false) {

notification.textContent = message;
notification.style.display = 'block';
if (success) {
   notification.classList.add('notification-green');
} else {
   notification.classList.remove('notification-green');
}


setTimeout(() => {
   notification.style.display = 'none';
   notification.classList.remove('notification-green');
}, 3000);
}

    
    checkoutBtn.addEventListener('click', function() {
        
        clearCart();
        showNotification('Order placed successfully!', true);
    });

    
    function clearCart() {
        cartCount = 0;
        Object.keys(cartItems).forEach(itemName => {
            delete cartItems[itemName];
        });
        updateCartUI();
    }

    
    function deleteItem(itemName) {
        if (cartItems[itemName]) {
            delete cartItems[itemName];
            cartCount--;
            updateCartUI();
        }
    }
