const express=require('express')
const  fs=require('fs')
// const myreadstream =fs.createReadStream(__dirname+'/input.txt',"utf8");


// myreadstream.on('data',(chunk)=>{console.log("chunk received")
// console.log(chunk)})
// const  mywritestream=fs.createWriteStream(__dirname+'/output.txt')
// myreadstream.on('data',(chunk)=>{console.log("chunk received")
// mywritestream.write(chunk);
// myreadstream.pipe(mywritestream)



// }
// )
var employees=[{
    id:1,
    name:"sachin",
    branch:"CSE"
},
{
    id:2,
    name:"raj",
    branch:"IT"
}]
var app=express()
app.get('/',(req,res)=>{
    res.send("helloworld")
})
app.get('/contact',(req,res)=>{
    res.send("Contact us")
})
app.use(express.json())
app.get('//',(req,res)=>{
    res.send("done");
})
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/api/employees',(req,res)=>{
    res.json(employees)
})
app.get('/api/employees/:id',(req,res)=>{
    const emp=employees.find(emp=>emp.id===parseInt(req.params.id))
    if(!emp){
        res.status(404).send(`your requested id${req.params.id} is not found`)
    }
        else{
res.status(200).json(emp)
        }
    })
    function mw(req,res,next){
        next()
    }
    app.post('/api/employees/',(req,res)=>{
        const empl={
            id:employees.length+1,
            name:req.body.name,
            branch:req.body.branch
        }
        employees.push(empl);
        res.status(200).json(empl)
       
    })
    app.put('/api/employees/:id',(req,res)=>{
        const empl=employees.find(emp=>emp.id===parseInt(req.params.id))
        if(!empl){
            res.status(404).send(`your requested id${req.params.id} is not found`)
        }

        empl.name=req.body.name,
        empl.branch=req.body.branch
        
        employees.push(empl);
        res.status(200).json(empl)
        

    })
app.delete('/api/employees/:id',(req,res)=>{
    const emp=employees.find(emp=>emp.id===parseInt(req.params.id))
    
    if(!emp){
        res.status(404).send(`your requested id${req.params.id} is not found`)
   
    }
  var index=employees.indexOf(emp)
  employees.splice(index,1)
  res.json(emp)
})











// app.get('/:i',(req,res)=>{
//     console.log("yours id is ",req.params.i)
//      if(req.params.i>=100 && req.params.i<=199)
//   {
//     res.send("informational reponses")
//   }
//   else   if(req.params.i>=200 && req.params.i<=299) {
//     res.send("successful responses")
//   }
//   else   if(req.params.i>=300 && req.params.i<=399) {
//     res.send("redirects")
//   }
//   else   if(req.params.i>=400 && req.params.i<=499) {
//     res.send("client errors")
//   }
//   else   if(req.params.i>=500 && req.params.i<=599) {
//     res.send("server errors")
//   }
// })








app.listen(400,()=>console.log("server started"));























