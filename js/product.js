const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const productContainer = document.querySelector("#productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
      <figure>
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Produktbillede" class="productImage" />
        <span class="saleLabel"></span>
      </figure>
      <section class="productDetails">
        <h3 class="productName">${data.productdisplayname}</h3>
        <div class="productInfo">
          <p class="articleType"><span class="bold">Type: </span> ${data.articletype}</p>
          <p class="productCategory"><span class="bold">Category: </span> ${data.category}</p>
          <p class="productPrice"><span class="bold">Price: </span> ${data.price}</p>
          <form action="sizeChoose">
            <div class="formGroup">
              <select name="size" id="size-select" required>
                <option value="">Choose a size</option>
                <option value="small">S</option>
                <option value="medium">M</option>
                <option value="large">L</option>
              </select>
            </div>
          </form>
        </div>
        <button class="buyBtn">Buy Now</button>
      </section>
      `;
  });
