const request = new Request("produits.json");
let cartList = [];

fetch(request)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((product) => {
      console.log(`Nom: ${product.nom_produit},
        Description: ${product.descriptif},
        Resolution: ${product.caracteristiques.résolution},
        Zoom: ${product.caracteristiques.zoom},
        Connectivité: ${product.caracteristiques.connectivité},
        Ecran: ${product.caracteristiques.écran},
        Prix: ${product.prix},
        Image: ${product.image}`);
      displayProduct(product);
    });
  })
  .catch((error) => console.error("Error fetching JSON files:", error));

function displayProduct(product) {
  const productDiv = document.createElement("div");
  productDiv.innerHTML = `<h3>${product.nom_produit}</h3>
      <p>Description: ${product.descriptif}</p>
      <p>Resolution: ${product.caracteristiques.résolution}</p>
      <p>Zoom: ${product.caracteristiques.zoom}</p>
      <p>Connectivité: ${product.caracteristiques.connectivité}</p>
      <p>Ecran: ${product.caracteristiques.écran}</p>
      <p>Resolution: ${product.caracteristiques.résolution}</p>
      <p>Prix: ${product.prix}€</p>
      Image: ${product.image}²²
      <button class="addButton" data-id="${product.nom_produit}"${product.nom_produit}">Achète moi!</button>`;
  document.getElementById("product").appendChild(productDiv);

  productDiv.querySelector(".addButton").addEventListener("click", function (event) {
    const productId = event.target.getAttribute("data-id");
    cartList.push(productId);
    addToCart(product);
  });
}

function showproduct(product) {
  const listProducts = document.getElementById("product-list");
}
