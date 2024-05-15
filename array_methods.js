const arr=[1,2,3,4,5,6];
arr.sort((a,b)=>b-a);
console.log(arr);
// map 
// it will give new array 
let new_arr=arr.map((item)=>item*2);
console.log(new_arr);

// filter 
let new_filter_arr=arr.filter((item)=>{ return item%2==0});
console.log(new_filter_arr);

// some 

let new_some_value=arr.some((item)=>item>10);
console.log(new_some_value)

let new_some_value2=arr.some((item)=>item<4 && item>1);
console.log(new_some_value2);



// every 
let new_every_value1=arr.some((item)=>item>=1);
console.log(new_every_value1);


// find method

let find_value=arr.find((item)=>item==8);
console.log(find_value);


// include
let include_value=arr.includes(2);
console.log(include_value);


// reducer 

let reducer_value=arr.reduce((acc,cur)=>cur+acc,0);
console.log(reducer_value);