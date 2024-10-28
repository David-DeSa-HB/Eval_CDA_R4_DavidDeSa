function displayCart(data) {
  element = document.getElementById("app");
  element.innerHTML = `
          <h2>Panier</h2>
          ${cartList
            .map((productId) => {
              const product = data.find((product) => product.id == productId);
              return `
            <div>
              <h3>${product.nom_produit}</h3>
              <p>Prix: ${product.prix}</p>
              <img src="${product.image}" alt="${product.nom_produit}">
              <button class="removeButton" data-id="${product.id}">J'en veux plus !</button>
            </div>`;
            })
            .join("")}
            <button onclick="goBack()">Reviens !</button>`;

  element.querySelectorAll(".removeButton").forEach((button) => {
    button.addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      removeFromCart(productId, data);
    });
  });
}

function removeFromCart(productId, data) {
  const index = cartList.indexOf(productId);
  if (index > -1) {
    cartList.splice(index, 1);
  }

  displayCart(data);
}
