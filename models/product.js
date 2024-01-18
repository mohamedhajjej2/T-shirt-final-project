const mongoose=require("mongoose");

const schema=mongoose.Schema;

const productSchema = new schema({
    name_product:String,
    size:String,
    color:String,
    prix:Number,
    quantity:Number,
    category:String,
    image_product:String
});
const Product = mongoose.model('Product', productSchema);

module.exports = Product;