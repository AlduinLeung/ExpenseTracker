const mongoose=require('mongoose');

const connectDB= async ()=>{
    try{
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useCreateIndex:true,
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(`Mongodb Connected`)
    }catch(err){
        console.log(`ERROR:${err.message}`.red);
        process.exit(1);
    }
}

module.exports=connectDB;