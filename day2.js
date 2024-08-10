// var name = "shivam pal anil shubham kiran";

// console.log(name.split(" "))
// console.log(name.split("a"))
// console.log(name.split(" ",2))

//+,-,*,/,% operators;

// shorHand Operator
// a = a+b; or a+=b;
// a = a-b; or a-=b;
// a = a*b; or a*=b;
// a = a/b; or a-/=b;
// a = a%b; or a%=b;

// Increment Operator ++

//     >>Post Increment a++;
//     >>Pre Increment ++a;

// Decrement Operator --

//     >>Post Decrement a--;
//     >>Pre Decrement --a;

// var a = 10;
// a++; //post Increment
// ++a //Pre Increment
// console.log("Post Increment",a++);
// console.log("Pre Increment",++a);

// var b = 20;
// console.log("Original Value:",b);
// console.log("Post Decrement", b--);
// console.log("Pre Decrement", --b);

// Comparsion operator 

// =, Assignment
// ==, Equal
// ===, Strict Equal 



// var x = 123;
// var y = "123";

// console.log(x==y);
// console.log(x===y);

// var obj1 = {
//     name:"shivam",
//     age:21
// }
// console.log(obj1);
// console.log(obj1.age);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

// console.log(Object.entries(obj1));

// console.log(typeof obj1)

// Diff Ways of writing Function
// Arrya Methods (Map,Find,Filter,Reduce)
//Promises

//  1. Named Function 

// function funcName(){

// }
// funcName()

// 2. Anonymous Function 

// var abc = function(){

// }
// abc();

// 3. Arrow Function 

// var xyz = ()=>{

// }
// xyz();

//Array method


var arr1 = [10,20,50,80,60,70,30];

// 1. Map 
// var newArr = arr1.map((data)=>{
//     return data + 10
// })
// OR 
// var newArr = arr1.map((data)=> data+10)
// console.log(newArr);



// 2. Filter 

// var newArr2 = arr1.filter((data)=>{
//     return data > 30
// })
// console.log(newArr2);

// 3. Find 

// var newArr3 = arr1.find((data)=>{
//     return data > 20;
// })
// console.log(newArr3)

// Only First match 

// 4. Reduce 

// var price = [100,200,300,400,500,600,700,800,900];

// var totalPrice = price.reduce((acc,data)=>{
//     return acc+data
// },0)
// console.log(totalPrice);

// 0+100 = 100
// 100+200 = 300
// 300+400= 700
// 700+500 = 1200
// 1200+600 = 1800
// 1800+700 = 2500
// 2500+800 = 3300
// 3300+900 = 4200
