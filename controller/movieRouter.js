const express=require("express")
const router=express.Router()
const movieModel=require("../model/movieModel")


router.post("/add",async(req,res)=>{
    let data=req.body
    let movie= new movieModel(data)
    let result=await movie.save()
    res.json({
        status:"success"
    })
})


module.exports=router