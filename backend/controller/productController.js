const productModel = require("../model/productModel");
const products = require("../Data/product");
const asyncHandler = require("../middleware/asyncHandler");

const displayProduct = asyncHandler(async (req, res) => {
  const product = await products.find({});
  res.json(product);
});

const displayProductbyId = asyncHandler(async (req, res) => {
  const product = await products.findById(req.params.id);
  if(product) {
    res.json(product);
  }
  res.status(404).json({message: "Product Not Found"});
});

module.exports = {
  displayProduct,
  displayProductbyId,
};
