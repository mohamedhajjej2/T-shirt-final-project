const express=require("express");
const Product = require("../models/product");

const productRouter = express.Router();

//add product
productRouter.post("/add", async(req, res)=>{
    try {
       let newproduct= new Product(req.body);
       let result=await newproduct.save();
       res.send({ product: result, msg: "product is added"});
    } catch (error) {
      console.log(error);  
    }
});
//get all product
productRouter.get("/", async(req, res)=>{
  try {
    
     let result=await Product.find();
     res.send({ product: result, msg: "all products"});
  } catch (error) {
    console.log(error);  
  }
});
//get product by id 
productRouter.get("/:id", async(req, res)=>{
  try {
     let result=await Product.findById(req.params.id);
     res.send({ product: result, msg: "one product"});
  } catch (error) {
    console.log(error);  
  }
});

 //delete product

 productRouter.delete("/:id", async(req, res)=>{
  try {
     let result=await Product.findByIdAndDelete(req.params.id);
     res.send({ msg: "product is deleted "});
  } catch (error) {
    console.log(error);  
  }
});
 //update product
 productRouter.put("/:id", async(req, res)=>{
  try {
     let result=await Product.findByIdAndUpdate(
      {_id: req.params.id},
      { $set: {...req.body}}
      );
     res.send({ product: "result", msg: "product is update "});
  } catch (error) {
    console.log(error);  
  }
});







module.exports = productRouter;