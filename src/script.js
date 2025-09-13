document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('purchase-form');
    const totalPriceEl = document.getElementById('total-price');
    const optionCards = document.querySelectorAll('.option-card');

    form.addEventListener('change', function(event) {
        // We only care about events from our radio buttons
        if (event.target.name === 'product_option') {
            
            // 1. Update the total price display
            const selectedPrice = parseFloat(event.target.value).toFixed(2);
            totalPriceEl.textContent = selectedPrice;

            // 2. Update the visual selection (the red border)
            // First, remove the 'selected' class from all cards
            optionCards.forEach(card => {
                card.classList.remove('selected');
            });
            
            // Then, add the 'selected' class to the parent label of the checked radio
            event.target.closest('.option-card').classList.add('selected');
        }
    });
});