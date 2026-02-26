const categoryContainer = document.querySelector("#categorylist");

fetch("https://kea-alt-del.dk/t7/api/seasons")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      categoryContainer.innerHTML += `<a href="productlist.html" class="card_categories">${category.season}</a>`;
    });
  });
