const { Schema, model } = require("mongoose");

const shoppingCartSchema = new Schema(
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    quantity: {
      type: Number,
      min: 0,
    },
    price: {
      type: Number,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("ShoppingCart", shoppingCartSchema);
