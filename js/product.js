function showProduct(productId, data) {
  document.title = "Produit: " + productId;
  const product = data.find((product) => product.id == productId);
  const app = document.getElementById("app");
  app.className= "app-product";
  app.innerHTML = "";

  const element = document.createElement("div");
  element.className= "card-box";
  element.innerHTML = `
        <img src="${product.image}" alt="${product.nom_produit}">
        <h3>Product Details</h3>
        <h3>${product.nom_produit}</h3>
        <p>Description: ${product.descriptif}</p>
        <p>Resolution: ${product.caracteristiques.résolution}</p>
        <p>Zoom: ${product.caracteristiques.zoom}</p>
        <p>Connectivité: ${product.caracteristiques.connectivité}</p>
        <p>Ecran: ${product.caracteristiques.écran}</p>
        <p>Prix: ${product.prix}</p>
        <button class="addButton" data-id="${product.id}">Ajoute moi!</button>
        <button onclick="goBack()">Reviens !</button>
  `;

  app.appendChild(element);

  element.querySelector(".addButton").addEventListener("click", () => {
    addToCart(product);
  });
}

function addToCart(product) {
  const myList = cartList.filter((data) => data.product.id === product.id);
  if (myList.length === 0) {
    cartList.push({ product, number: 1 });
    // return; (on peut utiliser le return à la place du else)
  } else {
    myList[0].number++;
  }
}
