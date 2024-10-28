let cartList = [];

window.addEventListener("load", () => {
  document.getElementById("app").innerHTML = "";
  fetchProducts(displayProductList); // Call fetchProducts and pass displayProductList as the callback
});

function displayProductList(data) {
  data.forEach((product) => {
    displayProduct(product);
  });
}

function displayProduct(product) {
  const displayProductBlock = document.createElement("div");
  displayProductBlock.innerHTML = `
        <h3>${product.nom_produit}</h3>
        <p>FakeID: ${product.id}</p>
        <p>Description: ${product.descriptif}</p>
        <p>Resolution: ${product.caracteristiques.résolution}</p>
        <p>Zoom: ${product.caracteristiques.zoom}</p>
        <p>Connectivité: ${product.caracteristiques.connectivité}</p>
        <p>Ecran: ${product.caracteristiques.écran}</p>
        <p>Prix: ${product.prix}</p>
        <img src="${product.image}" alt="${product.nom_produit}">
        <button class="showButton" data-id="${product.nom_produit}">Regarde moi !</button>
    `;

  document.getElementById("app").appendChild(displayProductBlock);

  displayProductBlock.querySelector(".showButton").addEventListener("click", function (event) {
    showProduct(product);
  });
}

function showProduct(product) {
  const showProductBlock = document.createElement("div");
  const productId = event.target.getAttribute("data-id");
  const index = cartList.indexOf(productId);
  showProductBlock.innerHTML = `<h3>${product.nom_produit}</h3>
      <p>Description: ${product.descriptif}</p>
      <p>Resolution: ${product.caracteristiques.résolution}</p>
      <p>Zoom: ${product.caracteristiques.zoom}</p>
      <p>Connectivité: ${product.caracteristiques.connectivité}</p>
      <p>Ecran: ${product.caracteristiques.écran}</p>
      <p>Resolution: ${product.caracteristiques.résolution}</p>
      <p>Prix: ${product.prix}</p>
      <img src="${product.image}" alt="${product.nom_produit}">
  <button class="addButton" data-id="${product.id}">Ajoute moi !</button>`;
  document.getElementById("app").appendChild(showProductBlock);

  showProductBlock.querySelector(".addButton").addEventListener("click", function (event) {
    const productId = event.currentTarget.getAttribute("data-id");
    cartList.push(productId);
  });
}

function displayCartList(cartList) {
  cartList.forEach((product) => {
    displayCartProduct(product);
  });
}

function displayCartProduct(product) {
  const displayCartProductBlock = document.createElement("div");
  displayCartProductBlock.innerHTML = `
        <p>${product.nom_produit}</p>
        <p>Prix: ${product.prix}</p>
        <img src="${product.image}" alt="${product.nom_produit}">
        <button class="removeButton" data-id="${product.nom_produit}">Supprime moi !</button>
    `;

  document.getElementById("app").appendChild(displayCartProductBlock);

  productCartDiv.querySelector(".removeButton").addEventListener("click", function (event) {
    const productId = event.target.getAttribute("data-id");
    const index = cartList.indexOf(productId);
    if (index > -1) {
      cartList.splice(index, 1);
      productCartDiv.remove();
    }
  });
}
