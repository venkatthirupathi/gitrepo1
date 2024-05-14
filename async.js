// async function add(x,y)
// {
//     return x+y;
// }
// // console.log(add(1,2))
// add(1,2).then((resp)=>console.log(resp))
// console.log("Data")

getDouble2 = (x)=>x*2;
async function addaysn()
{
 
    const a= await  getDouble2(10);
    const b=await getDouble2(20);
    const c=await getDouble2(30);
    const d=await getDouble2(40);
      return (a+b+c+d)


}
    addaysn().then((resp)=>console.log(resp))
    .catch((resp)=>console.log(resp))
    addaysn()
    console.log("data")