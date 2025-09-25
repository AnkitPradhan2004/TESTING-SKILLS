const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./Config/db");

dotenv.config();

connectDB();
const app = express();
app.use(express.json());
app.use("/api/transactions",require("./Routes/transactionRoute"));

const PORT = process.env.PORT|| 3000;

app.listen(PORT,()=>{
    console.log(`Server started on the port ${PORT}`)
})