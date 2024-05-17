const express=require('express')
var jwt=require('jsonwebtoken')
const app=express()
app.post('/login',(req,res)=>{
    const user={
        username:'cvrc',
        password:'jpmcc'
    }
    jwt.sign({user},"secretkey",(err,token)=>{
        res.status(200).json({token})
    })
})
verif=(req,res,next)=>{
    
token=req.headers.authorization.split(' ')[1]
console.log(token)
req.token=token;


    next();
}
app.post('/profile',verif,(req,res)=>{
    console.log(req.token)
jwt.verify(req.token,'secretkey',(err,data)=>{
    if(!err)
        
     {   res.status(200).json({"message":'profile'})
}

        res.status(404).send("tokenmismatch")

})



})
app.listen(2000,()=>console.log("server succesfull"))