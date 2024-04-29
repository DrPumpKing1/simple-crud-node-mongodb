
const express = require("express")
const controller = require("../controllers/product.controller")
const router = express.Router()   

//Retrieve All Products
router.get("/", controller.retrieveAllProducts)

//Insert Single Product
router.post("/", controller.insertSingleProduct)

//Find Single Product By Id
router.get("/:id", controller.findProductById)

//Update Single Product By Id
router.put("/:id", controller.updateProductById)

//Delete Single Product By Id
router.delete("/:id", controller.deleteProductById)

module.exports = router