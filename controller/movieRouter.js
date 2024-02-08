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

router.get("/viewall",async(req,res)=>{
    let data=await movieModel.find()
    res.json(data)
    })


module.exports=router