// @desc  get all transaction
// @route get api/v1/transaction
const Transaction=require('../models/transaction')

exports.getTransaction= async (req,res,next)=>{
   try{
        const transaction= await Transaction.find();

        return res.status(200).json({
            success:true,
            count:transaction.length,
            data:transaction
        });
   } catch(err) {
        return  res.status(500).json({
            success:false,
            error:'server error'
        });
   }
}

// @desc  add transaction
// @route post api/v1/transaction
exports.addTransaction=async (req,res,next)=>{

    try{
        const {text,amount}=req.body;
        const transaction=await Transaction.create(req.body);
        return res.status(201).json({
            success:true,
            data:transaction
        })
    }catch(err){
        return res.status(400).json({
            success:false,
            error:'please try again'
        })
    }
  
}

// @desc  delete transaction
// @route get api/v1/transaction/:id
exports.deleteTransaction=async (req,res,next)=>{
    try{
        const transaction=await Transaction.findById(req.params.id);
        if(!transaction){
            return res.status(404).json({
                success:false,
                error:'NO Transaction Found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success:true,
            data:{}
        })
    }catch{
        return res.status(500).json({
            success:false,
            error:'server error'
        })
    }
    res.send('DELETE TRANSACTION'); 
}