let cartList = [];
let title = (document.title = "Product List");

window.addEventListener("load", () => {
  if (title === "Home") {
    fetchProducts(displayRandomList);
  } else if (title === "Product List") {
    fetchProducts(displayProductList);
  } else if (title === "Cart") {
    fetchProducts(displayCart);
  } else if (title.startsWith("Produit: ")) {
    const productId = title.split("Produit: ")[1];
    fetchProducts((data) => showProduct(productId, data));
  }
});

document.getElementById("home-btn").addEventListener("click", () => {
  title = "Home";
  fetchProducts(displayRandomList);
});

document.getElementById("products-btn").addEventListener("click", () => {
  title = "Product List";
  fetchProducts(displayProductList);
});

document.getElementById("cart-btn").addEventListener("click", () => {
  title = "Cart";
  fetchProducts(displayCart);
});

function goBack() {
  title = "Product List";
  fetchProducts(displayProductList);
}
