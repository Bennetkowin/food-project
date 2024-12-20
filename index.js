document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.querySelector(".product-grid");

    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            productContainer.innerHTML = "<p>Failed to load products. Please try again later.</p>";
        });

    function displayProducts(products) {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const imageUrl = product.image.startsWith("http") || product.image.startsWith("data")
                ? product.image
                : `http://localhost:3000${product.image}`;

            productCard.innerHTML = `
                <img src="${imageUrl}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button class="buy-btn" data-id="${product.id}">Buy Now</button>
            `;

            productContainer.appendChild(productCard);
        });

        document.querySelectorAll(".buy-btn").forEach(button => {
            button.addEventListener("click", event => {
                const productId = event.target.dataset.id;
                alert(`Product ${productId} purchased!`);
            });
        });
    }
});


