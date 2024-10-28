const request = new Request("produits.json");
let FakeID = 0;

function fetchProducts(callback) {
  fetch(request)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        product.id = FakeID++;
      });
      callback(data); // Pass the data to the callback function
    })
    .catch((error) => console.error("Error fetching JSON files:", error));
}
