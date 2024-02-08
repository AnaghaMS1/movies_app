const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
 const movieRouter=require("./controller/movieRouter")

const app=express()
app.use(express.json())
app.use(cors())

app.use("/movie",movieRouter)


mongoose.connect("mongodb+srv://Anagha123:anagha123@cluster0.8e1jiqb.mongodb.net/bankDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.listen(3001,()=>{
    console.log("server running")
})
...