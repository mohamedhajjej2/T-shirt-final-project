const express=require("express");
const  cors=require("cors");
const connectDB=require('./config/dbConnect');
const app = express();
require('dotenv').config();


// connect to DB
connectDB();
app.use(express.json());
app.use(cors());

// user,commande,product
app.use("/user",require("./routes/user"));
app.use("/product",require("./routes/product"));
app.use("/commande",require("./routes/commande"));


// routes


//server
const PORT=process.env.PORT;
app.listen(PORT,(err)=> err ?
console.log(err) : console.log("server is running"));