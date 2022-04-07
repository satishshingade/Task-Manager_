const mongoose = require('mongoose');



const connectDB=(url)=>{
    mongoose.connect(url,{
        userNewUrlParser: true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
    
}


module.exports=connectDB







