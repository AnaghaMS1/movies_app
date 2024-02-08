const mongoose=require("mongoose")

const movieSchema =new mongoose.Schema(
    {
        movieName:String,
        actorName:String,
        actoressName:String,
        directorName:String,
        releasedYear:String
    }
)
module.exports=mongoose.model("movie",movieSchema)