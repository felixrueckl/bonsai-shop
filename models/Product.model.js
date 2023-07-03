=======
const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  imgUrl: {
    type: String,
  },
  name: {
    type: String,
  },
  _id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  age: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  category: {
    type: Number,
  },
});

module.exports = model("Product", productSchema);
