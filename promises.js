// const promise1=new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   let check=true;
//   if(!check)
//     {
//         resolve("hello there I am nitesh");
//     }else
//     {
//         reject("hello there I am error");
//     }
//   },2000)
// })
// promise1.then((res)=>{
//     return res+"good job needed";
// }).then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      let check=false;
      if(check)
        {
            const data={
                name:"nitesh",age:21,eductation:"b.e"
            }
            resolve(data);
        }else
        {
            const err={
                sucess:0,message:"no data"
            }
            reject(err);
        }
    },2000)
})
// promise2.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("response");
// })

const getData=async()=>{
    try{
        const res=await promise2;
        console.log(res);

    }catch(err){
        console.log(err);

    }

}
getData();