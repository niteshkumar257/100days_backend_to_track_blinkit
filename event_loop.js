console.log("hello before time out");
setTimeout(()=>{
    console.log("time 1000ms");
},1000)
setTimeout(()=>{
  console.log("time out ")
},0);
setTimeout(()=>{
    console.log("no time given");

});

console.log("hello after time out")