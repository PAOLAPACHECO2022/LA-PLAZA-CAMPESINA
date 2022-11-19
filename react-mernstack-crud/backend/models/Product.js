const mongoose = require("mongoose"); // se crea una constante mongoose
const Schema = mongoose.Schema;

let productSchema = new Schema(
 
  {
    name: {
      type: String,
    },
    descripcion: {
      type: String,
    },   
    precio: {
      type: Number,
    },
    cantidad: {
      type: String,
    },
  },
  {
    collection: "products", // lo anterior se compone por una colección
  }
);

module.exports = mongoose.model("Product", productSchema);