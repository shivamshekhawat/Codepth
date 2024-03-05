$(document).ready(function() {
    // Function to fetch products and render them
    function fetchProducts() {
      $.get('/api/products', function(products) {
        $('#productList').empty();
        products.forEach(function(product) {
          const productItem = `
            <div class="product">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <p>Price: $${product.price}</p>
              <button class="addToCartBtn" data-id="${product._id}">Add to Cart</button>
            </div>
          `;
          $('#productList').append(productItem);
        });
      });
    }
  
    // Function to fetch cart details and render them
    function fetchCart() {
      $.get('/api/cart', function(cartItems) {
        $('#cart').empty();
        cartItems.forEach(function(item) {
          const cartItem = `
            <div>
              <p>Product: ${item.productId}</p>
              <p>Quantity: ${item.quantity}</p>
            </div>
          `;
          $('#cart').append(cartItem);
        });
      });
    }
  
    // Fetch products and cart details on page load
    fetchProducts();
    fetchCart();
  
    // Event listener for add to cart button
    $(document).on('click', '.addToCartBtn', function() {
      const productId = $(this).data('id');
      $.post('/api/cart/add', { productId, quantity: 1 }, function() {
        fetchCart();
      });
    });
  
    // Event listener for logout button
    $('#logoutBtn').click(function() {
      // Perform logout logic here
      alert('Logout logic here');
    });
  });
  