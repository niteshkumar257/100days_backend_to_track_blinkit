// // const arr=[1,2,3,4,5,6,1,2,3];
// // const new_arr=[...new Set(arr)];
// // console.log(typeof new_arr)
// // console.log(new_arr)


// const a=()=>{
//     console.log(this);
// }
// a();
// // node environment then empty object

// let x="hello";
// let y=new String(x);
// console.log(typeof y);

// let b=[];
// console.log(typeof b);
// let c=[];
// console.log(typeof (b+c));

// let x="true";
// let y=!x;
// console.log(x,typeof !x);
// let z=true+"false";
// console.log(z);
// console.log(true=="true");
// let l=Boolean(x);
// console.log(l);

// let st="23";
// let st1=+st;
// let st2=++st1;
// console.log(typeof st1,st1,st2);

// let a="a";
// console.log(typeof +a); // not a number
// const b=[2];
// let x=2;
// console.log(b==x);


// let x=10;
// let y=20;
// console.log("total = "+10+20);

// const arr=[1,2,3,4,5];
// const new_arr=arr.forEach((item) => item *2); // doesnot return the new array it only travers the array
// console.log(new_arr);
// console.log(arr);

let x=1;
// let y=x++;
console.log(x++);
// console.log(x + x++);

console.log(typeof x)
console.log((typeof x).length)
let l="bitesh";
console.log((typeof l).length)

const arr =[31,23,8,9];
arr.sort();
console.log(arr);
