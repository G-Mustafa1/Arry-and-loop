// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

let nested_Arry = [[], []];
nested_Arry[0][0] = "Nested Aarry";
console.log(nested_Arry)
document.write(` <br> <h1> Q1: Nested Aarry </h1> <br> <h2> Nested A arry <br> ${nested_Arry} </h2> <hr>`)

// 2. Declare and initialize a multidimensional array
// representing the following matrix:

let matrix = [
   [0, 1, 2, 3],
   [1, 0, 1, 2],
   [2, 1, 0, 1],
]

document.write(`<br> <h1> Q2: Matrix `);
document.write(` <h2> ${matrix[0]} <br>  ${matrix[1]} <br> ${matrix[2]} </h2> <hr>`);

// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <=10; i++) {
   document.write(`${i}`)
}
document.write(`<hr>`);

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// document.write(`<br> <h1> Q4: Enter a Table numbrs and lenth </h1> <h2>`)
// let tableNum = +prompt("Enter a table number" ,"5")
// let tableLenth = +prompt("Enter a table lenth" , "10")
// for (let i = 1; i <= tableLenth; i++) {
//    document.write(`<table border="1px"> <tr> ${tableNum} X ${i} = ${tableNum * i} <br> </tr> </table>`)
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ['apple', 'banana', 'mango', 'orange','strawberry'];
// document.write(`<hr> <br> <h1> Q5: Aarry of index </h1> <h2> `)
// // document.write(`${fruits}`)
// for(index in fruits){
//    document.write(`<br>  Element at index is ${[index]}: ${fruits[index]} `)
// }

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write(`<hr> <br> <h1> Q6: Counting </h1> <h2>`)
let Counting = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
document.write(`${Counting} <br> <br>`);
Counting.reverse();
document.write(`Countind Reverse:  <br> ${Counting} <br> <br>`);
document.write(`Even Numbers: <br>`);
let Evennum = [];
for (let i = 0; i <= 20; i+=2) {
   // if(i % 2 == 0 ){
      Evennum.push(i)
   // }   
}
document.write(`${Evennum} <br> <br> `);
document.write(`Odd Numbers: <br>`);
let OddNum = []
for (let i = 1; i <= 19; i++) {
   if(i % 2!== 0){
      OddNum.push(i)
   }
}
document.write(`${OddNum} <br> <br> `);

document.write(`Series: <br> `);
let series =  [];
for (let i = 2; i <= 20; i+=2) {
   series.push(i+"k");
}
document.write(`${series} <hr>`);

//7. You have an arrayA = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
//Write a program to enable “search by user input” in an
//array.
//After searching, prompt the user whether the given item is
//found in the list or not. Example
// document.write(`<br> <h1> Q7: My Bakery </h1>`)
// let A = ['cake', 'applepie', 'cookie', 'chips', 'patties','bisket','lays','bread','butter'];
// let userInput2 = prompt("Welcome to my bakery","cake");
// let found = A.includes(userInput2)
// console.log(found);
// if(found){
//    let index2 = A.indexOf(userInput2);
//    document.write(`<h2>${userInput2} is avalibale at index ${index2} in my barky <br>  <hr>`);
// }
// else{
//    document.write(`We are sorry ${userInput2} is not avalibale in my bakry <hr>`);
   
// }

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
document.write(`<br> <h1> Q8: The lagest number </h1>`)

let A1 = [24, 53, 78, 91, 12];
document.write(`<h2> ${A1} <br>`)
let max = [];
for (let i = 0; i < A1.length; i++) {
   if(A1[i] > max){
      max = A1[i]
   }
}
document.write(max+"<hr>");

// 9. Write a program to identify the smallest number in the
// given array.
document.write(`<br> <h1> Q9: The smallest number </h1>`)
let A2 = [24, 53, 78, 91, 12];
document.write(`<h2> ${A2}`)
let smalest = Math.min(...A2);
document.write(`<br> ${smalest} <hr>`)

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.

document.write(`<br> <h1> Q10: multiples of ranging 5 to 100 </h1> <br> `)
let arrPush = []
for (let i = 1; i <= 100; i++) {
   if( i % 5 === 0){
      arrPush.push(i)
   }   
}
document.write("<h2>",arrPush ," </h2><hr>")