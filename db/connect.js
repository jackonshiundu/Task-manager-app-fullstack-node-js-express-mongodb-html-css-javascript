 const mongoose=require('mongoose');


const connectDb=(url)=>{
    mongoose.connect(url,{
        useNewUrlParser:true,
        useFindAndModify:false,
        useUnifiedTopology:true
    })
}

module.exports =connectDb