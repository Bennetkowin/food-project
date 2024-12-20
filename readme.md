# Product Display Application

This project is a basic web application designed to fetch and display a list of products from a server. It dynamically loads product data and renders it on the webpage, providing an interactive experience for users.

## Features

- Fetches product data from a server endpoint.
- Displays products dynamically with images, names, and prices.
- Handles errors gracefully with user-friendly messages.
- Includes a basic structure for navigation and content sections.

## Project Structure


.
├── index.html       # Main HTML file
├── style.css        # Styling for the application
├── script.js        # JavaScript functionality
└── images/          # Directory for product images (if applicable)
```

## Getting Started

### Prerequisites

- A local or remote server to host the JSON file and images. For local development, you can use [json-server](https://github.com/typicode/json-server) or any other lightweight server.
- A modern web browser (e.g., Chrome, Firefox, Edge).

### Installation

1. Clone the repository:
  
   git clone <repository-url>
  
2. Navigate to the project directory:
 
   cd your project-folder
 
3. Start a local server (e.g., with `json-server`):
   
   json-server --watch db.json --port 3000
  
   Replace `db.json` with your JSON file containing the product data.

4. Open `index.html` in your browser or use a local server to host the app.

## Usage

1. Ensure the server is running and serving the product data.
2. Open the application in a browser.
3. Products will load dynamically onto the page. If the fetch fails, an error message will be displayed.

### Example Product JSON

Below is a sample JSON structure for the product data:

json
[
  {
    "id": 1,
    "name": "High-Speed Blender",
    "price": 28.88,
    "image": "/images/high-speed-blender.jpg"
  },
  {
    "id": 2,
    "name": "Premium Coffee Maker",
    "price": 79.99,
    "image": "/images/coffee-maker.jpg"
  }
]
```

### Example Code Snippets

#### Fetching Products in `script.js`

javascript
fetch("http://localhost:3000/products")
  .then(response => response.json())
  .then(products => {
    const productContainer = document.getElementById("product-container");
    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";

      productCard.innerHTML = `
        <img src="http://localhost:3000${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
      `;

      productContainer.appendChild(productCard);
    });
  })
  .catch(error => {
    console.error("Error fetching products:", error);
    productContainer.innerHTML = "<p>Failed to load products. Please try again later.</p>";
  });


#### HTML Example

```html
<section id="product-container" class="content-section">
 
</section>


## Styling

Basic styles are included in `style.css` to:
- Define a simple card layout for product items.
- Ensure responsive design for different screen sizes.

## Future Enhancements

- Add search and filter functionality for products.
- Implement pagination for large product catalogs.
- Integrate with a backend API for dynamic data updates.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute, report issues, or suggest features!
