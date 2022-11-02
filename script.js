console.log('hello')
const productContainer=document.getElementById("products-conteiner");
/*const product1 = document.createElement('div')
product1.innerHTML = 'green tea'
product1.classList.add('product');
productContainer.appendChild(product1);*/
const productArray = ['green tea', 'chai', 'coffee', 'icecream', 'soup', 'chocko', 'coconut', 'lior-fav'];

for (let i = 0; i < productArray.length; i++ ){
    console.log(productArray.length);
    console.log(productArray[i]);
    const product1 = document.createElement('div');
    product1.classList.add('product')
    product1.innerHTML = productArray[i]
    console.log(product1.innerHTML);
    productContainer.appendChild(product1)


}    



// const blackTea=document.createElement("div");
// const greenTea=document.createElement("div");

// blackTea.innerHTML = productList[0];
// greenTea.innerHTML = productList[1];

// blackTea.classList.add("product");
// greenTea.classList.add("product");

// productContainer.appendChild(blackTea);
// productContainer.appendChild(greenTea);
