console.log("Hello word");
document.addEventListener("DOMContentLoaded", function () {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => displayProducts(data))
    .catch((error) => console.error("Error fetching products:", error));
});
function displayProducts(products) {
  const productGrid = document.getElementById("productGrid");
  products.forEach((product) => {
    const productElement = createProductElement(product);
    productGrid.appendChild(productElement);
  });
}
function createProductElement(product) {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");
  const truncatedTitle =
    product.title.length > 18
      ? product.title.substring(0, 18) + "..."
      : product.title;

  const productContent = `
  <div class="position-relative">
         <span class="heart-icon"><i class="bi bi-heart"></i></span>
         <img src="${product.image}" alt="${product.title}">
         <div class="product-info">
           <div class="title-and-icon">
             <h5 class="product-title">${truncatedTitle}</h5>
           </div>
           <p class="product-price">Price: $${product.price}</p>
           <div style="display: flex; align-items: center;">
             <div class="circle" style="background-color: gray;"></div>
             <div class="circle" style="background-color: yellow;"></div>
             <div class="circle" style="background-color: pink;"></div>
           </div>
         </div>
       </div>
    `;

  productDiv.innerHTML = productContent;
  return productDiv;
}


// function createProductElement(product) {
//   const productDiv = document.createElement("div");
//   productDiv.classList.add("product");
//   const truncatedTitle =
//     product.title.length > 18
//       ? product.title.substring(0, 18) + "..."
//       : product.title;

//   const productContent = `
//     <div class="position-relative">
//       <span class="heart-icon"><i class="bi bi-heart"></i></span>
//       <img src="${product.image}" alt="${product.title}">
//       <div class="product-info">
//         <div class="title-and-icon">
//           <h5 class="product-title">${truncatedTitle}</h5>
//           <div class="plus-icon">
//             <span class="plus-icon-content"><i class="bi bi-plus"></i></span>
//           </div>
//         </div>
//         <p class="product-price">Price: $${product.price}</p>
//         <div style="display: flex; align-items: center;">
//           <div class="circle" style="background-color: gray;"></div>
//           <div class="circle" style="background-color: yellow;"></div>
//           <div class="circle" style="background-color: pink;"></div>
//         </div>
//       </div>
//     </div>
//   `;

//   productDiv.innerHTML = productContent;
//   return productDiv;
// }





