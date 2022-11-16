console.log('hello')
const productContainer=document.getElementById("products-containers");
const productArray = []
productArray.push(
    {
        name :'green tea',
        price : 12,
        id : 0,
        amount : 1,
        descreption : 'healthy and refreshing',
        image : 'images/green tea.jpg',
   },
   {
        name : 'chai',
        price : 12,
        id : 1,
        amount : 1,
        descreption : ' aromtic flavour for cold nights',
        image : 'images/chai.jpeg'
        
   },
   {
            name : 'milk',
            price : 5,
            id : 2,
            amount : 1,
            descreption : 'wow!',
            image :'images/milk.jpg',
   },
   {
    name : 'fruit-shake',
    price : 6,
    id : 3,
    amount : 5,
    descreption : 'mixed seasons fruits with vanilla milk',
    image : 'images/fruit.jpg',
   },
   {
    name : 'black tae',
    price : 10,
    id : 4,
    amount : 6,
    descreption : 'aromatic flavour',
    image : 'images/black tea.jpg' ,
   },
   {
    name : 'coffee',
    price : 12,
    id : 5,
    amount : 10,
    descreption : 'boost of energy',
    image : 'images/coffee.jpeg',
   }
)

    
    function test1(obj){
        console.log(1)
        const product = document.createElement('div');
        const productPrice = document.createElement('div');
        const productDescreption = document.createElement('div');
        const productAmount = document.createElement('div');
        const productimg = document.createElement('img');
        
        product.classList.add('product');
        productimg.classList.add('images')

        product.innerHTML = obj.name;
        productPrice.innerHTML = "price of " + obj.name + " is: " + obj.price;
        productDescreption.innerHTML ='about ' + obj.name +': ' + obj.descreption;
        productAmount.innerHTML ='anount of ' + obj.name + 'is: ' + obj.amount;
        productimg.src = obj.image;
        
        product.appendChild(productimg);
        productContainer.appendChild(product);
        product.appendChild(productPrice);
        product.appendChild(productDescreption);
        product.appendChild(productAmount);

    }

for (let i = 0; i < productArray.length; i++ ){
     test1(productArray[i]);

}




