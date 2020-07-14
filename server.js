const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const connectDB=require('./config/db')

dotenv.config({path:'./config/config.env'})

connectDB();

const transaction=require('./routes/transcation')

const app=express();

app.use(express.json());

app.use('/api/v1/transaction',transaction)

app.get('/',(req,res)=>res.send('hello'));

 
const PORT=process.env.PORT || 5000

app.listen(5000,console.log(`Server running in ${process.env.NODE_ENV} mode on port${PORT}.yellow.bold`));



