/*const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
let arrayString = '';
for (let n=0; n < myArray.length; n++){
    if (myArray[n]%2!==0){
    arrayString = arrayString + myArray[n] + " "
}
}
console.log(arrayString);
*/

//multiplie bord
const myArray = [1,2,3,4];
let arrayString = '';
let multi = 1;
for (let i=0; i<myArray.length;i++){
    arrayString += myArray[i]*multi + ' ';
    }
console.log(arrayString)

//nested loop

for(let j=0; j<myArray;j++){
    let multi=myArray[j]
}

//code
const temp1 = myArray[4]
const temp2 = myArray[2]

myArray.splice(2,1,temp1)
myArray.splice(4,1,temp2)

console.log(myArray)