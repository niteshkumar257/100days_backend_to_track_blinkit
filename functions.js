// function in javascript 
// q1 waht is the function delclartion 

// function square (num)
// {
//     return num*num;
// }
// function declartion

// function expression
// const squqre=function (num)
// {
//     return num*num;
// }
// anonoums function

// first class functions
// what is iife

// (function square(num)
// {
//     console.log(num*num);
// })(5);

// (function (x)
// {
//    return (
//     function(y)
//     {
//         console.log(x);
//     }
//    ) (2);
// })(1);

// function scopre output based questions
// for(let i=0;i<5;i++)
//     {
//         setTimeout(function()
//     {
//         console.log(i);
//     },i*1000);
//     }


// tricky question
// var a=10;
// function fun()
// {
    // here the hoisting happens if the variable in the local scope then it will not fetch in the global scope
//     console.log(a);
//     var a=23;
    

// }
// let a=10;
// function fun()
// {
//     console.log(a);
//     let a=19;
//     // here also hoisting happens but the let variable in the temporal dead zone
// }

// let a=10;
// function fun()
// {
//     console.log(a);
// }
// fun();

// here hoising happens 

username="Kumar Reddy"

function mul(num1,num2)
{
    return num1*num2;
}
let a=[10,20];
let result=mul(...a); // spread operator 
console.log(result);
function add(...arr) // resoperator
{
    console.log(arr);
    return arr[0]+arr[1]+arr[2];
}
let nr=add(10,203,30);
console.log(nr);

// tricky spread operator questions
 function fn(a,x,y,...arr)
{
     console.log(a,x,y);
}
// the rest and spread operator should be the last param

// this keyword

const arrowFun=()=>{
    console.log(arguments);
}
function arrowFunNormal()
{
 console.log(arguments);
}
arrowFunNormal("hello there")
arrowFun("hello arrows");
let user={
    username:"Nitesh Kumar",
    rc1:()=>{
        console.log(this);
        console.log(this.username);
    },
    rc2()
    {
        console.log(this.username);
    }
}
user.rc1();
user.rc2();