import mongoose from 'mongoose';
const { Schema } = mongoose;
const productSchema = new Schema(
  {
    name: String,
    price: Number,
    description: String,
    category: String,
    rating: Number,
    supply: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model('product', productSchema);

export default Product;
