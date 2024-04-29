const Product = require("../models/product.model")

const retrieveAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error){
        res.status(500).json({message:error.message});
    }
}

const insertSingleProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

const findProductById =  async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error){
        res.status(500).json({message:error.message});
    }
}

const updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findOneAndUpdate({_id : id}, req.body);

        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error){
        res.status(500).json({message:error.message});
    }
}

const deleteProductById = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.deleteOne({_id : id});

        if(!product){
            res.status(404).json({messaga: "Product not found"});
        }

        res.status(200).json({message: "Product deleted successfully"});
    } catch (error){
        res.status(500).json({message:error.message});
    }
}

module.exports = {
    retrieveAllProducts,
    insertSingleProduct,
    findProductById,
    updateProductById,
    deleteProductById
}