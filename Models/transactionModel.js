const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    amount:{type:String,required:true},
    type:{type:String,enum:["Credit","Debit"],required:true},
    category:{type:String,required:true},
    description:{type:String}
})

module.exports = mongoose.model("transaction",TransactionSchema)