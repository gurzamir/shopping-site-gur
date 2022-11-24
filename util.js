// name : 'coffee',
// price : 12,
// id : 5,
// amount : 10,
// descreption : 'boost of energy',
// image : 'images/coffee.jpeg',
console.log(1);
// function test1(obj){
//     console.log(1)
//     const product = document.createElement('div');
//     const productPrice = document.createElement('div');
//     const productDescreption = document.createElement('div');
//     const productAmount = document.createElement('div');
//     const productimg = document.createElement('img');
    
//     product.classList.add('product');
//     productimg.classList.add('images')

//     product.innerHTML = obj.name;
//     productPrice.innerHTML = "price of " + obj.name + " is: " + obj.price;
//     productDescreption.innerHTML ='about ' + obj.name +': ' + obj.descreption;
//     productAmount.innerHTML ='anount of ' + obj.name + 'is: ' + obj.amount;
//     productimg.src = obj.image;
    
//     product.appendChild(productimg);
//     productContainer.appendChild(product);
//     product.appendChild(productPrice);
//     product.appendChild(productDescreption);
//     product.appendChild(productAmount);

// }

function createProduct(){
    const createProduct = document.createElement('div')
    createProduct.classList.add('product');
    console.log(createProduct)
    productsContainer.appendChild(createProduct);
    return createProduct
};

function createProductName(obj){
    
    const createName = document.createElement('div')
    createName.innerHTML = obj.name;
    productContainer.appendChild(createName);
}
function createProductPrice(obj){
    
    const createPrice = document.createElement('div')
    createPrice.innerHTML = obj.price;
    productContainer.appendChild(createPrice);
}
function createProductDescription(obj){
    
    const createDescription = document.createElement('div')
    createDescription.innerHTML = obj.descreption;
    productContainer.appendChild(createDescription);
}
function createProducimg(obj){
    
    const createProductImg = document.createElement('img')
    createProductImg.src = obj.image;
    createProductImg.classList.add('images')
    productContainer.appendChild(createProductImg);
}
