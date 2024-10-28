const request = new Request("produits.json");
let fakeID = 0;

function fetchProducts(callback) {
  fetch(request)
    .then((response) => response.json())
    .then((data) => {
      fakeID = 0;
      data.forEach((product) => {
        product.id = fakeID++;
      });
      callback(data);
    })
    .catch((error) => console.error("Error fetching JSON files:", error));
}
