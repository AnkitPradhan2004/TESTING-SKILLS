const transactions = require("../Models/transactionModel");

exports.AddTransactions = async(req,res)=>{
    try {
        const {amount , type , category , description} = req.body;
        const transaction = new transactions({
            amount,
            type,
            category,
            description
        })
        await transaction.save();
        req.status(200).json(transaction)
    } catch (error) {
        res.status(500).json({msg:"Server error"})
        
    }
}



exports.DisplayTransacitions = async (req,res)=>{
    try {
        const ALLtransactions= await transactions.aggregate([{
            $group:{
                amount:"amount",
                type:"type",
                category:"category",
                description:"category"

            }
        }])
       res.status(201).json(ALLtransactions);
        
    } catch (error) {
        res.status(500).json({msg:"Server Error"})
        
    }
}

exports.TotalBalance = async ()=>{
    try {
        const totalcredit = await transactions.aggregate({
            $match:{
                type:"Credit",
                $group:{
                    total:{$sum:amount}

                }
                
            }
        })
        const totaldebit = await transactions.aggregate({
            $match:{
                type:"Debit",
                $group:{
                    total:{$sum:amount},

                }
                
            }
        })
        const totalBalance = totalcredit-totaldebit;
        res.json(totalBalance)
    } catch (error) {
        res.status(500).json({msg:"Server error"})
        
    }

}

exports.UpdateTransaction = async(req,res)=>{
    try {
        let transaction = await transactions.findById(req.params.id);
        if(!transaction)return res.status(404).json({msg:"Transaction NOT FOUND"})
        transaction = await transactions.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(transaction)
    } catch (error) {
        res.status(500).json({msg:"Server Error"})
    }

}

exports.DeleteTransaction = async(req,res)=>{
    try{
        let transaction = await transactions.findById(req.params.id);
        if(!transaction)return res.status(404).json({msg:"Transaction NOT FOUND"})
        transaction = await transactions.findByIdAndDelete(req.params.id,req.body,{new:true});
        res.json({msg:'Deleted Successfully'})
    }
    catch{
        res.status(500).json({msg:"Server Error"})
    }
}