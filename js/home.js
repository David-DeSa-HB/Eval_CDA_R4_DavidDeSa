function displayRandomList(data) {
  const app = document.getElementById("app");
  app.className= "app-home";
  // app.innerHTML = "";
  app.innerHTML = `<h2 class="machin">Accueil</h2>`;

  const shuffledData = data.sort(() => 0.5 - Math.random());
  const selectedData = shuffledData.slice(0, 3);

  selectedData.forEach((product) => {
    const element = document.createElement("div");
    element.className= "card-box";
    element.innerHTML = `
                <img src="${product.image}" alt="${product.nom_produit}">
                <h3>${product.nom_produit}</h3>
                <p>FakeID: ${product.id}</p>
                <p>Description: ${product.descriptif}</p>
                <p>Resolution: ${product.caracteristiques.résolution}</p>
                <p>Zoom: ${product.caracteristiques.zoom}</p>
                <p>Connectivité: ${product.caracteristiques.connectivité}</p>
                <p>Ecran: ${product.caracteristiques.écran}</p>
                <p>Prix: ${product.prix}</p>
                
                <button class="showButton" data-id="${product.id}">Regarde moi!</button>
            `;
    app.appendChild(element);

    element.querySelector(".showButton").addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      showProduct(productId, data);
    });
  });
}
