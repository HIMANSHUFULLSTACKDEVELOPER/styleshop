  // Back to Top Button Functionality
  document.querySelector('.back-to-top').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Quick View Functionality
document.querySelectorAll('.quick-view').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('Product quick view modal would open here');
    });
});

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart, .hover-cart-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        alert('Product added to cart!');
    });
});

// Product Card Click Functionality
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
        // In a real site this would navigate to the product detail page
        const productTitle = this.querySelector('.product-title').textContent;
        alert(`Navigating to product page: ${productTitle}`);
    });
});

// WhatsApp Button Functionality
document.querySelector('.whatsapp-button').addEventListener('click', function() {
    window.open('https://wa.me/1234567890', '_blank');
});

// Show/Hide Filter Dropdown (simplified implementation)
document.querySelector('.filter-button').addEventListener('click', function() {
    alert('Filter panel would open here');
});