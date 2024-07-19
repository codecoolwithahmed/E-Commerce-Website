const store = {
    categories: [
        {
            name: 'Sports Shoes',
            products: [
                { id: 1, name: 'Nike Air Max', price: 120, description: 'Comfortable and stylish', rating: 4.5, image: 'images/nike_air_max.jpg' },
                { id: 2, name: 'Adidas Ultraboost', price: 150, description: 'High performance running shoes', rating: 4.8, image: 'images/adidas_ultraboost.jpg' },
                { id: 3, name: 'Puma Running', price: 100, description: 'Great for daily runs', rating: 4.2, image: 'images/puma_running.jpg' },
                { id: 4, name: 'Reebok Zig', price: 110, description: 'Innovative design for comfort', rating: 4.3, image: 'images/reebok_zig.jpg' },
                { id: 5, name: 'Asics Gel', price: 130, description: 'Top-notch cushioning', rating: 4.6, image: 'images/asics_gel.jpg' }
            ]
        },
        {
            name: 'Casual Shoes',
            products: [
                { id: 6, name: 'Vans Old Skool', price: 60, description: 'Classic skate shoes', rating: 4.4, image: 'images/vans_old_skool.jpg' },
                { id: 7, name: 'Converse Chuck Taylor', price: 55, description: 'Iconic style', rating: 4.5, image: 'images/converse_chuck_taylor.jpg' },
                { id: 8, name: 'Toms Canvas', price: 40, description: 'Lightweight and casual', rating: 4.1, image: 'images/toms_canvas.jpg' },
                { id: 9, name: 'Skechers Go Walk', price: 70, description: 'Comfort for walking', rating: 4.7, image: 'images/skechers_go_walk.jpg' },
                { id: 10, name: 'Clarks Desert Boot', price: 80, description: 'Stylish and comfortable', rating: 4.3, image: 'images/clarks_desert_boot.jpg' }
            ]
        },
        {
            name: 'Formal Shoes',
            products: [
                { id: 11, name: 'Oxford Brogues', price: 140, description: 'Elegant and stylish', rating: 4.5, image: 'images/oxford_brogues.jpg' },
                { id: 12, name: 'Derby Shoes', price: 130, description: 'Perfect for formal occasions', rating: 4.6, image: 'images/derby_shoes.jpg' },
                { id: 13, name: 'Loafers', price: 120, description: 'Comfortable and classy', rating: 4.4, image: 'images/loafers.jpg' },
                { id: 14, name: 'Monk Strap', price: 150, description: 'Unique and stylish', rating: 4.5, image: 'images/monk_strap.jpg' },
                { id: 15, name: 'Dress Boots', price: 160, description: 'Stylish boots for formal wear', rating: 4.7, image: 'images/dress_boots.jpg' }
            ]
        },
        {
            name: 'Boots',
            products: [
                { id: 16, name: 'Timberland Classic', price: 200, description: 'Durable and stylish', rating: 4.8, image: 'images/timberland_classic.jpg' },
                { id: 17, name: 'Dr. Martens 1460', price: 150, description: 'Classic and durable', rating: 4.6, image: 'images/dr_martens_1460.jpg' },
                { id: 18, name: 'Red Wing Iron Ranger', price: 300, description: 'High-quality leather boots', rating: 4.9, image: 'images/red_wing_iron_ranger.jpg' },
                { id: 19, name: 'UGG Classic Short', price: 180, description: 'Warm and comfortable', rating: 4.7, image: 'images/ugg_classic_short.jpg' },
                { id: 20, name: 'Sorel Caribou', price: 220, description: 'Perfect for cold weather', rating: 4.8, image: 'images/sorel_caribou.jpg' }
            ]
        }
    ]
};

function populateCategories() {
    const categorySelect = document.getElementById('category-select');

    store.categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category.name;
        option.textContent = category.name;
        categorySelect.appendChild(option);
    });

    categorySelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        displayProducts(selectedCategory);
    });
}

function displayProducts(categoryName) {
    const storeContainer = document.getElementById('store-container');
    storeContainer.innerHTML = ''; // Clear previous products

    const productList = document.createElement('div');
    productList.classList.add('product-list');

    store.categories.forEach(category => {
        if (categoryName === '' || category.name === categoryName) {
            category.products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.name;
                productCard.appendChild(productImage);

                const productName = document.createElement('h3');
                productName.textContent = product.name;
                productCard.appendChild(productName);

                const productDescription = document.createElement('p');
                productDescription.classList.add('description');
                productDescription.textContent = product.description;
                productCard.appendChild(productDescription);

                const productRating = document.createElement('p');
                productRating.classList.add('rating');
                productRating.textContent = '⭐'.repeat(Math.round(product.rating));
                productCard.appendChild(productRating);

                const priceContainer = document.createElement('div');
                priceContainer.classList.add('price-container');

                const productPrice = document.createElement('p');
                productPrice.classList.add('price');
                productPrice.textContent = `$${product.price}`;
                priceContainer.appendChild(productPrice);

                const quantityButtons = document.createElement('div');
                quantityButtons.classList.add('quantity-buttons');

                const minusButton = document.createElement('button');
                minusButton.textContent = '-';
                minusButton.addEventListener('click', () => {
                    let quantity = parseInt(quantityButtons.dataset.quantity) || 1;
                    if (quantity > 1) {
                        quantity--;
                        quantityButtons.dataset.quantity = quantity;
                        quantityDisplay.textContent = quantity;
                    }
                });
                quantityButtons.appendChild(minusButton);

                const quantityDisplay = document.createElement('span');
                quantityDisplay.textContent = '1';
                quantityButtons.dataset.quantity = '1';
                quantityButtons.appendChild(quantityDisplay);

                const plusButton = document.createElement('button');
                plusButton.textContent = '+';
                plusButton.addEventListener('click', () => {
                    let quantity = parseInt(quantityButtons.dataset.quantity) || 1;
                    quantity++;
                    quantityButtons.dataset.quantity = quantity;
                    quantityDisplay.textContent = quantity;
                });
                quantityButtons.appendChild(plusButton);

                priceContainer.appendChild(quantityButtons);
                productCard.appendChild(priceContainer);

                const addToCartButton = document.createElement('button');
                addToCartButton.textContent = 'Add to Cart';
                productCard.appendChild(addToCartButton);

                productList.appendChild(productCard);
            });
        }
    });

    storeContainer.appendChild(productList);
}

document.addEventListener('DOMContentLoaded', () => {
    populateCategories();
    displayProducts(''); // Display all products initially
});
