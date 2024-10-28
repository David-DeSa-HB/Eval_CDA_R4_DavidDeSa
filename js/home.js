function displayRandomList(data) {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const shuffledData = data.sort(() => 0.5 - Math.random());
  const selectedData = shuffledData.slice(0, 3);

  selectedData.forEach((product) => {
    const element = document.createElement("div");
    element.innerHTML = `
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
    app.appendChild(element);

    element.querySelector(".showButton").addEventListener("click", function (event) {
      const productId = event.currentTarget.getAttribute("data-id");
      showProduct(productId, data);
    });
  });
}