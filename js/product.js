function showProduct(productId, data) {
  document.title = "Produit: " + productId;
  const product = data.find((product) => product.id == productId);
  const element = document.getElementById("app");
  element.innerHTML = `
            <h2>Product Details</h2>
            <h3>${product.nom_produit}</h3>
            <p>Description: ${product.descriptif}</p>
            <p>Resolution: ${product.caracteristiques.résolution}</p>
            <p>Zoom: ${product.caracteristiques.zoom}</p>
            <p>Connectivité: ${product.caracteristiques.connectivité}</p>
            <p>Ecran: ${product.caracteristiques.écran}</p>
            <p>Prix: ${product.prix}</p>
            <img src="${product.image}" alt="${product.nom_produit}">
            <button class="addButton" data-id="${product.id}">Ajoute moi!</button>
            <button onclick="goBack()">Reviens !</button>
        `;

  document.getElementById("app").appendChild(element);

  element.querySelector(".addButton").addEventListener("click", function (event) {
    const productId = event.target.getAttribute("data-id");
    cartList.push(productId);
    addToCart(product);
  });
}
