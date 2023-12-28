const productModel = require("../model/productModel");
const asyncHandler = require("../middleware/asyncHandler");

const displayProduct = asyncHandler(async (req, res) => {
  const product = await productModel.find({});
  res.json(product);
});

const displayProductbyId = asyncHandler(async (req, res) => {
  const product = await productModel.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

module.exports = {
  displayProduct,
  displayProductbyId,
};
