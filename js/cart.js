function displayCartProduct(productId, data) {
  const product = data.find((p) => p.id == productId);
  const element = document.getElementById("app");
  element.innerHTML = `
          <h2>Cart</h2>
          <h3>${product.nom_produit}</h3>
          <p>Description: ${product.descriptif}</p>
          <p>Prix: ${product.prix}</p>
          <img src="${product.image}" alt="${product.nom_produit}">
      `;
}

function displayCart() {
  const element = document.getElementById("app");
  element.innerHTML = `
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
