const { Router } = require("express");
const ProductRouter = Router();

const {
  displayProduct,
  displayProductbyId,
} = require("../controller/productController");

ProductRouter.get("/", displayProduct);

ProductRouter.get("/:id", displayProductbyId);

module.exports = ProductRouter;
