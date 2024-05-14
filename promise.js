
// var a=10;
// let p=new Promise(function(resolve,reject){


// if(a%2==0)
//     {
//         resolve("success");
//     }
//     else
//     {
//         reject("failure");
//     }









// })
// p.then((msg)=>console.log(msg));
// p.catch((err)=>console.log(err));

users=[
    {
        id:1,
        name:"venkat",
        branch:"DS"

    },
    {
        id:"2",
        name:"ram",
        branch:"EIE"

    },
    {
        id:"3",
        name:"raju",
        branch:"ECE"

    },
    {
        id:"4",
        name:"laxman",
        branch:"CIVIL"

    },
    {
        id:"5",
        name:"raj",
        branch:"MECH"

    }
]
function prom(id)
{
    return new Promise((resolve,reject)=>
    {

for(var obj of users)
    {
        if(id==obj.id)
            {
                resolve(obj);
            }
        }
           
                reject("Id not found");
       
    





    })
}
setTimeout(function(){prom(1)},90000)
prom(1).then((resp)=>console.log(resp.id+" "+resp.name+" "+resp.branch))
.catch((resp)=>console.log(resp));

console.log("fetching data")

// prom(1).then((user)=>getUsername(user.name))
// .then((branch1)=>getbranch(branch1.branch))
// .catch((err)=>console.log(err.message))










