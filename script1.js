const myArray = [1,2,3,4,5];
console.log(myArray);

//code
const temp1 = myArray[4]
const temp2 = myArray[2]

myArray.splice(2,1,temp1)
myArray.splice(4,1,temp2)

console.log(myArray)