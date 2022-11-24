console.log('hello')
const productsContainer=document.getElementById("products-containers");
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

    
  

let productContainer;

for (let i = 0; i < productArray.length; i++ ){
    productContainer = createProduct()
    createProductName(productArray[i])
    createProductPrice(productArray[i])
    createProductDescription(productArray[i])
    createProducimg(productArray[i])
}




