const productListContainer = document.querySelector("#productlist");
// console.log("Product list");
const params = new URLSearchParams(window.location.search);
const season = params.get("season");

console.log("SEASON", season);

fetch(`https://kea-alt-del.dk/t7/api//products?season=${season}`)
  .then((res) => res.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  console.log("productsArr", productsArr);
  productListContainer.innerHTML = "";
  productListContainer.innerHTML += `<h2>${season}</h>`;

  productsArr.forEach((product) => {
    console.log("product", product.id);

    productListContainer.innerHTML += `<article class="product_card onSale">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image">
    <h3>${product.productdisplayname}</h3>
    <p class="subtitle">${product.subcategory}</p>
    <p class="price">DKK <span>${product.price}</span>,-</p>
    <div class="sale">
        <p>Now DKK <span>${Math.round(product.price * (1 - product.discount / 100))}</span>,-</p>
        <p><span>${product.discount}</span>%</p>
    </div>
    <a href="product.html?id=${product.id}">Read More</a>
</article>`;
  });
}
