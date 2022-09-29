const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/productControllers");

//@desc     GET: get all products
//@route    GET /api/products
//@access   Public
router.get("/", getAllProducts);

//@desc     GET: get a product by ID
//@route    GET /api/products/:id
//@access   Public
router.get("/:id", getProductById);

module.exports = router;
