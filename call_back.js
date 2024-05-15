function fetchData(callback)
{
    setTimeout(()=>{
         callback("helo there");
    },2000);
}
function processDate(arg)
{
    console.log("result from the server",arg);
}
(fetchData(processDate));