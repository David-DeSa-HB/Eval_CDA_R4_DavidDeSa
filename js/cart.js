function displayCart(data) {
  element = document.getElementById("app");
  element.innerHTML = `
          <h2>Panier</h2>

          ${cartList
            .map((dataCart) => {
              const product = dataCart.product;
              // const quantity = cartList.filter((id) => id == product.id).length;
              return `
            <div>
              <h3>${product.nom_produit}</h3>
              <p>Prix: ${product.prix}</p>
              <p>Nombre: x${dataCart.number}</p>
              <img src="${product.image}" alt="${product.nom_produit}">
              <button class="removeButton" data-id="${product.id}">Je n'en veux plus !</button>
              <button class="addButton" data-id="${product.id}">J'en veux encore plus !</button>
            </div>`;
            })
            .join("")}

            <button onclick="goBack()">Reviens !</button>`;

  element.querySelectorAll(".removeButton").forEach((button) => {
    button.addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      const product = data.filter((product) => product.id === productId * 1)[0];
      removeFromCart(product);
      displayCart(data);
    });
  });

  element.querySelectorAll(".addButton").forEach((button) => {
    button.addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      const product = data.filter((product) => product.id === productId * 1)[0];
      addToCart(product);
      displayCart(data);
    });
  });
}

function removeFromCart(product) {
  const myList = cartList.filter((data) => data.product.id === product.id);
  if (myList[0].number > 1) {
    myList[0].number--;
  } else {
    cartList = cartList.filter((productCart) => product.id != productCart.product.id);
  }
}
