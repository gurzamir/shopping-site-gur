console.log('hello')
const productContainer=document.getElementById("products-containers");
/*const product1 = document.createElement('div')
product1.innerHTML = 'green tea'
product1.classList.add('product');
productContainer.appendChild(product1);*/
const productArray = [{
    name :'green tea',
    price : 12,
    id : 0,
    amount : 1,
    descreption : 'healthy and refreshing'
    }
    
    ,{
    name : 'chai',
    price : 12,
    id : 1,
    amount : 1,
    descreption : ' aromtic flavour for cold nights' 
    }   
]

    
    // 'coffee', 'icecream', 'soup', 'chocko', 'coconut', 'lior-fav'];
    function test1(obj){
        console.log(1)
        const product = document.createElement('div');
        product.innerHTML = obj.name;
        productContainer.appendChild(product);
        product.classList.add('product');
        const productPrice = document.createElement('div');
        productPrice.innerHTML = "price is: " + obj.price;
        product.appendChild(productPrice) 
        const productDescreption = document.createElement('div');
        productDescreption.innerHTML = obj.descreption;
        product.appendChild(productDescreption);
    }

for (let i = 0; i < productArray.length; i++ ){
     test1(productArray[i]);
    // console.log(productArray[i].name);
    // const product =  document.createElement('div');
    // product.innerHTML = productArray[i].name;
    // console.log(product.innerHTML)
    // const productPrice = document.createElement('div');
    // productPrice.innerHTML = productArray[i].price;
    // productContainer.appendChild(product)
    // product.classList.add('product');
    // product.appendChild(productPrice)


}



    /*
    const product1 = document.createElement('div');
    product1.classList.add('product')
    product1.innerHTML = productArray[i]
    console.log(product1.innerHTML);
    productContainer.appendChild(product1);
}   
*/


// const blackTea=document.createElement("div");
// const greenTea=document.createElement(div");

// blackTea.innerHTML = productList[0];
// greenTea.innerHTML = productList[1];

// blackTea.classList.add("product");
// greenTea.classList.add("product");

// productContainer.appendChild(blackTea);
// productContainer.appendChild(greenTea);
