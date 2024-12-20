document.addEventListener("DOMContentLoaded", () => {
    const productGrid = document.querySelector(".product-grid");
    const navLinks = document.querySelectorAll(".nav-link");
    const contentSections = document.querySelectorAll(".content-section");

    fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        });

    function displayProducts(products) {
        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="buy-btn" data-id="${product.id}">Buy Now</button>
            `;

            productGrid.appendChild(productCard);
        });

        document.querySelectorAll(".buy-btn").forEach(button => {
            button.addEventListener("click", event => {
                const productId = event.target.dataset.id;
                alert(`Product ID ${productId} purchased!`);
            });
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            const targetSectionId = event.target.getAttribute("href").replace("#", "");
            const targetSection = document.getElementById(targetSectionId);

            contentSections.forEach(section => section.classList.add("hidden"));

            targetSection.classList.remove("hidden");

            navLinks.forEach(nav => nav.classList.remove("active"));
            link.classList.add("active");
        });
    });

    document.getElementById("home").classList.remove("hidden");
    document.querySelector('[href="#home"]').classList.add("active");
});
