console.log("first section");


//question : 1
// {
//     var a=10;
// }
// console.log(a);

// // block scopr 

// {
//     let b=10;
// }
// console.log(b);

// ans is var is globa scope where as let is in block scope


// question 2 :

// shadowing

// function test()
// {
//     var a="hello";
//     let b="hi";
//     if(true)
//         {
//            let a="Hi";
//         //    var b="hello";
//             console.log(a);
//         }
//     console.log(a);
// }
// test();

// you can shadow the var vairable with let or const 
// but we cannot able to shadow the let variable with var variable

// questions 3 :
// Declartion 
// var a;
// var a;
// let a;
// let a;

// let and const are not redeclare in the same scope

// let a;
// {
//     let a;
// } 
// both are different scope

// const a=10;
// const should delcared with value

// questions 4 :
// intialization

// var a=6;
// a=10;

// let b=10;
// b=20;

// quesstions 5 : hoisting

// console.log(count);
// var count=1;

// console.log(count);
// let count=1;

// thre are hoisted but in temporal deadzone
// function abc()
// {
//     console.log(a,b,c);
//     let b=10;
//     const c=100;
//     var a=10;
// }
// abc();
