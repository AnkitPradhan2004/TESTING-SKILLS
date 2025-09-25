const express =  require("express");
const {AddTransactions,DisplayTransacitions,TotalBalance ,UpdateTransaction,DeleteTransaction} = require("../Controllers/transactionController")
const router = express.Router();
router.post("/",AddTransactions);
router.get("/",DisplayTransacitions);
router.get("/balance",TotalBalance);
router.put("/:id",UpdateTransaction);
router.delete("/:id",DeleteTransaction)

module.exports = router;
