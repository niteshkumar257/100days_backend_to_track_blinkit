// q1
let arr=[1,2,3,4,5]
console.log(arr[2], arr.length);
arr.length=2;
console.log(arr[2], arr.length);
console.log(arr);

// q2
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();

// q3 

console.log(1+false);
console.log(1+true); 
console.log(1-false); 
console.log(1+'2'-1); 


//q4
(function fnA(a) {
    return (function fnB(b) {
      console.log(a); // What is logged?
    })(1);
  })(0);

// q5
var a=10;
function change()
{
  var a=34;
}
change();
console.log(a);


// q6
let b=10;
function change2()
{
  let   b=34;
}
change2();
console.log(b);

var x = 1;
function foo() {
 x = 10;
 return;
 function x() {}
}
foo();
console.log(x); // Output: 1

// let c=-1;
// console.log(c+"1");
// console.log(String(c));

console.log(+true);
console.log(+"iad");

console.log(typeof typeof 1);
console.log(typeof -"1");
