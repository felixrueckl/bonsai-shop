const { Schema, model } = require("mongoose");

const shoppingCartSchema = new Schema(
  {
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = model("ShoppingCart", shoppingCartSchema);
