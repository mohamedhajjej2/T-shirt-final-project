const mongoose=require("mongoose");

const schema=mongoose.Schema;

const commandeSchema = new schema({
  id_user:String,
    name_product:String,
    img_product:String,
    name_user:String,
   quantity:Number,
     date:String,
    prix:Number,
    status:String
    
});
const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;