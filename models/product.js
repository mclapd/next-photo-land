import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  image: String,
  category: String,
  description: String,
  price: String,
  title: String,
  // isNew: Boolean,
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
