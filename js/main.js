let cartList = [];
document.title = "Product List";

window.addEventListener("load", () => {
  const title = document.title;
  if (title === "Product List") {
    fetchProducts(displayProductList); // Display product list
  } else if (title === "Cart") {
    displayCart(); // Display cart
  } else if (title.startsWith("Produit: ")) {
    const productId = title.split("Produit: ")[1];
    fetchProducts((data) => showProduct(productId, data)); // Display single product
  }
});

function displayProductList(data) {
  const app = document.getElementById("app");
  app.innerHTML = ""; // Clear the app div

  data.forEach((product) => {
    const productBlock = document.createElement("div");
    productBlock.innerHTML = `
            <h3>${product.nom_produit}</h3>
            <p>FakeID: ${product.id}</p>
            <p>Description: ${product.descriptif}</p>
            <p>Resolution: ${product.caracteristiques.résolution}</p>
            <p>Zoom: ${product.caracteristiques.zoom}</p>
            <p>Connectivité: ${product.caracteristiques.connectivité}</p>
            <p>Ecran: ${product.caracteristiques.écran}</p>
            <p>Prix: ${product.prix}</p>
            <img src="${product.image}" alt="${product.nom_produit}">
            <button class="showButton" data-id="${product.id}">Regarde moi!</button>
        `;
    app.appendChild(productBlock);

    productBlock.querySelector(".showButton").addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      showProduct(productId, data);
    });
  });
}

function showProduct(productId, data) {
  document.title = "Produit: " + productId;
  const product = data.find((product) => product.id == productId);
  const app = document.getElementById("app");
  app.innerHTML = `
        <h2>Product Details</h2>
        <h3>${product.nom_produit}</h3>
        <p>Description: ${product.descriptif}</p>
        <p>Resolution: ${product.caracteristiques.résolution}</p>
        <p>Zoom: ${product.caracteristiques.zoom}</p>
        <p>Connectivité: ${product.caracteristiques.connectivité}</p>
        <p>Ecran: ${product.caracteristiques.écran}</p>
        <p>Prix: ${product.prix}</p>
        <img src="${product.image}" alt="${product.nom_produit}">
        <button onclick="goBack()">Reviens !</button>
    `;
}

function displayCartProduct(productId, data) {
  const product = data.find((p) => p.id == productId);
  const app = document.getElementById("app");
  app.innerHTML = `
        <h2>Cart</h2>
        <h3>${product.nom_produit}</h3>
        <p>Description: ${product.descriptif}</p>
        <p>Prix: ${product.prix}</p>
        <img src="${product.image}" alt="${product.nom_produit}">
    `;
}

function displayCart() {
  const app = document.getElementById("app");
  app.innerHTML = `
        <h2>Cart</h2>
        ${cartList
          .map((productId) => {
            const product = data.find((p) => p.id == productId);
            return `
                <div>
                    <h3>${product.nom_produit}</h3>
                    <p>Description: ${product.descriptif}</p>
                    <p>Prix: ${product.prix}</p>
                    <img src="${product.image}" alt="${product.nom_produit}">
                </div>
            `;
          })
          .join("")}
        <button onclick="goBack()">Reviens !</button>
    `;
}

function goBack() {
  document.title = "Product List";
  fetchProducts(displayProductList);
}
