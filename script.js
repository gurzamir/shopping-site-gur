const productContainer=document.getElementById("products-containers");


let productList = ["black Tea", "Green Tea","coffee", "chai", "black coffee", "house mix"]
for (let i = 0; i<2; i++) {
    if (i = 0){
    const product1 = document.createElement("div");
   product1.classList.add("product");
   productContainer.appendChild(product1);
   product1.innerHTML = productList[0];
   }else if (i > 0 && i < 2){
        const product2 = document.createElement("div");
        product2.classList.add("product");
        productContainer.appendChild(product2);
        product2.innerHTML = productList[1];
    }else if (i>2){
    const product3 = document.createElement("div");
    product3.classList.add("product");
    productContainer.appendChild(product3);
    product3.innerHTML = productList[2];
   }
}
// const blackTea=document.createElement("div");
// const greenTea=document.createElement("div");

// blackTea.innerHTML = productList[0];
// greenTea.innerHTML = productList[1];

// blackTea.classList.add("product");
// greenTea.classList.add("product");

// productContainer.appendChild(blackTea);
// productContainer.appendChild(greenTea);

