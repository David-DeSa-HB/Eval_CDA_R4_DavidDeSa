function displayCart(data) {
  const app = document.getElementById("app");
  app.className= "app-cart";
  app.innerHTML = "";

  app.innerHTML = `
  
          <h2 class="machin">Panier</h2>

          ${cartList
            .map((dataCart) => {
              const product = dataCart.product;
              return `
            <div class="card-box">
              <h3>${product.nom_produit}</h3>
              <p>Prix: ${product.prix}</p>
              <p>Nombre: x${dataCart.number}</p>
              <img src="${product.image}" alt="${product.nom_produit}">
              <div id="cart-buttons">
                <button class="substractButton" data-id="${product.id}">J'en veux moins !</button>
                <button class="addButton" data-id="${product.id}">J'en veux plus !</button>
                <button class="removeButton" data-id="${product.id}">Je ne veux plus de ça !</button>
              </div>
            </div>`;
            })
            .join("")}

          <div>
            Total: ${cartList.reduce((sum, product)=> {
            return sum+(product.prix*product.number)}
            , 0
            )};
          </div>

            <button class="machin" onclick="goBack()">Reviens !</button>
            
            ${cartList.length >0 ? `
              <button class="machin" onclick="showValidationPage()">Je veux payer maintenant !</button>` : ``}

              `;

  app.querySelectorAll(".substractButton").forEach((button) => {
    button.addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      const product = data.filter((product) => product.id === productId * 1)[0];
      substractFromCart(product);
      displayCart(data);
    });
  });

  app.querySelectorAll(".removeButton").forEach((button) => {
    button.addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      const product = data.filter((product) => product.id === productId * 1)[0];
      removeFromCart(product);
      displayCart(data);
    });
  });

  app.querySelectorAll(".addButton").forEach((button) => {
    button.addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      const product = data.filter((product) => product.id === productId * 1)[0];
      addToCart(product);
      displayCart(data);
    });
  });
  storeCart();
}

function substractFromCart(product) {
  const myList = cartList.filter((data) => data.product.id === product.id);
  if (myList[0].number > 1) {
    myList[0].number--;
    storeCart();
  } else {
    removeFromCart(product);
  }
}

function removeFromCart(product) {
    cartList = cartList.filter((productCart) => product.id != productCart.product.id);
    storeCart();
}