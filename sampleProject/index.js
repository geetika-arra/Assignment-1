const express =require("express");
const api=express();
const cors=require('cors');
const productRepo =require('./Repo/ProductRepoService');
api.use(cors());
api.get('/Products',(req,res)=>{
     productRepo.getProducts((err,result)=>{
             if(err){
                 res.status(500).send({
                     error:"Unable to respond to Request"
                 });
            
             }else{
                 res.status(200).send({
                     products:result
                 })
             }
     })
});

api.listen('8081',()=>{
    console.log("Server is UP & Running");
})